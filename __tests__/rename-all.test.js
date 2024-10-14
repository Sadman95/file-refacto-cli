const fs = require("fs");
const mockFs = require("mock-fs");
const renameAll = require("../src/lib/rename-all"); // Your actual function

describe("rename-all command", () => {
	test("should rename files using wildcard pattern test-*", () => {
		const promise = new Promise(() =>
			renameAll("_mock/my-project", ".txt", "test-*")
		);

		promise.then(() => {
			const file1Exists = mockFs.bypass(() =>
				fs.existsSync("_mock/my-project/test-1.txt")
			);
			const file2Exists = mockFs.bypass(() =>
				fs.existsSync("_mock/my-project/test-2.txt")
			);

			// Expect renamed files to exist
			expect(file1Exists).toBe(true);
			expect(file2Exists).toBe(true);
		});

		// Check that the old files do not exist anymore
		const oldFile1Exists = mockFs.bypass(() =>
			fs.existsSync("_mock/my-project/file1.txt")
		);
		const oldFile2Exists = mockFs.bypass(() =>
			fs.existsSync("_mock/my-project/file2.txt")
		);

		expect(oldFile1Exists).toBe(false);
		expect(oldFile2Exists).toBe(false);
	});


});
