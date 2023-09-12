// libraries.
#include <stdio.h>
#include <stdlib.h>
/*
Name: find-frequent.c
Functions: bubble_sort, simnums, valid, print.
Returns: int
Description: arrays given get sorted then printed amount of times rthey occur if count > 3
Author: Jonathan Ogungbe
Date: 30-11-2030
*/

// Function prototypes.
void bubble_sort(int *pnum, int length);  // Sorts array.
void valid(int num, int count);  // depends on get_count to check if the count is more than 3 if so print out the elements.
void print(int num, int count); // prints out the elements
void simnums(int *npointer, int length);  // check if numbers are the same.
 
 
int main(int argc, char *argv[])
{

    // Defining variables.
    int capacity = 5;  // Initial size of pnum will be 5.
    int length = argc - 1;
    int *pnum = calloc(capacity, sizeof(int));
    if(!pnum)
    {
        //memory allocation
        printf("Not enough memory!");
        exit(0);
    }
 
    for(int i = 0; i < length; ++i)
    {
        pnum[i] = atoi(argv[i + 1]);

        if(i == capacity - 1)
        {
            int *p_temp;
            capacity += 1;
            p_temp = (int*)realloc(pnum, capacity * sizeof(int));
            if(!p_temp)  // this checks if reallocations a success.
            {
                printf("Unfortunately memory reallocation failed. Exiting...\n");
                free(pnum); // freeing up memory
                pnum = NULL;
                exit(0);
            }
             
            pnum = p_temp;
        }
    }
     
    bubble_sort(pnum, length);
    simnums(pnum, length);
 
    return(0);
}



// Functions


void print(int num, int count)
{
    printf("%d\n", num);
}


void simnums(int *npointer, int length)
{
    int count = 0;
 
    for(int i = 0; i < length; ++i)
    {
        count = 0;
        for(int j = 0; j < length; ++j)
        {
            if(npointer[i] == npointer[j])  // Compare elements to one another.
            {
                count += 1;
            }
        }
 
        valid((npointer[i]), count);
    }
}


void bubble_sort(int *pnum, int length) {
    for (int i = 0; i < length; i++ ){
        for (int j = 0; j < length; j++) {
            if (pnum[j] > pnum[i]) {
                int tmp = pnum[i];
                pnum[i] = pnum[j];
                pnum[j] = tmp;
            }
        }
    }
}

void valid(int num, int count)
{
    if(count > 3)
    {
        print(num, count);
    }
}