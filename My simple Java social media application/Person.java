import java.util.ArrayList;
import java.util.List;

class Person {
    public String name;
    private String uri;
    private List<Person> followers;
    private List<Person> following;

    public Person(String name) {
        this.name = name;
        followers = new ArrayList<>();
        following = new ArrayList<>();
    }

    public String getName() {
        return name;
    }

    public void addURI(String uri) {
        this.uri = uri;
    }

    public void follow(Person person) {
        following.add(person);
        person.addFollower(this);
    }

    public void unfollow(Person person) {
        following.remove(person);
        person.removeFollower(this);
    }

    public void addFollower(Person person) {
        followers.add(person);
    }

    public void removeFollower(Person person) {
        followers.remove(person);
    }

    public List<Person> getFollowers() {
        return followers;
    }

    public List<Person> getFollowing() {
        return following;
    }

    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append(name).append("\n");
        sb.append("- URI: ").append(uri).append("\n");
        sb.append("- Followers: ");
        for (Person follower : followers) {
            sb.append(follower.getName()).append(", ");
        }
        sb.append("\n- Following: ");
        for (Person followee : following) {
            sb.append(followee.getName()).append(", ");
        }
        sb.append("\n");
        return sb.toString();
    }
}
