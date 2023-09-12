# Task 2 - docker compose

**Do not make changes to the `Makefile` in this directory.**

You should `git add` any additional files upon which your solution depends.

I will test your work like this:

```
$ make up
$ make test     # this runs ./test.bash
$ make stop
```

The output of running `make test` should be (loosely):

```
Nobody expects the Spanish Inquisition!
```

**Important constraints**

- You must use `docker compose`.
- Your composition must involve *at least two* containers.
- When I run `make test`, the *Spanish Inquisition* message must pass between those containers before being
  written to standard output.

## For 30 marks

One way to do this is for one container to be a web server, and the other to somehow just run `wget`.

This approach, or anything too similar to it, will receive a maximum of 30 marks.

## For 70 marks

Impress me!

Pass the message between the containers in some interesting way.

I will run your composition, but I will also examine any scripts and configuration files which your solution
requires.

I will not strictly require exactly the text above, but the gist of the text must be clear.

Ask if you're not sure.

A penalty will be applied for superfluous 80s singers.
