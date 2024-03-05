function sameFrequency(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const char of str1) {
    frequencyCounter1[char] = (frequencyCounter1[char] || 0) + 1;
  }

  for (const char of str2) {
    frequencyCounter2[char] = (frequencyCounter2[char] || 0) + 1;
  }
  for (const val in frequencyCounter1) {
    if (!(val in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[val] !== frequencyCounter2[val]) {
      return false;
    }
  }
  return true;
}
