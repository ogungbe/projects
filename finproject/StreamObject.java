import java.util.ArrayList;
import java.util.List;

class StreamObject {
    private String content;
    private Person creator;
    private List<Person> viewers;

    public StreamObject(String content, Person creator) {
        this.content = content;
        this.creator = creator;
        viewers = new ArrayList<>();
    }

    public String getContent() {
        return content;
    }

    public Person getCreator() {
        return creator;
    }

    public void addViewer(Person person) {
        viewers.add(person);
    }

    public List<Person> getViewers() {
        return viewers;
    }
}
