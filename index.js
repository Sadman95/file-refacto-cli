#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { Command } = require("commander");

const program = new Command();

// Function to recursively walk through directories and rename files
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

				if (stats.isDirectory()) {
					// If it's a directory, recurse into it
					renameFiles(filePath, extension, newName);
				} else if (path.extname(file) === extension) {
					// If it matches the given extension, rename it to the new name
					const newFilePath = path.join(dir, newName + extension);
					fs.rename(filePath, newFilePath, (err) => {
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

// Setup the CLI command
program
	.version("1.1.0")
	.description(
		"CLI tool to rename files in a directory by file extension and new filename"
	)
	.argument("<dir>", "root directory to start from")
	.argument("<extension>", "file extension to rename (e.g., .md)")
	.argument(
		"<newname>",
		"new name for the files without extension (e.g., main)"
	)
	.action((dir, extension, newName) => {
		// Check if extension starts with a dot
		if (!extension.startsWith(".")) {
			extension = "." + extension;
		}
		renameFiles(dir, extension, newName);
	});

// Parse CLI arguments
program.parse(process.argv);
