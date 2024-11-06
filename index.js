var lengthOfLongestSubstring = function (s) {
  let left = (maxLength = 0);
  charSet = new Set();
  for (let right = 0; right < s.length; right++) {
    while (charSet.has(s[right])) {
      charSet.delete(s[left]);
      left++;
    }
    charSet.add(s[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
};
console.log(lengthOfLongestSubstring("eeeeeeefg"));
