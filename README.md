
# File Refacto CLI

![npm](https://img.shields.io/npm/dt/file-refacto?label=total%20downloads)

**File Refacto** is a simple CLI tool that helps you rename files in a directory based on their extension and a new filename, or change the file extension recursively. This tool also allows renaming files in serial order using a wildcard pattern, making it perfect for organizing and renaming files in bulk across multiple subdirectories.

## Features

- Rename files with a specific extension.
- Change the extension of files in a directory.
- Rename files using a wildcard pattern (e.g., `brand-*` for `brand-1`, `brand-2`).
- Traverse directories and subdirectories recursively.
- Preserve the file extension while renaming.

## Requirements

- **Node.js**: Make sure you have Node.js installed. You can download it from [Node.js official site](https://nodejs.org/).
- **npm**: Installed by default with Node.js.

## Installation

Install the tool globally via npm:

```bash
npm install -g file-refacto
```

## Usage

Once installed globally, you can use the `file-refacto` command with various options to rename files or change file extensions. The CLI provides three main commands:

1. **rename**: Rename files by their extension and a new filename.
2. **change-ext**: Change the extension of files in a directory.
3. **rename-all**: Rename files in serial order using a wildcard pattern.

### Commands

#### 1. Rename Files

This command allows you to rename files with a specific extension to a new filename while preserving their extension.

```bash
file-refacto rename <directory> <extension> <newname>
```

- **directory**: The root directory to start from.
- **extension**: The file extension to target (e.g., `.md`, `.txt`, `.json`).
- **newname**: The new base name for the files (without the extension).

**Example**:

If you want to rename all `.md` files to `README.md` in the `/my-project` directory:

```bash
file-refacto rename /my-project .md README
```

This will find all `.md` files and rename them to `README.md` in each directory.

#### 2. Change File Extension

This command changes the file extension of all files in a directory recursively.

```bash
file-refacto change-ext <directory> <newext>
```

- **directory**: The root directory to start from.
- **newext**: The new extension to apply (e.g., `.txt`, `.json`).

**Example**:

Change all files in `/my-project/assets` from `.jpg` to `.png`:

```bash
file-refacto change-ext /my-project/assets .png
```

This will change all file extensions in the directory from `.jpg` to `.png`.

#### 3. Rename Files Using Wildcard Pattern

This command renames files in serial order using a wildcard pattern. The `*` in the pattern is replaced with sequential numbers.

```bash
file-refacto rename-all <directory> <extension> <pattern>
```

- **directory**: The root directory to start from.
- **extension**: The file extension to target (e.g., `.png`).
- **pattern**: The pattern for the new filenames. The `*` is replaced with a number (e.g., `brand-*` becomes `brand-1`, `brand-2`, etc.).

**Example**:

Rename all `.png` files in `/my-project/assets` to `brand-*`, starting from 1:

```bash
file-refacto rename-all /my-project/assets .png brand-*
```

This will rename files like `brand-1.png`, `brand-2.png`, and so on.

### Command Breakdown

- **directory**: The starting directory for the file renaming or extension changing process.
- **extension/newext**: The file extension to rename or change (e.g., `.md`, `.txt`).
- **newname/pattern**: The new name for the files (excluding the extension) or a pattern for serial renaming.

### Example Output

When the tool runs, you'll see logs like this:

```bash
Renamed /my-project/docs/file1.md to /my-project/docs/README.md
Renamed /my-project/src/file2.md to /my-project/src/README.md
Changed /assets/image1.jpg to /assets/image1.png
Renamed /assets/brand.png to /assets/brand-1.png
```

## Version History

- **0.0.4**:
  - Added `rename-all` command to rename files in serial order using a wildcard pattern.
  - Improved error handling and extension validation.
  - Skips files when the target extension already exists in the directory.
  - Ensures wildcard pattern `*` is replaced with serial numbers for file renaming.

## Contributing

Contributions are welcome! Fork the repository, make your changes, and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Issues and Support

If you encounter any issues, feel free to open an issue on the GitHub repository. We’ll address it as soon as possible.
