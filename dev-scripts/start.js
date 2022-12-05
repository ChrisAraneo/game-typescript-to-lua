const { exec } = require('child_process');
const path = require('path');

const LOVE_EXECUTABLE_PATH = path.normalize("C:/LOVE/love.exe");
const GAME_EXECUTABLE_PATH = path.normalize(__dirname + "/../dist");

exec(`"${LOVE_EXECUTABLE_PATH}" "${GAME_EXECUTABLE_PATH}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`error: ${error.message}`);
    return;
  }

  if (stderr) {
    console.error(`stderr: ${stderr}`);
    return;
  }

  console.log(`stdout:\n${stdout}`);
});