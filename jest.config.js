module.exports = {
	testEnvironment: "node",
	roots: ["<rootDir>/__tests__"], // Tests located in the tests folder
	testRegex: ".*\\.test\\.js$",
	reporters: ["default"],
	moduleDirectories: ["node_modules"],
	modulePaths: ["<rootDir>"],
};
