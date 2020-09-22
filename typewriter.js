const sentence = "hello there from lighthouse labs\n";
let count = 0;
for (let char of sentence) {
  count += 100;
  setTimeout(() => {
    process.stdout.write(char);
  }, count);  
};
