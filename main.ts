/// <reference path="generic.ts" />
/// <reference path="helpers.ts" />
/// <reference path="utilities.ts" />

module MainFile {
	export function printString(str : string) {
		console.log(Utilities.shortenString(str, 50));
	}
}

(function() {
	MainFile.printString("Hello this is a printed message");
})();