// // spawn: This method is used to spawn a new process using the given command as the executable.In the example, spawn('ls', ['-l']) is used to execute the ls - l command, which lists the files and directories in the current directory with detailed information.The stdout, stderr, and close events are attached to the child process to handle the output and exit code.

// //   exec: This method is used to spawn a shell and execute the given command in that shell.In the example, exec('ls -l', callback) is used to execute the ls - l command, and the stdout, stderr, and error are passed to the callback function to handle the output and errors.

// //     execFile: This method is used to spawn a new process using the given file as the executable.In the example, execFile('ls', ['-l'], callback) is used to execute the ls - l command, and the stdout, stderr, and error are passed to the callback function to handle the output and errors.

// //       fork: This method is used to spawn a new Node.js process to run the given module as a separate child process.In the example, fork('./child.js') is used to spawn the child.js module as a separate child process.The message and exit events are attached to the child process to handle communication between the parent and child processes, and the exit code when the child process exits.

// //         execSync: This method is used to synchronously spawn a shell and execute the given command in that shell, blocking the event loop until the command completes.In the example, execSync('ls -l') is used to execute the ls - l command, and the output is stored in the stdout variable.

// //           execFileSync: This method is used to synchronously spawn a new process using the given file as the executable, blocking the event loop until the process completes.In the example, execFileSync('ls', ['-l']) is used to execute the ls - l command, and the output is stored in the stdoutFileSync variable.

// //             spawnSync: This method is used to synchronously spawn a new process using the given command as the executable, blocking the event loop until the process completes.In the example, spawnSync('ls', ['-l']) is used to execute the ls - l command, and the output, error, and exit status are stored in the childSpawnSync object.

// //               kill: This method is used to send a signal to a child process with the given process ID(PID).In the example, kill(childProcess.pid, 'SIGTERM') is used to send the SIGTERM signal to terminate the child process.

// //                 execSyncFile: This method is used to synchronously spawn a new process using the given file as the executable, blocking the event loop until the process completes.In the example, execSyncFile('ls', ['-l']) is used to execute the ls - l command, and the output is stored in the stdoutFileSync2 variable.

const { spawn, exec, execFile, fork, execSync, execFileSync, spawnSync, kill } = require('child_process');

// // spawn - Spawns a new process using the given command
// const childSpawn = spawn('ls', ['-l']); // spawns 'ls -l' command as a child process
// childSpawn.stdout.on('data', (data) => {
//   console.log(`Spawn stdout: ${data}`);
// });
// childSpawn.stderr.on('data', (data) => {
//   console.error(`Spawn stderr: ${data}`);
// });
// childSpawn.on('close', (code) => {
//   console.log(`Spawn child process exited with code ${code}`);
// });

// // exec - Spawns a shell and executes the given command
// exec('ls -l', (error, stdout, stderr) => {
//   if (error) {
//     console.error(`Exec error: ${error.message}`);
//     return;
//   }
//   console.log(`Exec stdout: ${stdout}`);
//   console.error(`Exec stderr: ${stderr}`);
// });

// // execFile - Spawns a new process using the given file as the executable
// execFile('ls', ['-l'], (error, stdout, stderr) => {
//   if (error) {
//     console.error(`ExecFile error: ${error.message}`);
//     return;
//   }
//   console.log(`ExecFile stdout: ${stdout}`);
//   console.error(`ExecFile stderr: ${stderr}`);
// });

// // fork - Spawns a new Node.js process to run the given module
// const childFork = fork('./child.js'); // spawns child.js module as a separate child process
// childFork.on('message', (message) => {
//   console.log(`Fork message: ${message}`);
// });
// childFork.on('exit', (code) => {
//   console.log(`Fork child process exited with code ${code}`);
// });

// // execSync - Synchronously spawns a shell and executes the given command
// const stdout = execSync('ls -l');
// console.log(`ExecSync stdout: ${stdout}`);

// // execFileSync - Synchronously spawns a new process using the given file as the executable
// const stdoutFileSync = execFileSync('ls', ['-l']);
// console.log(`ExecFileSync stdout: ${stdoutFileSync}`);

// // spawnSync - Synchronously spawns a new process using the given command
// const childSpawnSync = spawnSync('ls', ['-l']);
// console.log(`SpawnSync stdout: ${childSpawnSync.stdout}`);
// console.error(`SpawnSync stderr: ${childSpawnSync.stderr}`);
// console.log(`SpawnSync child process exited with code ${childSpawnSync.status}`);

// // spawnSync - Synchronously spawns a new process using the given file as the executable
// const childFileSpawnSync = spawnSync('ls', ['-l']);
// console.log(`FileSpawnSync stdout: ${childFileSpawnSync.stdout}`);
// console.error(`FileSpawnSync stderr: ${childFileSpawnSync.stderr}`);
// console.log(`FileSpawnSync child process exited with code ${childFileSpawnSync.status}`);

// // kill - Sends a signal to a child process
// const childProcess = spawn('sleep', ['10']);
// setTimeout(() => {
//   kill(childProcess.pid, 'SIGTERM'); // sends SIGTERM signal to terminate the child process
// }, 3000);

// // execSyncFile - Synchronously spawns a new process using the given file as the executable
// const stdoutFileSync2 = execSyncFile('ls', ['-l']);
// console.log(`ExecSyncFile stdout: ${stdoutFileSync2}`);
