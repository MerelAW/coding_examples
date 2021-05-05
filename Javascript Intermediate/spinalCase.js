function spinalCase(str) {
  return str.replace(/[-_]+/g, " ").split(/(?=[\sA-Z])/).filter(a => a !== " ").map(a => a.toLowerCase()).join("-").replace(/[\s]/g, "");
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
