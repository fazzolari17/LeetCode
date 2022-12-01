function plusOne(digits) {
  let num = digits.join('');
  let numbered;
  
  if(num.length > 16)  {
     numbered = BigInt(num) + BigInt(1);
    console.log('BIG', numbered);
  } else {
    numbered = Number(num) + 1;
  }

  
  let newNum = numbered.toString().split('');
  
  const returnValue = newNum.map(string => Number(string));
  
  return returnValue;
};