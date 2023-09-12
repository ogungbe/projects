/*
Author: Jonathan Ogungbe
Date: 3/11/2022
Description: This program prints out the median of a list of nums. Using three funtions
Function: sorter, main, swap, finder.
Implementation: read numbers into a list first then sort by using pass by reference then function to find the middle two!
*/

/* Relevant libraries  & description */
#include<stdio.h>
#include<stdlib.h>
#include<string.h>

/* Function prototypes */
void sorter(int *num, int length);
void swap(int *x, int *y);
void finder(int *lnum, int length);


// main function
int main(int argc, char * argv[])
{
 int lnum[argc - 1]; // size of array where all cmmd line args are
    int length = argc - 1; // Length of the wanted command line nums
    int j = 0;

    for(int i = 1; i < argc; i++)
    {
        *(lnum + j) = atoi(argv[i]);
        j++;
    }
  
    sorter(lnum, length);
    finder(lnum, length);
    return 0;
}
//end of main


// this function is using the swap function to sort the items
// specifically identifying which numbers to pass to other function
void sorter(int *num, int length)
{
  int i, j;
        for (i = 0; i < length; ++i) 
        {
 
            for (j = i + 1; j < length; ++j)
            {
 
                if (num[i] > num[j]) 
                {
 
                    swap(&num[i], &num[j]);
 
                }
 
            }
 
        }
 
    }



// this function is swapping the numbers, as shown in lectures
void swap(int *x, int *y)
{
    int temp = *x;
    *x = *y;
    *y = temp;
}


// this function is finding the middle numbers in sorted list
void finder(int *lnum, int length){
// at this stage we have a sorted list so just need to find midddle two indexs
  int firstnum;
  int secondnum;
  int middle = length / 2;
  firstnum = *(lnum + middle - 1);
  secondnum = *(lnum + middle);
  
  printf("%d\n%d\n", firstnum, secondnum);
}