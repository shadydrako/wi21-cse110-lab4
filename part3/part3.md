![When the debugger is triggered, set a breakpoint at the initialization of the local variable result in calculateSum(). Take a screenshot of the list of breakpoints containing the breakpoint you just added.](trigger.jpg)

![Add watch expressions to find the value of num1 and num2, and the data type of result. Take a screenshot of the watch expressions list.](watch.jpg)


### What was the bug?

The bug was that the function was taking num1 and num2 as string variables. This means that
the input was strings, so num1 and num2 are concatenated instead of added.

### How would you fix it? Include screenshot of your fix.

I would fix this by adding the Number(num1) and Number(num2), this would change the string values to integers/numerical values
so the + symbol will be seen as addition.

![the fix](fix.jpg)