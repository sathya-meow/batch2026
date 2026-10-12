var arr = [1,2,3,4,5,6,7]
console.log(arr);
for(var a = 0; a<arr.length; a++) 
{
    console.log(a);
    
}
for(var b = arr.length-1; b>=0; b--)
{
    console.log(b);
}
arr[2] = 9
arr[3] = 8
arr[4] = 0
console.log(arr);
