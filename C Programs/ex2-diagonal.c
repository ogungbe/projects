/*
Author: Jonathan Ogungbe
Date: 3/11/2022
Description: This program prints out the summation of every diag number 
Function: summation.
Implementation: read numbers into a list first then add the third second and first num on each line!
*/

/* Relevant libraries  & description */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

/* Function prototypes */
void sum(int *lnum, int n);


int main(int argc, char* argv[]) {
	int n = atoi(argv[1]);
   int lnum[argc - 1]; // size of array where all cmmd line args are
    int length = n * n;// Length of the wanted command line nums
  
    int j = 0;

    for(int i = 0; i < length; i++) // adding nums to array
    {
        *(lnum + j) = atoi(argv[i + 2]);
        j++;
    }  
  
  sum(lnum, n);
	return 0;
}
// end of main

// function used to add each n - 1 element
void sum(int *lnum, int n){
  int total = 0;
  int* Ptotal = &total; // init pointer
  int len = n * n;
  int num_to_add = n - 1; // so we know how many to skip
  for(int i = num_to_add; i < len - 1; i = i + num_to_add){
    *Ptotal += lnum[i];
    
  }
  printf("%d\n", *Ptotal);
}