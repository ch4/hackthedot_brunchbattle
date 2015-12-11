function ArrayElementRandomizer(array) {
  var m = array.length, t, i;

   //For the length of the array 
  while (m) {
  //assign a random number mutiplied by the length of the array-1 to the variable i; 	
    i = Math.floor(Math.random() * m--);

//assign the last element of the array to t
    t = array[m];
//make the last element of the array equal to a random part of the array    
    array[m] = array[i];
//make the random element of the array equal to the last element of the array    
    array[i] = t;
  }
//return the randomized array of elements. 
  return array;
}