let string = " "
let a = 0
let b = 1
console.log(a);
console.log(b);
for (let f = 1; f<=10; f++)
{
    c = a+b
    console.log(c);
    a=b
    b=c
    string += c+ " + "
}
console.log(string);