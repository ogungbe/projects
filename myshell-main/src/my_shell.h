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

#ifndef MY_SHELL_H
#define MY_SHELL_H

void init_shell();
char *read_input();
void parse_input(char *input);
void execute(char **args, int num_args);
void clr();
void clear_screen();
void dir(char *directory);
void environ_cmd();
void pause_cmd();
void echo_cmd(char *args[], int num_args);
void help_cmd();


#endif