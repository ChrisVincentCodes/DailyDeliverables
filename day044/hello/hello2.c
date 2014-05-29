// Defining __KERNEL__ and MODULE allows us to access kernel-level code not usually available to userspace programs.
#undef __KERNEL__
#define __KERNEL__

#undef MODULE
#define MODULE

// Linux Kernel/LKM headers: module.h is needed by all modules and kernel.h is needed for KERN_INFO.
#include <linux/module.h>   // included for all kernel modules
#include <linux/kernel.h>   // included for KERN_INFO
#include <linux/init.h>     // included for __init and __exit macros

   

#define DRIVER_AUTHOR "Christopher Vincent <chrisvincentcodes.com>"
#define DRIVER_DESC   "Hello World - Version 2"

static int __init hello_init(void)
{
  printk(KERN_INFO "Hello world!\n");
  return 0;   // Non-zero return means that the module couldn't be loaded.
}

static void __exit hello_cleanup(void)
{
  printk(KERN_INFO "Cleaning up module.\n");
}

module_init(hello_init);
module_exit(hello_cleanup);


/*
* Get rid of warning message by declaring code as GPL.
*/
MODULE_LICENSE("GPL");

/*
* Or with defines, like this:
*/
MODULE_AUTHOR(DRIVER_AUTHOR); /* Who wrote this module? */
MODULE_DESCRIPTION(DRIVER_DESC); /* What does this module do */