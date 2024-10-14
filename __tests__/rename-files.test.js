const fs = require("fs");
const renameFiles = require("../src/lib/rename-files");

describe("rename command", () => {
	test("should rename all .md files to README.md", () => {
		
		const promise = new Promise(() =>
			renameFiles("_mock/my-project", ".md", "README")
		);

		promise.then(() => {
			expect(fs.existsSync("_mock/my-project/README.md")).toBe(true);
			expect(fs.existsSync("_mock/my-project/file1.md")).toBe(false);
		})
	});

});
