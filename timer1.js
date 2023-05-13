const alarms = process.argv.slice(2);
alarms
  .filter(alarm => !isNaN(alarm) && alarm >= 1)
  .forEach(alarm => {
    setTimeout(() => {
      process.stdout.write('.\n');
    }, alarm * 1000);
  });