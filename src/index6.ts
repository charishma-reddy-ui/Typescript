interface User3{
    id:string;
    name:string;
}
const usersMap = new Map<string,User3>();
usersMap.set('rass',{
    id: 'rass',
    name: 'rass'});
    console.log(usersMap.get('rass'));
