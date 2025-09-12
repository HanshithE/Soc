let score;
function CheckGrade(score){
    if (score>=75 && score <90){
    console.log("Grade A");
}
if (score>=50 && score<75){
    console.log("Grade B");
}
if (score>=35 && score<50 ){
    console.log("Grade C");
}
else{
    console.log("fail");
}
}

CheckGrade(75);