const fs = require("fs");
const path = require("path");

/**
 * Recursively renames all files in a directory that match the given extension.
 * Files will be renamed to the specified new name while maintaining their original extension.
 *
 * @Sadman95
 * @readonly
 * @param {string} dir - The root directory to begin searching for files.
 * @param {string} extension - The file extension to match (e.g., '.md').
 * @param {string} newName - The new base name to give to matching files.
 */
const renameFiles = (dir, extension, newName) => {
	fs.readdir(dir, (err, files) => {
		if (err) {
			console.error(`Error reading directory ${dir}:`, err);
			return;
		}

		files.forEach((file) => {
			const filePath = path.join(dir, file);

			fs.stat(filePath, (err, stats) => {
				if (err) {
					console.error(`Error stating file ${filePath}:`, err);
					return;
				}

				// If the current file is a directory, recurse into it
				if (stats.isDirectory()) {
					renameFiles(filePath, extension, newName);
				}
				// If the file matches the specified extension, rename it
				else if (path.extname(file) === extension) {
					const newFilePath = path.join(dir, `${newName}${extension}`);

					fs.rename(filePath, newFilePath, function(err) {
						if (err) {
							console.error(`Error renaming file ${filePath}:`, err);
						} else {
							console.log(`Renamed ${filePath} to ${newFilePath}`);
						}
					});
				}
			});
		});
	});
};

module.exports = renameFiles