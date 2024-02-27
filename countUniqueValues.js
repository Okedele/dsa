function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    let left = 0;
    let right = left + 1;
    
    if (!arr.length) {
        return 0
    }
    
    while (right < arr.length) {
        if (arr[left] == arr[right]) {
            right++;
        } else {
            left++;
            arr[left] = arr[right];
        }
    }
    return left + 1;
  }