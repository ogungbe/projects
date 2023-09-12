/*
Name: ex3-product.c
Functions: create_list, new_price, print.
Returns: int and str
Description: use a function to add cmnd line to a list then calculate the new price then print one by one
Author: Jonathan Ogungbe
Date: 30-11-2030
*/
/* Relevant libraries  & description */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

// struct
typedef struct Node Node;

struct Node {
    char code[25];
    char name[35];
    int price;
    Node *next;
    Node *prev;
};
/* Function prototypes */
void print(Node *first); // prints outputs line by line
Node* create_list(int length, char * argv[]); // used to add info to list
Node* new_price(Node *first); // calculates the price after increases by 20% 

/* main function */
int main(int argc, char * argv[])
{
    int prods = (argc - 1);
    Node* first = NULL;
    first = create_list(prods, argv); // Adding products to linked list from command line
    first = new_price(first); // Changing the price of the products from Ireland
    print(first); // Printing the updated products, line by line

    return 0; // Exiting the function correctly
}


Node* create_list(int length, char * argv[])
{

    Node *curr, *first, *prev;

    first = (Node*)calloc(1, sizeof(Node)); // memory allocation
    curr = first;

    strcpy(curr->code, argv[1]);
    strcpy(curr->name, argv[2]);
    curr->price = atoi(argv[3]);
    curr->prev = NULL;

    // adds all the remaining products to list
    for(int i = 4; i < length; i+= 3)
    {
        curr->next = (Node*)calloc(1, sizeof(Node)); // Memory allocation

        prev = curr;

        curr = curr->next;

        strcpy(curr->code, argv[i]);
        strcpy(curr->name, argv[i + 1]);
        curr->price = atoi(argv[i + 2]);
        
        curr->prev = prev;
    }
    curr->next = NULL; // Making sure tail is NULL
    return first; // Returning the head of the linked list
}



Node* new_price(Node *first)
{
    Node *element = NULL;

    // calculating prices
    for(element = first; element != NULL; element = element->next)
    {
        if(!strcmp(element->name, "Ireland"))
        {
            element->price = element->price * 1.2; // 20% increase
        }
    }
    return first; // Returning the head
}

void print(Node *first)
{
    Node *element = NULL;   
    for (element = first; element != NULL; element = element->next)
    {
        printf("%s\n", element->code);
        printf("%s\n", element->name);
        printf("%d\n", element->price);
    }
}
