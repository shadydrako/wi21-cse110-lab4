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