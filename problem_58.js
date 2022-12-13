var lengthOfLastWord = function(s) {
  s = s.split(' ');
  let lastWord = s[s.length - 1];
  
  if(lastWord.length === 0) {
      let count = 2;
    while(lastWord.length === 0) {
        lastWord = s[s.length - count];
        count++;
    }   
  }

  return lastWord.length;
};