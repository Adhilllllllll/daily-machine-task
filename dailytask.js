// Use map() to create a new array containing only the student names.


// Use filter() to get the list of students who scored above 75.


// Use reduce() to calculate the average score.


// Write a function that takes a score as a parameter and returns a grade (A/B/C).


let task=[{name:"leo", age:18, class:10},
           {name:"theo", age:20, class: 9},
            {name:"neo", age:22, class:9},
];
 let res =task.map(function(sum){
  return sum.name;
 });
 console.log(res);
 
////////////

let marks=[{name: "adhil", mark: 76},
     {name: "abin", mark: 50},
      {name: "asif", mark: 80},
      {name: "ansil", mark: 65}
    ];
let result=marks.filter(function(highest){
    return highest.mark > 75;
});
console.log(result);


///////////////////


let students =[{name: "adhil", mark: 76},
     {name: "abin", mark: 50},
      {name: "asif", mark: 80},
      {name: "ansil", mark: 65}
    ];
 
    let avg=students.reduce( (acc,curr)=>acc + curr.mark,0 );
            
           console.log(avg / students.length);
   
    
////////////////////////////


    function grade(mark){
        if( mark >90){
            console.log("A");
            
        }
          else if( mark > 80){
            console.log("B");
            
        }
        else{
            console.log("C");
            
        }

    }grade(90);
    