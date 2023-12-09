const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

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
            const payload = {
                _id: user._id,
                userRole: user.userType
            };
            const token = jwt.sign(payload  , process.env.JWT_SECRET);
            response.status(200).json({ msg: "ok", data: user, token, user: payload });
        } else
            response.status(500).json({ msg: "User not found" });
    }).catch(error => {
        response.status(500).json({ msg: "Could not sign in: " + error });
    });
}

module.exports = { postSignin, postSignup };