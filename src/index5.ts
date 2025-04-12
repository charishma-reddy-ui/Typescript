interface User3{
    id: string;
    name: string; 
}
type Users = Record<string, User3>;
const users:Users = {
    "ras":{
        id: "ras",
        name: "ras",
    },
    "tara":{
        id: "tara",
        name: "tara",
    }
    
}
console.log(users);
















//  type User3 = 
//  {
//     id:string;
//     name:string;
//  }

// type Users = {
//     [key: string]:User3;
// }
// const users:Users = {
//     "ras":{
//         id: "ras",
//         name: "ras",
//     },
//     "tara":{
//         id: "tara",
//         name: "tara",
//     }
    
// }