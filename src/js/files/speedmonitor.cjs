const { exec } = require("child_process");
const fs = require("fs");

function runSpeedTest() {
  exec("speedtest", (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }

    const now = new Date();
    const timestamp = now.toLocaleString();
    const result = `${timestamp}\n${stdout}\n`;
    
    fs.appendFile("speedtest.log", result, (err) => {
      if (err) throw err;
      console.log(`Speed test results saved to speedtest.log at ${timestamp}`);
    });
  });
}

runSpeedTest();
setInterval(runSpeedTest, 60 * 60 * 500); // Run every hour
