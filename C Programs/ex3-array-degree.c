/*
Name: ex3-array-degree.c
Functions: linked_list, values, highest_degree.
Returns: int
Description: make a linked list, get all the values in the list then find max number of occurences of a number
Author: Jonathan Ogungbe
Date: 30-11-2030
*/

// libraries.
#include<stdio.h>
#include<stdlib.h>

// struct
typedef struct Node Node;

struct Node
{
    int value;
    Node *next; 
};

/*function prototypes*/
Node* linked_list(int length, char*argv[]); // build linked list
void values(Node *first); // returns values in list
void highest_degree(Node *first); // finds highest number of times that a num ocuurs 


// start of main
int main(int argc, char*argv[])
{
    int length = argc - 1;
    Node* first = NULL;
    first = linked_list(length, argv);
    highest_degree(first);

    return 0;
}
// end of main

Node* linked_list(int length, char*argv[])
{
    Node* curr = NULL;
    Node* first = NULL;

    first = (Node*)calloc(1, sizeof(Node));
    curr = first;

    for(int i = 0; i < length; ++i)
    {
        curr->value = atoi(argv[i+1]);

        //Check if it's the tail node
        if(i == length - 1){
            curr->next = NULL;
        } else {
            curr->next = (Node*)calloc(1, sizeof(Node));
            curr = curr->next;
        }
    }

    return first;
}


void values(Node *first)
{
    Node* p = NULL;
    for(p = first; p != NULL; p = p->next)
    {
        printf("%d\n", p->value);
    }
}


void highest_degree(Node *first)
{
    Node* x = NULL;
    Node* y = NULL;
    int max = 0;
    for(x = first; x != NULL; x = x->next)
    {
        int curr = 1;
        int target = x->value;
        for(y = x->next; y != NULL; y = y->next)
        {
            if(y->value == target)
            {
                curr++;
            }
        }
        if(curr > max)
        {
            max = curr;
        }
    }
    printf("%d\n", max);
}