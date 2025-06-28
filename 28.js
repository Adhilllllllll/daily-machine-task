const  fullName ={
    firstName : "Adhil",
    lastName : " P",
    age : 21,
    getFullName:function(){
         return(this.firstName + this.lastName);
        
    },

    happyBirthday:function(){
        return (this.age +1);

    }

}; console.log(fullName.getFullName());
console.log(fullName.happyBirthday());

  

  