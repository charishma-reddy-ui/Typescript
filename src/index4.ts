type User3 ={
    readonly name: string;
    readonly age: number;
}
const user: User3 = {
    name: 'John',
    age: 30
}
user.name = 'Doe';  // Error: Cannot assign to 'name' because it is a read-only property.
