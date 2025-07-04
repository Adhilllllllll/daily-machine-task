const  fullName ={
    firstName : "leo",
    lastName : " messi",
    age : 38,
    getFullName:function(){
         return(this.firstName + this.lastName);
        
    },

    celebrateBirthday:function(){
        return (this.age +1);

    }

}; console.log(fullName.getFullName());
console.log(fullName.celebrateBirthday());

  /////////////////question 2


  let  main ={
    name : "leo",
    work : " footballer",
    age : 38,
    greet:function (msg){
   
   console.log( this.name + " " + msg);
   
   
        
    }
  }
    main.greet
 

const  withoutgreet = {
   name : "crstiano",
    work : " foottballer",
    age : 39,
    
};

main.greet.call(withoutgreet,"hello")
main.greet.apply(withoutgreet,["hiiiiii"])
 let func=main.greet.bind(withoutgreet,"great")
 func()
  
 

 
 
 





 

//////question 3



let hundred=Math.floor(Math.random()* 100);//1
let array =[23, 45, 67, 12, 89, 3];//2
let res= Math.max(...array);//3
let ress=Math.min(...array);//3
 
let sqr=Math.sqrt(5)//4


console.log(hundred);

console.log(res);
console.log(ress);
console.log(sqr);



//// question 4
function sum(){
    console.log("hello!");
 
}

let assign=sum();


function  value (assign) {
return assign;
}

 value()
 
    
 
