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

#define MAX_ARGS 10

void parse_input(char *input) {
    char *token;
    char *args[MAX_ARGS + 1];
    int arg_count = 0;
    int bg_exec = 0; // Flag for background execution

    // Parse the command line into arguments
    token = strtok(input, " ");
    while (token != NULL && arg_count < MAX_ARGS) {
        args[arg_count++] = token;
        token = strtok(NULL, " ");
    }

    // Check for background execution
    if (arg_count > 0 && strcmp(args[arg_count - 1], "&") == 0) {
        bg_exec = 1;
        args[arg_count - 1] = NULL;
        arg_count--;
    }
    
    

    args[arg_count] = NULL;

    // Execute the command
    pid_t pid = fork();
    if (pid < 0) {
        perror("fork() error");
        exit(1);
    } else if (pid == 0) {
        // Child process
        execvp(args[0], args);
        perror("execvp() error");
        exit(1);
    } else {
        // Parent process
        if (!bg_exec) { // Wait for foreground execution
            int status;
            waitpid(pid, &status, 0);
        } else { // Print message for background execution
            printf("[%d] %s\n", pid, args[0]);
        }
    }
}

