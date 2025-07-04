function bridgeonSwitch(arr){
    let current = true;
    let array =[];
    for (let item of arr){
        if( item =="bridgeon"){
             current=false;
        }
        array.push(current)
    }
    return array;
}
 
 
console.log(bridgeonSwitch(["bridge","bridgeon","on"]));
console.log(bridgeonSwitch(["bridgeon",10101,3.14,53,"bridgeon"]));
console.log(bridgeonSwitch(["false",'false',"bridgeon","true"]));
