
# File Refacto CLI

**File Refacto** is a simple CLI tool that helps you recursively rename files in a directory based on their extension and a new filename provided by the user. This is perfect for automating the renaming of specific types of files across multiple subdirectories.

## Features

- Rename files with a specific extension.
- Traverse directories and subdirectories.
- Customize the new file name while preserving the extension.

## Requirements

- **Node.js**: Make sure you have Node.js installed. You can download it from [Node.js official site](https://nodejs.org/).
- **npm**: Installed by default with Node.js.

## Installation

Install the tool globally via npm:

```bash
npm install -g file-refacto
```

## Usage

Once installed globally, you can use the `file-refacto` command. It accepts three arguments:

1. **Directory**: The root directory where you want to start renaming files.
2. **Extension**: The file extension to target (e.g., `.md`, `.txt`, `.json`).
3. **New Filename**: The new name you want for the files (without the extension).

### Basic Command

```bash
file-refacto <directory> <extension> <newname>
```

### Example

If you want to rename all `.md` files to `README.md` in the `/my-project` directory and its subdirectories:

```bash
file-refacto /my-project .md README
```

This will find all `.md` files and rename them to `README.md` in each directory.

### Command Breakdown:

- **directory**: The starting directory for the file renaming process.
- **extension**: The file extension of the files you want to rename (e.g., `.md`, `.txt`).
- **newname**: The new name for the files (excluding the extension).

## Example Output

When the tool runs, you'll see logs like this:

```bash
Renamed /my-project/docs/file1.md to /my-project/docs/README.md
Renamed /my-project/src/file2.md to /my-project/src/README.md
```

## Contributing

Contributions are welcome! Fork the repository, make your changes, and open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.

## Issues and Support

If you encounter any issues, feel free to open an issue on the GitHub repository. We’ll address it as soon as possible.
