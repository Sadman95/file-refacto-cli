const mockFs = require("mock-fs");

// Before all tests, set up the mock file system
beforeAll(() => {
	mockFs({
		_mock: {
			"my-project": {
				"brand1.md": "text content",
				"brand2.md": "text content",
				"brand3.md": "text content",
				"file1.txt": "text content", // These should be renamed during the test
				"file2.txt": "text content",
			},
		},
	});
});

// After all tests, restore the real file system
afterAll(() => {
	mockFs.restore();
});
