public class Follow {
    private Person follower;
    private Person followee;

    public Follow(Person follower, Person followee) {
        this.follower = follower;
        this.followee = followee;
    }

    public Person getFollower() {
        return follower;
    }

    public Person getFollowee() {
        return followee;
    }

    public String getURI() {
        return "follow://" + follower.getName() + "/" + followee.getName();
    }
}
