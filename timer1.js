const alarms = process.argv.slice(2);
let alarmsx1000 = [];
if (alarms.length === 0) {
  return;
} else {
  for (let i = 0; i < alarms.length; i++) {
    alarmsx1000.push(alarms[i] * 1000);
  }
  for (alarm of alarmsx1000) {
    if (alarm < 1) {
      continue;
    } else if (isNaN(alarm)) {
      continue;
    } else {
      setTimeout(() => {
        process.stdout.write('.\n');
      }, alarm);
    }
  }
}