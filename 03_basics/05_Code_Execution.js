//JAVASCRIPT EXECUTION CONTEXT AND CALL STACK

// 1. Global Execution Context(GEC of browser-'window' is different from node.js GEC)
// 2. Functional Execution Context
// 3. Eval Execution Context

// This run in two Phases:-
// 1. Memory Creation Phase :- In this phase, all the variables are hoisted and memory is allocated to them.
// 2. Code Execution Phase :- In this phase, the code is executed line by line.

// Lets see a exapmle of Code Execution
// ________________________________________________________

            // let val1 = 10;
            // let val2 = 20;
            // function addNum(num1,num2){
            //     let total = num1 + num2;
            //     return total;
            // }
            // let result1 = addNum(val1,val2);
            // let result2 = addNum(30,40);
// ________________________________________________________

// In the above example, the code will run in the following sequence:-
// first, global execution context will be created.
//1. Memory Creation Phase
        // val1 = undefined
        // val2 = undefined
        // addNum = defination
        // result1 = undefined
        // result2 = undefined
//2. Code Execution Phase
        // val1 = 10
        // val2 = 20
        // addNum ----> 
                    //  a new execution context will be created for addNum
                    // 1. Memory Creation Phase
                            // num1 = undefined
                            // num2 = undefined
                            // total = undefined
                    // 2. Code Execution Phase
                            // num1 = 10
                            // num2 = 20
                            // total = 30
                    // this execution context will be deleted from the stack after the execution
        // result1 = 30
        // result2 = 70
        //this Global Execution Context will be deleted from the stack after the execution

//CALL STACK
// for the given example, the call stack will look like this:-
// 1. Global Execution Context
// 2. addNum Execution Context
// 3. Global Execution Context
// ________________________________________________________
// The call stack use a LIFO principle that is used to temporarily store and manage function invocations.