// jonathan ogungbe
// student number: 21386221
/*
I have read and understood the DCU Academic Integrity and Plagiarism Policy.
I accept the  penalties that may be imposed should I engage in practice or
practices that breach this policy.
I have identified and included the source of all facts, ideas, opinions and viewpoints
of others in the assignment references.
Direct quotations, paraphrasing, discussion of ideas from books, journal articles,
internet sources, module text,
or any other.
source whatsoever are acknowledged and the sources cited are identified in the
assignment references.
I declare that this material, which I now submit for assessment, is entirely my
own work and has not been taken from the work of others save and to the extent that such work has been cited and acknowledged within the text of my work.
*/
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/types.h>
#include "my_shell.h"

void init_shell() {
    char *user = getenv("USER");
    if (user == NULL) {
        fprintf(stderr, "Could not get username\n");
        exit(EXIT_FAILURE);
    }
    printf("Welcome to my shell, %s:)\n", user);
}