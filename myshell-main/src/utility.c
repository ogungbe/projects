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
#include <string.h>
#include <unistd.h>
#include <sys/wait.h>
#include "my_shell.h"
#include "init_shell.h"
#include "parse_input.h"




extern char **environ;


void clear_screen() {
    printf("\033[H\033[2J");
}


void clr() {
    system("clear");
}



void dir(char *directory) {
    char *ls_args[4] = {"ls", "-al", directory, NULL};
    pid_t pid = fork();
    if (pid == 0) {
        execvp("ls", ls_args);
        perror("execvp() error");
        exit(1);
    } else if (pid > 0) {
        waitpid(pid, NULL, 0);
    } else {
        perror("fork() error");
    }
}

void environ_cmd() {
    char **env = environ;
    while (*env != NULL) {
        printf("%s\n", *env);
        env++;
    }
}

void pause_cmd() {
    printf("Press Enter to continue...");
    fflush(stdout);
    getchar();
}

void echo_cmd(char *args[], int num_args) {
    for (int j = 1; j < num_args; j++) {
        printf("%s ", args[j]);
    }
    printf("\n");
}

void help_cmd() {
    char *more_args[3] = {"more", "manual/readme.md", NULL};
    pid_t pid = fork();
    if (pid == 0) {
        execvp("more", more_args);
        perror("execvp() error");
        exit(1);
    } else if (pid > 0) {
        waitpid(pid, NULL, 0);
    } else {
        perror("fork() error");
    }
}
