class Like implements Activity {
    private Person liker;
    private StreamObject object;

    public Like(Person liker, StreamObject object) {
        this.liker = liker;
        this.object = object;
    }

    public Person getLiker() {
        return liker;
    }

    public StreamObject getObject() {
        return object;
    }

    @Override
    public String getURI() {
        return "like://" + liker.getName() + "/" + object.getCreator().getName();
    }
}
