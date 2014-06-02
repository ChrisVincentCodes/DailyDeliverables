#include <linux/kernel.h>   // Kernel header
#include <linux/module.h>   // Module header

// Documentation & licensing 
#define DRIVER_AUTHOR "Christopher Vincent <chrisvincentcodes.com>"
#define DRIVER_DESC   "startstop module - two C files"

MODULE_LICENSE("GPL");
MODULE_AUTHOR(DRIVER_AUTHOR); /* I wrote this module */
MODULE_DESCRIPTION(DRIVER_DESC); /* This module is the third version of Hello World */

int init_module(void)
{
  printk(KERN_INFO "The module has started!\n");
  return 0;
}