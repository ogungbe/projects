/*
Author: Jonathan Ogungbe
Date: 3/11/2022
Description: This program prints out the total
Function: printtotal, addItems
Implementation: (inspiration from notes) read in items then see if its in a promotion if so do appropriate things...
*/

/* Relevant libraries  & description */
#include<stdio.h>
 #include<string.h>
 #include<stdlib.h>
 
 /* new type*/
 typedef struct Items Items;
 
 /* Define the new struct */
 struct Items
 {
 	char item[20];
 	int amount;
 	float price;
 	int promotion;
 };
 
 /* function prototypes */
 void addItems(Items c[], int argc, char*argv[]);
 void printtotal(Items c[], int numberOfItems);
 
 
 
 int main(int argc, char*argv[])
 {
 	Items items[50];
 	int numberOfItems = (argc - 1)/4;
 
 	addItems(items, argc, argv);
 	printtotal(items, numberOfItems);
 
 	return 0;
 }
 // end of main

// adds items
 void addItems(Items c[], int argc, char*argv[])
 {
 	int numberOfItems = (argc - 1)/4;
 
 	int index = 1;
	int* Pindex = &index;
 	for(int i = 0; i < numberOfItems; ++i)
 	{
 		strcpy(c[i].item, argv[*Pindex]);
 		c[i].amount = atoi(argv[*Pindex + 1]);
 		c[i].price = atof(argv[*Pindex + 2]);
 		c[i].promotion = atoi(argv[*Pindex + 3]);
 		*Pindex = *Pindex + 4;
 	}
 }
 

// prints out the total
 void printtotal(Items c[], int numberOfItems)
 {
  float total = 0;
  float* Ptotal = &total;
 	for(int i = 0; i < numberOfItems; ++i)
 	{
     if(c[i].promotion == 0)
     {
 		  *Ptotal += c[i].amount * c[i].price;
     }
     else{
      *Ptotal= *Ptotal + (c[i].amount- (c[i].amount / 3)) * c[i].price;
       
     }
 	}
   printf("%.2f\n", *Ptotal);
 }