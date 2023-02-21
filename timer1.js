const timer = process.argv.slice(2);

for (let i of timer) {
  i = Number(i);
  if (Number.isInteger(i) && i > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, i * 1000);
  }
}
