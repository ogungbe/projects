class Message implements Activity {
    private Person sender;
    private Person recipient;
    private String content;

    public Message(Person sender, Person recipient, String content) {
        this.sender = sender;
        this.recipient = recipient;
        this.content = content;
    }

    public Person getSender() {
        return sender;
    }

    public Person getRecipient() {
        return recipient;
    }

    public String getContent() {
        return content;
    }

    @Override
    public String getURI() {
        return "message://" + sender.getName() + "/" + recipient.getName();
    }
}
