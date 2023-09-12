FROM ubuntu:16.04
RUN apt-get update && \
apt-get install -y netcat ssh iputils-ping && \
mkdir /var/run/sshd && \
useradd -p $(openssl pawd -1 u2pasword) --create-home--shell/bin/bash --groups suo u2

EXPOSE 80

CMD ["/usr/sbin/sshd", "-D"]

