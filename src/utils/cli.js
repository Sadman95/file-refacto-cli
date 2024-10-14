const changeExtension = require("../lib/change-extension");
const renameAll = require("../lib/rename-all");
const renameFiles = require("../lib/rename-files");

function run() {
	const args = process.argv.slice(2); // Get CLI arguments (ignoring the first two)
	console.log("args: ", args);
	const command = args[0]; // First argument is the command (e.g., 'rename', 'change-ext', 'rename-all')
	const directory = args[1]; // Second argument is the directory path
	const extensionOrNewExt = args[2]; // Third argument is extension or new extension
	const newNameOrPattern = args[3]; // Fourth argument is new name or pattern

	switch (command) {
		case "rename":
			renameFiles(directory, extensionOrNewExt, newNameOrPattern);
			break;
		case "change-ext":
			changeExtension(directory, extensionOrNewExt);
			break;
		case "rename-all":
			renameAll(directory, extensionOrNewExt, newNameOrPattern);
			break;
		default:
			console.error("Unknown command:", command);
			process.exit(1);
	}
}

module.exports = { run };
