function areThereDuplicates() {
  // good luck. (supply any arguments you deem necessary.)
  const frequencyCounter = {};

  for (const arg in arguments) {
    frequencyCounter[arguments[arg]] =
      (frequencyCounter[arguments[arg]] || 0) + 1;
  }

  for (const val in frequencyCounter) {
    if (frequencyCounter[val] > 1) {
      return true;
    }
  }
  return false;
}
