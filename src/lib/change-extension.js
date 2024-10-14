const fs = require("fs");
const path = require("path");

/**
 * Change file extensions in the provided directory to a new extension.
 * If the file already has the new extension, it will be skipped.
 *
 * @Sadman95
 * @readonly
 * @param {string} dir - The directory to search for files.
 * @param {string} newExt - The new extension to replace with (e.g., '.txt').
 */
const changeExtension = (dir, newExt) => {
	fs.readdir(dir, (err, files) => {
		if (err) return console.error(`Error reading directory ${dir}:`, err);

		files.forEach((file) => {
			const filePath = path.join(dir, file);
			const fileExt = path.extname(file);
			console.log(fileExt, newExt)

			// Skip if the file already has the new extension
			if (fileExt === newExt) {
				console.log(
					`Skipping ${file}, as it already has the extension ${newExt}`
				);
				return;
			}

			// Create the new file name with the new extension
			const newFileName = file.replace(new RegExp(`${fileExt}$`), newExt);
			const newFilePath = path.join(dir, newFileName);

			// Rename the file with the new extension
			fs.rename(filePath, newFilePath, (err) => {
				if (err) return console.error(`Error renaming ${filePath}:`, err);
				console.log(`Renamed ${filePath} to ${newFilePath}`);
			});
		});
	});
};

module.exports = changeExtension