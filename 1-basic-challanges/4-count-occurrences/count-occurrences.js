function countOccurrences(str, char) {
  let arr = str.split('');
  let count = 0;
  
  arr.forEach(i => {
    if(i === char) {
      count++;
    }
  })

  return count;
}

module.exports = countOccurrences;
