import fs from "fs-extra";

const args = process.argv;
// remove -
const resolved = args.filter((v) => v[0] !== "-");
if (resolved.length < 4) {
	console.log("missing path args");
} else {
	// 去除通配符
	const path1 = resolved[2].replace("*", "");
	const path2 = resolved[3].replace("*", "");
	fs.copySync(path1, path2);
}
