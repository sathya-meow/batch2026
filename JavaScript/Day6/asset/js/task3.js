let total = 0;
let result = "";
for (let c=1; c<=20; c++) {
    total = total + c;
    result = result + c;
    if (c<20) {
        result = result +"+";
    }

}
console.log(result);
console.log("Total = " +total);

