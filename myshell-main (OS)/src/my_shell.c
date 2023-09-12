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

#define MAX_COMMAND_LENGTH 1000

int main(int argc, char *argv[]) {
    FILE *batchfile = NULL;
    char command[MAX_COMMAND_LENGTH];
    int should_run = 1;

    if (argc == 2) {
        batchfile = fopen(argv[1], "r");
        if (batchfile == NULL) {
            perror("fopen() error");
            return 1;
        }
    }

    init_shell();

    while (should_run) {
        if (batchfile != NULL) {
            if (fgets(command, MAX_COMMAND_LENGTH, batchfile) == NULL) {
                break;
            }
            command[strcspn(command, "\n")] = 0;
            printf("%s\n", command);
        } else {
            printf(">> ");
            fflush(stdout);
            if (fgets(command, MAX_COMMAND_LENGTH, stdin) == NULL) {
                break;
            }
            command[strcspn(command, "\n")] = 0;
        }

        if(strcmp(command, "clr") == 0) {
            clear_screen();
        } else if (strcmp(command, "dir") == 0) {
            char *args[] = {"ls", "-al", NULL};
            execvp(args[0], args);
        } else if (strcmp(command, "quit") == 0) {
            should_run = 0;
            break;
        } else if (strcmp(command, "environ") == 0) {
            environ_cmd();
        } else if (strcmp(command, "pause") == 0) {
            pause_cmd();
        } else if (strncmp(command, "echo", 4) == 0) {
            char *token;
            char *args[MAX_COMMAND_LENGTH + 1];
            int arg_count = 0;
            char *out_file = NULL;
            int background = 0;

            // Parse the command line into arguments
            token = strtok(command, " ");
            while (token != NULL && arg_count < MAX_COMMAND_LENGTH) {
                if (strcmp(token, ">") == 0) {
                    token = strtok(NULL, " ");
                    if (token != NULL) {
                        out_file = token;
                    }
                } else if (strcmp(token, "&") == 0) {
                    background = 1;
                    break;
                } else {
                    args[arg_count++] = token;
                }
                token = strtok(NULL, " ");
            }
            args[arg_count] = NULL;

            if (out_file != NULL) {
                FILE *fp = fopen(out_file, "w");
                if (fp == NULL) {
                    perror("fopen() error");
                    return 1;
                }
                int saved_stdout = dup(STDOUT_FILENO);
                dup2(fileno(fp), STDOUT_FILENO);
                close(fileno(fp));
                echo_cmd(args, arg_count);
                dup2(saved_stdout, STDOUT_FILENO);
                //
            } else {
                pid_t pid = fork();
                if (pid == -1) {
                    perror("fork() error");
                    return 1;
                } else if (pid == 0) {
                    execvp(args[0], args);
                    perror("execvp() error");
                    return 1;
                } else {
                    if (!background) {
                        waitpid(pid, NULL, 0);
                    } else {
                        printf("[%d]\n", pid);
                    }
                }
            }
        } else if (strcmp(command, "help") == 0) {
            help_cmd();
        } else {
            parse_input(command);
        }
    }

    if (batchfile != NULL) {
        fclose(batchfile);
    }

    return 0;
}
