1. console.log("the sum of "+a+" and "+b+" is "+a+b);      
LOGIC FOR THIS:-
as we said earlier, if we found two operands with between one operator stops the execution; solve the operation; then move forward, same logic goes above
DRY RUN:: 
i="the sum of "+a+" and " ==> "the sum of 10 and "   //HERE concatenation, as one is string
ii = ""the sum of 10 and "+b+" is " ==> "the sum of 10 and 20 is "    //same logic string, so concatenation
iii =  "the sum of 10 and 20 is "+a = "the sum of 10 and 20 is 10"
iv = ""the sum of 10 and 20 is 10"+b = "the sum of 10 and 20 is 1020"  //OUTPUT


2. console.log("the sum of "+a+" and "+b+" is "+(a+b));     
//Here bodmas rule is applied, so first brackets are solved that's why (a+b)=>(10+20)==> 30,
then it becomes "the sum of "+a+" and "+b+" is "+30 and executed line by line from left-to-right, as show above

console.log(a+b+" is the sum of "+a+" and "+b);
//here, as said above it executes from left-to-right and if int+int happens output is int, so
output:- "30 is the sum of 10 and 20"