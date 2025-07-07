//create a function that always return true for every item in a given array.however ,
//  if an element is the word "bridgeon",switch to always returning the opposite boolean value

// bridgeonSwitch(["bridge","bridgeon","on"])); ->[ true, false, false ]
// bridgeonSwitch(["bridgeon",10101,3.14,53,"bridgeon"])); ->[ false, false, false, false, true ]
// bridgeonSwitch(["false",'false',"bridgeon","true"])); ->[ true, true, false, false ]



//// for of and push

function bridgeonSwitch(arr){
    let current = true;
    let array =[];
    for (let item of arr){
        if( item =="bridgeon"){
             current=!current;
        }
        array.push(current)
    }
    return array;
}
 
 
console.log(bridgeonSwitch(["bridge","bridgeon","on"]));
console.log(bridgeonSwitch(["bridgeon",10101,3.14,53,"bridgeon"]));
console.log(bridgeonSwitch(["false",'false',"bridgeon","true"]));

/////////// using map 

function bridgeonSwitch(arr) {
    let returnValue = true;
    return arr.map(item => {
        if (item === "bridgeon") {
            returnValue = !returnValue;
            return returnValue;
        }
        return returnValue;
    });
}
console.log(bridgeonSwitch(["bridge","bridgeon","on"]));
console.log(bridgeonSwitch(["bridgeon",10101,3.14,53,"bridgeon"]));
console.log(bridgeonSwitch(["false",'false',"bridgeon","true"]));