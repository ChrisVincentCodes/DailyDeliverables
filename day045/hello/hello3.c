// Defining __KERNEL__ and MODULE allows us to access kernel-level code not usually available to userspace programs.
/*#undef __KERNEL__
#define __KERNEL__

#undef MODULE
#define MODULE*/

// Linux Kernel/LKM headers: module.h is needed by all modules and kernel.h is needed for KERN_INFO.
#include <linux/module.h>   // included for all kernel modules
#include <linux/moduleparam.h> // included for MODULE_PARAM_DESC and module_param_array macros

#include <linux/kernel.h>   // included for KERN_INFO
#include <linux/init.h>     // included for __init and __exit macros

#include <linux/stat.h>        // included for S_IRUSR, S_IWUSR, S_IRGRP, S_IWGRP, and S_IROTH macros


// Documentation & licensing 
#define DRIVER_AUTHOR "Christopher Vincent <chrisvincentcodes.com>"
#define DRIVER_DESC   "Hello World - Version 3"

MODULE_LICENSE("GPL");
MODULE_AUTHOR(DRIVER_AUTHOR); /* I wrote this module */
MODULE_DESCRIPTION(DRIVER_DESC); /* This module is the third version of Hello World */


// Main program

// Integer variable declarations
static int myInt = 420;
static short int myShort = 1;
static long int myLong = 9999;

// String variable declarations
static char *myString = "chrisVincent";   // char pointer

// Array variable declarations
static int myIntArray[2] = {-1, -1};
static int arr_argc = 0;

module_param(myInt, int, S_IRUSR | S_IWUSR | S_IRGRP | S_IROTH);
MODULE_PARM_DESC(myInt, "An integer");
module_param(myShort, short, S_IRUSR | S_IWUSR | S_IRGRP | S_IWGRP);
MODULE_PARM_DESC(myShort, "A short integer");
module_param(myLong, long, S_IRUSR);
MODULE_PARM_DESC(myLong, "A long integer");
module_param(myString, charp, 0000);    // charp is char pointer value
MODULE_PARM_DESC(myString, "A character string");

module_param_array(myIntArray, int, &arr_argc, 0000); // & signifies pointer reference
MODULE_PARM_DESC(myIntArray, "An array of integers");


// Main program
static int __init hello3_init(void)
{
  int i;
  printk(KERN_INFO "Hello, world 5\n=============\n");
  printk(KERN_INFO "myInt is an integer: %d\n", myInt);
  printk(KERN_INFO "myShort is a short integer: %hd\n", myShort);
  printk(KERN_INFO "myLong is a long integer: %ld\n", myLong);
  printk(KERN_INFO "myString is a character string: %s\n", myString);
  for (i = 0; i < (sizeof myIntArray / sizeof (int)); i++)
  {
    printk(KERN_INFO "myIntArray[%d] = %d\n", i, myIntArray[i]);
  }
  printk(KERN_INFO "got %d arguments for myIntArray. \n", arr_argc);
  return 0;
}

static void __exit hello3_cleanup(void)
{
  printk(KERN_INFO "Cleaning up module.\n");
}

module_init(hello3_init);
module_exit(hello3_cleanup);

