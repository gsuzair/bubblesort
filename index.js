function bubbleSort(array) {
    // Write your code here.
      var isSorted = false
      var temp = ''
      while(!isSorted){
          isSorted = true
          for(var i = 0; i < array.length - 1; i++){
              if(array[i] > array[i+1]){
                  temp = array[i]
                  array[i] = array[i+1]
                  array[i+1] = temp
                  isSorted = false
              }
          }
      }
      return array
  }