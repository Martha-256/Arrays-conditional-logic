function fizzbuzz(){

    var array1 = ["cat","dog","man"];
    var array2 = ["cat","dog"];

    var x = array1.length;
    var y = array2.length;

    var result = x+y;
    var result1 = result%3;
    var result2 = result%5;
   

if (result1==0 && !(result2==0)) {
    document.write("Fizz");
    } else if(result2==0 && !(result1==0)){
    document.write("Buzz")
    }else if (result1 == 0 && result2 == 0) {
    document.write("fizzBuzz");
    } else {
    document.write(result);
  }


}
