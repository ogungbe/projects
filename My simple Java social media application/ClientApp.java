public class ClientApp {
    public String demo() {
        // Create some Person instances
        Person person1 = new Person("Alice");
        person1.addURI("https://example.com/alice");

        Person person2 = new Person("Bob");
        person2.addURI("https://example.com/bob");
        StreamObject object = new StreamObject("hey guys welcome to my daily vlog!", person2);

        Person person3 = new Person("Charlie");
        person3.addURI("https://example.com/charlie");

        Like like = new Like(person1, object);

        // Make people follow each other
        person1.follow(person2);
        person1.follow(person3);

        person2.follow(person1);
        person2.follow(person3);

        person3.follow(person1);
        person3.follow(person2);

        // Print information about each person
        String output = person1.toString() + "\n" +
                person2.toString() + "\n" +
                person3.toString() + "\n";

        // Send and receive messages
        Message message1 = new Message(person1, person2, "Hello Bob!");
        Message message2 = new Message(person3, person1, "Hi Alice!");

        // Print information about sent messages
        output += "Sent messages:\n";
        output += "Message from " + message1.getSender().getName() + " to " + message1.getRecipient().getName() + ": "
                + message1.getContent() + "\n";
        output += "Message from " + message2.getSender().getName() + " to " + message2.getRecipient().getName() + ": "
                + message2.getContent() + "\n";

        output += "Liker: " + like.getLiker().getName() + "\n";
        output += "Object Creator: " + like.getObject().getCreator().getName() + "\n";
        output += "Object Content: " + like.getObject().getContent() + "\n";

        return output;
    }
}
