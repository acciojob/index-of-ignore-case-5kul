function indexOfIgnoreCase(s1, s2) {  
  const lowerS1 = s1.toLowerCase();
  const lowerS2 = s2.toLowerCase();
  
  return lowerS1.indexOf(lowerS2);
}

const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
