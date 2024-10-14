const fs = require("fs");
const { run } = require("../src/utils/cli");

describe("CLI tests", () => {
	test("should call rename command correctly", () => {
		process.argv = [
			"node",
			"file-refacto",
			"rename",
			"_mock/my-project",
			".md",
			"README",
		];
		new Promise(() => run()).then(() => {
			expect(fs.existsSync("_mock/my-project/README.md")).toBe(true);
			expect(fs.existsSync("_mock/my-project/file1.md")).toBe(false);
		});
	});
});
