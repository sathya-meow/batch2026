function checkEven(sum) {
    let count = 0;
    for (let d = 0; d < sum.length; d++) {
        if (sum[d]%2==0) {
            count++;
            
        }
        
    }
    return count;
}
console.log(checkEven([10, 15, 20, 25, 30, 35, 40]));
