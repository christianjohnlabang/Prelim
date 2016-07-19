const readline =require('readline');

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter grade?' ,(ingrade)=>{
 
   var g =parseInt(grade);
   var grade =util.computeGrade(ingrade);
    
   
   rl.close();
});


    



