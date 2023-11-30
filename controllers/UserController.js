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
            ids:[0, 3],
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

    chats.forEach(chat=>{
        if(chat.ids[0]===id1 && chat.ids[1]===id2){
            result=chat;
        }
    });

    if(result != undefined){
        response.status(200).json({msg: "ok", chat: result})
    }else{
        response.status(500).json({msg: "not found"})
    }

    
}

module.exports = { getUser, getChat };