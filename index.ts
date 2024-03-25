#! usr/bin/env node

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {message :"Enter your weight in kg", type:"number" , name:"weightKg" },
    {message :"Enter your height in meters", type:"number" , name :"heightMeters"},
]);
if(answer.weightKg==="weightkg", "heightMeters"){
    console.log(answer.weightKg/(answer.heightMeters * answer.heightMeters));
    
}else{
    console.log("Please enter valid values");
    
}