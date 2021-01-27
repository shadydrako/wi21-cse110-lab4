# Part 1

1.  This will print out the lenght of the array "prices". The variable "i" and line 11 are in the same scope.
2.  This will print out the discounted price of the last item because discountPrice was declared with var, which has no block scope. So
it is like a global variable.
3.  This will print the the last item's price rounded to the hundreths after the discount is applied, because the finalPrice variable was declared with var which has no block scope.
4. The function will return [50,100,150], the function returns discounted price of each element in the original array.
5. This will create an error, the variable i is declared inside the for-loop block with "let" so they are not in the same scope.  
6. This will be an error because the variable discountedPrice was created with "let" in the scope of the for-loop. 
7.  This will print the final price of the last element in the array after the discount since the variable was defined in the same scope as line 13. 
8.  This will return the array [50,100,150] because the function returns the discounted price of each element in the original array.
9.  This will create an error, because the variable i is declared inteh for-loop block with "let" so they are not in the same scope.
10. This will also create an error since discountedPrice was declared in the for-loop block, so line 12 is not in the same scope.
11. There will be an error because the function tries to change a "const" variable's value, so it will be unable to get to line 13.
12.  The function will return nothing because it has an error when it tries to change a const variable's value.
13. 
      1.   student.name;
      2.   student["Grad Year"];
      3.   student.greeting();
      4.   student["Favorite Teacher"].name;
      5.   student.courseLoad[0];
14.  
     1. "32", it sees addition sign so it will just add 2 as a string to the string '3'
     2. 1, since it is subtracting, it will try to see '3' as a number rather than a string.
     3. 3, this is because null is converted to 0.
     4. "3null", this is because it will see '3' as a string and the "+" as concatetnation. 
     5. 4, this is because true is numerically converted to 1.
     6. "3undefined", this is because it will see 3 as a string and "+" as string concatentation.
     7. NaN, this is because undefined will be numerically converted to NaN so 3 - NaN, is NaN.

15.  
     1.   True, when comparing two different value types, JS converts the values to numbers
     2.  False, since "12" has more characters than "2", it is greater.
     3.  True, this is because the operand "==" converts both sides to 2.
     4.  False, this is the strict operand "===", since they are not same type they return false.
     5.  False, when converted to number, true becomes 1 and 1 != 2.
     6.   True, this is because Boolean(2) is true, so true === true

16. The difference between == and ===, is that === will compare two objects as they are while == will convert the two objects to numeric values if they are not the same type. If two objedts are not the same type, === will immediately return false while == will turn them into numeric values first before they return true or false.
17. This will print out "How are you?" because Boolean(2) is true.

19. This will return the array [6,8,10], The function will add 2 to the each value in the array and multiply that sum by 2. 

21. This will print 1, then 4, then 3 , then 2.
