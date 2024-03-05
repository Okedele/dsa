function averagePair(arr, avg) {
  // add whatever parameters you deem necessary - good luck!
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    const calc = arr[start] + arr[end] / 2;
    if (calc == avg) {
      return true;
    } else if (calc < avg) {
      start++;
    } else {
      end--;
    }
  }
  return false;
}
