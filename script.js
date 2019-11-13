class User {
    constructor (name) {
        this.name = name
        this.chats = []
        this.inbox = []
        this.blockedUsers = []
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name
    }

    sendMessage (receiver, content) {
        let msg = new Message(this.getName(), receiver.getName(), content)
        receiver.inbox.push(msg)
        return `${this.getName()}, you sent a message to ${receiver.getName()}`
    }

    createGroupChat(user) {
        let u = new GroupChat(user)
        this.chats.push(this)
        this.chats.push(u)
        return 'Chat created'
    }

    getChat(index) {
        return this.chats[index]
    }

    sendMessageInChat(index, receiver, content) {
        let msg = new Message(this.getName(), receiver.getName(), content)
        this.chats[index].sendMessageToGroupChat(msg)
        return `sent the message "${msg.getContent()} to the group chat: "${this.chats[index]}"`
    }

    blockUser(user) {
        this.blockedUsers.push(user)
        return `${user.getName()} is blocked`
    }

    getAllMessages() {
        return this.inbox
    }

    getAMessage(index) {
        return this.inbox[index]
    }

    getAllGroupChatMessages(index) {
        return this.chats[index].getAllMessages()
    }

    getAGroupChatMessage(index, index) {
        return this.chats[index].getAMessage(index)
    }

}

class Message {
    constructor (sender, receiver, content) {
        this.sender = sender
        this.receiver = receiver
        this.content = content
        this.read = false
        this.timeStamp = new Date().now
    }

    getSender() {
        return this.sender
    }

    getReceiver() {
        return this.receiver
    }

    getContent() {
        return this.content
    }

    getreadStatus() {
        return this.read
    }

    setSender(sender) {
        this.sender = sender
    }

    setReceiver(receiver) {
        this.receiver = receiver
    }

    setContent(content) {
        this.content = content
    }

    setreadStatus(read) {
        this.read = read
    }

    ifRead(){
        return this.read
    }

    isRead() {
        this.read = true
    }

    openMessage(){
        this.getContent()
        this.isRead()
    }
}

class GroupChat {
    constructor (name) {
        this.name = name
        this.users = []
        this.messages = []
    }

    addToGroupChat(user) {
        this.users.push(user)
    }

    sendMessageToGroupChat(message) {
        this.messages.push(message)
    }

    getAllMessages() {
        return this.messages
    }
}

    var brian = new User('Brian')   
    var eshwar = new User('Eshwar')