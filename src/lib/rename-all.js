const fs = require("fs");
const path = require("path");

/**
 * Renames files in a directory using a wildcard pattern and serializes the filenames.
 *
 * @Sadman95
 * @readonly
 * @param {string} dir - The directory containing the files to rename.
 * @param {string} extension - The file extension to filter and rename (e.g., .png).
 * @param {string} pattern - The wildcard pattern for the new filename (e.g., brand-*).
 */
const renameAll = (dir, extension, pattern) => {
	fs.readdir(dir, (err, files) => {
		if (err) {
			console.error(`Error reading directory ${dir}:`, err);
			return;
		}

		// Filter the files that have the specified extension
		const filteredFiles = files.filter(
			(file) => path.extname(file) === extension
		);

		filteredFiles.forEach((file, index) => {
			const filePath = path.join(dir, file);

			// Replace the wildcard (*) with the current index+1 for serialization
			const baseName = pattern.replace("*", index + 1);
			const newFileName = `${baseName}${extension}`;
			const newFilePath = path.join(dir, newFileName);

			fs.rename(filePath, newFilePath, (err) => {
				if (err) {
					console.error(`Error renaming ${filePath}:`, err);
				} else {
					console.log(`Renamed ${filePath} to ${newFilePath}`);
				}
			});
		});
	});
};

module.exports = renameAll;
