my shell


Description of Operation and Commands

The program allows users to enter commands in the terminal to perform operations. The available commands include:

cd  - change the current default directory. If the  argument is not present, report the current directory. If the directory does not exist an appropriate error should be reported. This command should also change the PWD environment variable.
clr - clear the screen.
dir  - list the contents of directory
environ - list all the environment strings
echo  - echo  on the display followed by a new line (multiple spaces/tabs may be reduced to a single space)
help - display the user manual using the more filter.  
pause - pause operation of the shell until 'Enter' is pressed
quit - quits the shell




Process Concept and Background/Foreground Execution:

When a user executes a command, our shell creates a process to run that command. The user can choose to run the process in either the foreground or the background.

Foreground execution means that the shell will wait for the process to complete before accepting further commands. Background execution means that the shell will not wait for the process to complete. User can continue to enter commands while the process runs in the background.

To run a process in the background, the user can add an ampersand (&) to the end of the command.


Description of I/O Redirection

I/O redirection is a feature that allows users to redirect the input or output of a command to a file or device. The program supports output redirection using the > symbol, which redirects the output of a command to a file.


Overall Layout and Display of Understanding

The program is organized into different functions that handle different tasks, such as parsing user input, executing commands, and displaying the help menu. As we can see our code is split into different files. Each with their own function.
The program uses system calls and C library functions to interact with the file system and execute commands.

References:
Molay, B. (2003). Understanding Unix/Linux Programming (c code a bit outdated). Prentice Hall PTR.
Programming Knowledge. (2016, January 7). Operating System Tutorial for Beginners. https://www.youtube.
GeeksforGeeks. https://www.geeksforgeeks.org/operating-systems/#ss
module notes






<!-- # jonathan ogungbe
// student number: 21386221
/
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
*/ -->