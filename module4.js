
const names = ['Jack', 'John', 'Mary', 'James'];

for (let i = 0; i < names.length; i++) {
  const firstLetter = names[i][0];
  if (firstLetter.toLowerCase() === 'j') {
    console.log(`Goodbye ${names[i]}`);
  } else {
    console.log(`Hello ${names[i]}`);
  }
}