const addTwoNumbers = (l1, l2) => {
  const l1R = Number(l1.reverse().join(''))
  const l2R = Number(l2.reverse().join(''))
  const total = (l1R + l2R).toString().split('')//.reverse()
  
  return total.reverse().map(item => Number(item));
};

console.log(addTwoNumbers([1, 2, 3, 4], [1, 2, 3, 4]))