/*
name: ec3-delete-even.c
Author: Jonathan Ogungbe
Date: 30/11/2021
Returns: int
functions: create_list, new_list, print, total.
Description: adds items to a doubly linked list, then it removes the even numbers, then sums the numbers and adds to linked lists
*/

/* Relevant libraries  & description */
#include <stdio.h>
#include <stdlib.h>

// struct
typedef struct Node Node;

struct Node {
    int value;
    Node *next;
    Node *prev;
};

/* Function prototypes */
Node* create_list(int length, char * argv[]); // creates the linked list
Node* new_list(Node *first); // removes even numbers from the linked list
void print(Node *first); // prints out output line by line
Node* total(Node*first); // gets the total of remaining numbers

/* main function */
int main(int argc, char * argv[])
{
    int length = argc - 1;
    Node* first = NULL;

    first = create_list(length, argv);
    first = new_list(first);
    first = total(first);
    print(first);

    return 0;
}

// functions


Node* new_list(Node *first)
{
    Node *element = first;
    Node *tmp = NULL;

    while (first->value % 2 == 0)
    {
        tmp = first->next;
        free(first); // Freeing up memory
        first = tmp;
    }

    for (element = first; element != NULL; element = element->next)
    {
        if(element->value % 2 == 0) // checking if even
        {
            element->prev->next = element->next;
            element->next->prev = element->prev;
            tmp = element->prev;
            free(element); // Freeing up memory
            element = tmp;
            
        }
        else{
            continue;
        }
    }
    return first; // Returns the first item in list
}


Node* create_list(int length, char * argv[])
{
    Node *curr, *first, *prev;

    first = (Node*)calloc(1, sizeof(Node)); 
    curr = first;

    curr->value = atoi(argv[1]);

    curr->prev = NULL;

    for(int i = 2; i < length + 1; i++)
    {
        if(atoi(argv[i]) % 2 == 0 && i == length)
        {
            curr->next = NULL;
            return first;
        }

        curr->next = (Node*)calloc(1, sizeof(Node));

        prev = curr;

        curr = curr->next;

        curr->value = atoi(argv[i]);

        curr->prev = prev;
    }
    curr->next = NULL;
    return first; // Returns
}



Node* total(Node *first)
{
    Node* element = NULL;
    Node* tmp = NULL;
    int total = 0;

    for(element = first; element != NULL; element = element->next)
    {
        total += element->value;
        if(element->next == NULL)
        {
            element->next = (Node*)calloc(1, sizeof(Node));
            tmp = element->prev;
            element = element->next;
            element->value = total;
            element->next = NULL;
            element->prev = tmp;
        }
    }
    return first; // Returning the first item in the linked list
}


void print(Node *first)
{
    // Statements & initialisation
    Node* element = NULL;

    // Printing each item in the linked list
    for (element = first; element != NULL; element = element->next)
    {
        printf("%d\n", element->value);
    }
}
