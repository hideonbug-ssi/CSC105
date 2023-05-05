const bcrypt = require("bcrypt");

// Hash 12345678
const example = async () => {
	const salt1 = await bcrypt.genSalt(10);
	console.log("Salt #1: ", salt1);
	const hash1 = await bcrypt.hash("12345678", salt1);
	console.log("Hash #1: ", hash1);

	const salt2 = await bcrypt.genSalt(10);
	console.log("Salt #2: ", salt2);
	const hash2 = await bcrypt.hash("asdf12123", salt1);
	console.log("Hash #2: ", hash2);

	const valid1 = await bcrypt.compare(
		"12345679",
		"$2b$10$fwkjdMXyeLb7DGaU2UKwTecPJfC7i3ktBP5pFwC3ov71dMSsehus2"
	);
	console.log("Validation #1: ", valid1);

	const valid2 = await bcrypt.compare(
		"12345679",
		"$2b$10$fwkjdMXyeLb7DGaU2UKwTecPJfC7i3ktBP5pFwC3ov71dMSsehus3" // Modify last charactor a little bit
	);
	console.log("Validation #2: ", valid2);

	const valid3 = await bcrypt.compare(
		"asdf12123",
		hash2 // Previously hgenerated hash
	);
	console.log("Validation #3: ", valid3);
};

example();