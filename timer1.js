const alarms = process.argv.slice(2);
let alarmsx1000 = [];
for (let i = 0; i < alarms.length; i++) {
  alarmsx1000.push(alarms[i]*1000);
}
for (alarm of alarmsx1000) {
  setTimeout(() => {
    process.stdout.write('.');
  }, alarm);
}