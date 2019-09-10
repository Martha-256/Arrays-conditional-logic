function fizzBuzz(list1,list2) {
    /*var list1 = ["cat","dog","man"],["cat","dog"];
    var list2 = ["cat","dog"];*/
    var sum = list1.length+list2.length;

if (sum%3==0 && !(sum%5==0)) {
    return "Fizz";
    } else if(sum%5==0 && !(sum%3==0)){
      return "Buzz";
    }else if (sum%3 == 0 && sum%5 == 0) {
      return "Fizzbuzz"
    } else {
      return sum;
  }
}
//console.log(fizzBuzz());

module.exports = fizzBuzz;