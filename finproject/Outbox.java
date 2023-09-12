interface Outbox extends SendMessage, DeliverNextMessage {
    int getCount();
}
