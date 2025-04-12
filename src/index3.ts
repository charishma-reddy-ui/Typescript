interface User2{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}
type UpdateProps2 = {
    name?:string;
    age?:number;
    email?:string;
}
function updateUser1(updatedProps:UpdateProps2){
    console.log(updatedProps);
}
updateUser1({
    name: 'Taro',
    age: 20,
})
//this is the output of the above code
// { name: 'Taro', age: 20 }