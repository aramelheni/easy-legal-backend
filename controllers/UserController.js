async function getUser(request, response) {
    response.status(200).json({ users: users });
}


async function getChat(request, response) {
    const id1 = parseInt(request.params.id1)
    const id2 = parseInt(request.params.id2)
    const chats = [
        {
            ids:[0, 1],
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
            ids:[0, 2],

            messages: [
                
                {
                    senderId: 2,
                    content: "ahla ya nahla",
                    date: new Date()
                },
                {
                    senderId: 0,
                    content: "chbi el kattouss manbouz",
                    date: new Date()
                }
            ]
        }, {
            ids:[0, 3],

            messages: [
                {
                    senderId: 0,
                    content: "ahla ya nahla",
                    date: new Date()
                },
                {
                    senderId: 0,
                    content: "chbi el kattouss manbouz",
                    date: new Date()
                },
                {
                    senderId: 3,
                    content: "Khra nekrah web",
                    date: new Date()
                }
            ]
        }
    ]

    let result = null;

    chats.forEach(chat=>{
        console.log(id1, id2);
        if(chat.ids[0]===id1 && chat.ids[1]===id2){
            result=chat;
        }
    });
    response.status(200).json(result)

    
}

module.exports = { getUser, getChat };