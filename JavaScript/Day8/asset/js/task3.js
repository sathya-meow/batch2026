function checkVote(age) {
    if (age>=18) {
        return "Eligible to vote";
        
    } else {
        return "Not Eligible for voting";
    }
}
console.log(checkVote(20));
