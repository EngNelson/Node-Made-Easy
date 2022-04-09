// const person: {
// name: string;
// age: number;
// //}={
var person = {
    name: "Maximilian",
    age: 30,
    hobbies: ["Sport", "Cooking"]
};

let favoriteActivities: string[];
favoriteActivities = ["Sports"];
console.log(person.name);


for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
    // console.log(hobby.map());

}
    

