var Utilities;
(function (Utilities) {
    function shortenString(str, length) { return str.substring(0, length); }
    Utilities.shortenString = shortenString;
})(Utilities || (Utilities = {}));
/// <reference path="generic.ts" />
/// <reference path="helpers.ts" />
/// <reference path="utilities.ts" />
var MainFile;
(function (MainFile) {
    function printString(str) {
        console.log(Utilities.shortenString(str, 50));
    }
    MainFile.printString = printString;
})(MainFile || (MainFile = {}));
(function () {
    MainFile.printString("Hello this is a printed message");
})();
