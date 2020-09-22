const sentence = "hello there from lighthouse labs";
let sentence2 = '';
for (const char of sentence) { 
  setTimeout(() => {
    process.stdout.write(char);
  }, 50);
};


