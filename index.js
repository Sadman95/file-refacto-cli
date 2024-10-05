#!/usr/bin/env node
const { Command } = require("commander");
const renameFiles = require("./lib/rename-files");
const changeExtension = require("./lib/change-extension");
const renameSerialized = require("./lib/rename-serialized");

const program = new Command();

/**
 * CLI tool to rename files by extension, change file extensions, and rename files with a pattern.
 *
 * @version 0.0.4
 * @description This CLI tool allows users to rename files in a directory by their
 * file extension and base name, change the extension of files in the directory,
 * or rename files in serial order with a wildcard pattern.
 */

/**
 * Sets up the 'rename' command to rename files in a directory by file extension and new base name.
 *
 * @command rename
 * @argument {string} <dir> - The root directory to start from.
 * @argument {string} <extension> - The file extension to rename (e.g., .md).
 * @argument {string} <newname> - The new base name for the files without extension (e.g., main).
 */
program
	.command("rename")
	.description("Rename files in a directory by file extension and new filename")
	.argument("<dir>", "Root directory to start from")
	.argument("<extension>", "File extension to rename (e.g., .md)")
	.argument(
		"<newname>",
		"New name for the files without extension (e.g., main)"
	)
	.action((dir, extension, newName) => {
		// Ensure the extension starts with a dot
		if (!extension.startsWith(".")) {
			extension = "." + extension;
		}

		renameFiles(dir, extension, newName);
	});

/**
 * Sets up the 'change-ext' command to change the extension of files in a directory.
 *
 * @command change-ext
 * @argument {string} <dir> - The root directory to start from.
 * @argument {string} <newext> - The new extension to apply to the files (e.g., .txt).
 */
program
	.command("change-ext")
	.description("Change the extension of files in a directory")
	.argument("<dir>", "Root directory to start from")
	.argument("<newext>", "New extension to apply (e.g., .txt)")
	.action((dir, newExt) => {
		// Ensure the new extension starts with a dot
		if (!newExt.startsWith(".")) {
			newExt = "." + newExt;
		}

		changeExtension(dir, newExt);
	});

/**
 * Sets up the 'rename-all' command to rename files in serial order using a wildcard pattern.
 *
 * @command rename-all
 * @argument {string} <dir> - The root directory to start from.
 * @argument {string} <extension> - The file extension to rename (e.g., .md).
 * @argument {string} <pattern> - The pattern for the new filenames (e.g., brand-*).
 */
program
	.command("rename-all")
	.description(
		"Rename files in serial order using a wildcard pattern (e.g., brand-*)"
	)
	.argument("<dir>", "Root directory to start from")
	.argument("<extension>", "File extension to rename (e.g., .md)")
	.argument("<pattern>", "Pattern for the new filenames (e.g., brand-*)")
	.action((dir, extension, pattern) => {
		// Ensure the extension starts with a dot
		if (!extension.startsWith(".")) {
			extension = "." + extension;
		}

		renameSerialized(dir, extension, pattern);
	});

// Parse and execute the appropriate command based on user input
program.parse(process.argv);
