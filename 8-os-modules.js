const { time } = require("console");
const os = require("os");
const Info = os.userInfo();
const pcUp = Math.round(os.uptime() / 3600);
console.log(`This pc is running from last ${pcUp} hours`);
console.log("User Information", Info);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};

console.log(currentOS)