function getTotal(num) {
    let total = 0;
    for (let c = 0; c < num.length; c++) {
        total = total + num[c];
       
        
    }
    return total;

}
console.log(getTotal([10, 20, 30, 40, 50]));
