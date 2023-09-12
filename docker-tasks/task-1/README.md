# Task 1 - Dockerfile

**Do not make changes to the `Makefile` in this directory.**

I will test your work as follows:

```
$ make build
$ make run
$ make get
$ make stop
```

All of the commands must succeed, and the output of the `make get` command must be:

```
Mary had a little lamb.
```

In other words, you must complete the `Dockerfile`.

From which I will build an image named `task-1`.

From which I will create a container named `task-1`.

And that container must implement an HTTP server running on port 80, which must respond
with the message above for the resource `/`.
