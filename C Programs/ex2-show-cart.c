/*
Author: Jonathan Ogungbe
Date: 3/11/2022
Description: This program prints out no sale or sale depending on bin num
Function: printItems, addItems
Implementation: (inspiration from notes) read in items then based on promotion then print
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
 void printItems(Items c[], int numberOfItems);
 
 
 
 int main(int argc, char*argv[])
 {
 	Items items[50];
 	int numberOfItems = (argc - 1)/4;
 
 	addItems(items, argc, argv);
 	printItems(items, numberOfItems);
 
 	return 0;
 }
 // end of main

// adds items
 void addItems(Items c[], int argc, char*argv[])
 {
 	int numberOfItems = (argc - 1)/4;
 
 	int index = 1;
 	for(int i = 0; i < numberOfItems; ++i)
 	{
 		strcpy(c[i].item, argv[index]);
 		c[i].amount = atoi(argv[index + 1]);
 		c[i].price = atof(argv[index + 2]);
 		c[i].promotion = atoi(argv[index + 3]);
 		index = index + 4;
 	}
 }
 

// prints out the items
 void printItems(Items c[], int numberOfItems)
 {
 	for(int i = 0; i < numberOfItems; ++i)
 	{
 		printf("%s,%d,%.2f,", c[i].item, c[i].amount, c[i].price);
     if(c[i].promotion == 1)
     {
 		  printf("On Sale\n");
     }
     else{
 		  printf("No Sale\n");
       
     }
 	}
 }