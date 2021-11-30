let characters;
let repeat = 0, delay = 0;

while (repeat <= 5) {
  repeat <= 4 ? characters = '|/-\\|' : characters = '|/-\\|\n';
  for (let char of characters) {
    setTimeout(() => process.stdout.write(`\r${char}`), delay);
    delay += 200;
  }
  repeat += 1;
}