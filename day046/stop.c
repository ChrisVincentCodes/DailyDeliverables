#include <linux/kernel.h>   // Kernel header
#include <linux/module.h>   // Module header

void cleanup_module()
{
  printk(KERN_INFO "The module has stopped.");
}