async function getUser(request, response) {
    response.status(200).json({ users: users });
}

module.exports = {getUser};