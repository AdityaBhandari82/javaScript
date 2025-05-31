let str1=23
let str2=55
let str3=(str1+str2)
console.log(str3);

let num=("2"+5+6)
console.log(num)

let num2=(3+4+"5")
console.log(num2);

console.log(+true );//it gives 1
console.log(+"")//it gives 0


console.log(2>1)//true
console.log(2>=1)//true
console.log(2<1)//false
console.log(2==1)//false
console.log(2!=1)//true
console.log("2">1)  //js convert string in a number
console.log(null>0);//because null is empty datatype
console.log(null==0)//""
console.log(null>=0);//beacuse of value conversion it is true

console.log("2"==2)//true because it convert value and compare it
console.log("2"===2);//false in this case it is strict check




// the DataTypes in javaScript
//there are two types of datatype primitive and non primitive
//primitive are 1 string 2 boolean 3 number 4null 5 undifine 6 symbol 7 bigint
//non primitive are 1 arrray 2 object 3 function

const score=100
console.log(typeof score);
const ame="aditya"
console.log(typeof ame);
const correct=false
console.log(typeof correct);
let level;
console.log(typeof level);
let age =null
console.log(typeof age);
let id=Symbol(123)
let anotherId=Symbol(123)
console.log(id===anotherId);//because id have unique value
const bigNumber=124356644635236365645656n
console.log(typeof bigNumber);


const hero=["ironman" , "batman", "catman"]
console.log(typeof hero)

const movie={
    name:"sholye",
    date: 30 
}
console.log(typeof movie)
const aditya= function(){
    console.log("hello world");
    
}
console.log(typeof aditya);




