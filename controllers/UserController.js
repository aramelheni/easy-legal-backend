const User = require("../models/User");
const bcrypt = require('bcrypt');

async function postSignup(request, response) {
    const { email, password, phoneNumber, firstName, lastName, userType } = request.body;
    console.log(request.body, "is trying to sign up");

    let createUser = true;
    await User.findOne({ email }).then(user => {
        if (user) {
            response.status(500).json({ msg: "User with that email already exists." });
            createUser = false;
        }
    }).catch(error => {
        response.status(500).json({ msg: "Could not verify if the user already exists: " + error });
        createUser = false;
    });
    if (!createUser)
        return;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
        email, password: hashedPassword, phoneNumber, firstName, lastName, userType
    });
    console.log("User doesn't exist");
    await user.save().then(user => {
        response.status(200).json({ msg: "ok" });
    }).catch(error => {
        response.status(500).json({ msg: "Failed to save the new user in the database:" + error });
    });
}

async function postSignin(request, response) {
    const { email, password } = request.body;
    console.log("email(", email, "), tried to sign in with pwd(", password, ")");

    await User.findOne({ email }).then(async user => {
        let succeed = false;
        if (user) {
            await bcrypt.compare(password, user.password).then(isMatching => {
                succeed = isMatching
            }).catch(error => {
                console.log(error);
            });
        }
        if (succeed) {
            response.status(200).json({ msg: "ok", data: user });
        } else
            response.status(500).json({ msg: "User not found" });
    }).catch(error => {
        response.status(500).json({ msg: "Could not sign in: " + error });
    });
}

async function getChat(request, response) {
    const id1 = parseInt(request.params.id1)
    const id2 = parseInt(request.params.id2)
    const chats = [
        {
            ids: [0, 1],
            messages: [
                {
                    senderId: 0,
                    content: "ahla ya nahla",
                    date: new Date()
                },
                {
                    senderId: 1,
                    content: "chbi el kattouss manbouz",
                    date: new Date()
                }
            ]
        }, {
            ids: [0, 2],
            messages: [

                {
                    senderId: 2,
                    content: "ahla ena mouhib",
                    date: new Date()
                },
                {
                    senderId: 0,
                    content: "fibeli",
                    date: new Date()
                }
            ]
        }, {
            ids: [0, 3],
            messages: [
                {
                    senderId: 3,
                    content: "Khra nekrah web",
                    date: new Date()
                }
            ]
        }
    ]

    let result = undefined;

    chats.forEach(chat => {
        if (chat.ids[0] === id1 && chat.ids[1] === id2) {
            result = chat;
        }
    });

    if (result != undefined) {
        response.status(200).json({ msg: "ok", chat: result })
    } else {
        response.status(500).json({ msg: "not found" })
    }


}

module.exports = { postSignin, postSignup, getChat };