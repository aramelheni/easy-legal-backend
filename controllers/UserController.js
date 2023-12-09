const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

async function postSignup(request, response) {
    const { email, password, phoneNumber, firstName, lastName, role } = request.body;
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
        email, password: hashedPassword, phoneNumber, firstName, lastName, role
    });
    await user.save().then(user => {
        response.status(200).json({ msg: "ok" });
        console.log("A new user has signed up!", user);
    }).catch(error => {
        response.status(500).json({ msg: "Failed to save the new user in the database:" + error });
    });
}

async function postSignin(request, response) {
    const { email, password } = request.body;

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
            console.log("A user has signed-in:", user);
            const payload = {
                user
            };
            const token = jwt.sign(payload, process.env.JWT_SECRET);
            response.status(200).json({ msg: "ok", token, user });
        } else{
            console.log("User failed to sign-in:", email, " : ", password);
            response.status(500).json({ msg: "User not found" });
        }
    }).catch(error => {
        response.status(500).json({ msg: "Could not sign in: " + error });
    });
}

async function getCurrentUser (request, response){
    const id = request.header.token.payload._id;
    console.log(id);
}

module.exports = { postSignin, postSignup, getCurrentUser };