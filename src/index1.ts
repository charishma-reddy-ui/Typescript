interface User{
    id: string;
    name: string;
    age: number;
    email: string;
    password: string;
}
type UpdateProps = Pick<User,'name' &'age'& 'email'>
function updateUser(updatedProps:UpdateProps){
    console.log(updatedProps);

}
updateUser({
    name: 'Taro',
    age: 20,
    
}) 
//when place union(|) in the place of intersection (&) it will give error
