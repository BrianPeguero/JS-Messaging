class User {
    constructor(name) {
        this.name = name
        this.block = false
        this.inbox = []
    }
}

class Message {
    constructor(sender, content) {
        this.sender = sender
        this.content = content
        this.read = false
    }
}

