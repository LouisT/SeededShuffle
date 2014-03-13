SeededShuffle (v0.1.1)
======

Install: npm install seededshuffle

This project is [Unlicensed](http://unlicense.org/ "Title").
In other words, I don't care what you do with it.
However, if you make something interesting, I would like to check it out.

Information:
------
Shuffle and unshuffle an array by seed/key.

Usage:
------
    var SeededShuffle = require('seededshuffle');

    var array = SeededShuffle.shuffle(<array>,<seed>[,copy]); // Returns an array or null.
    var array = SeededShuffle.unshuffle(<array>,<seed>[,copy]); // Returns an array or null.

        Array  - The array to shuffle.
        Seed   - The key to shuffle your array.
        Copy*  - Make a copy of the array instead of overwriting it. 
           * Optional.

    SeededShuffle.seed    - The seed number used to shuffle your key.
                            If you use a string as a seed it is converted to a number.
    SeededShuffle.strSeed - The string used for the seed (if any).

Examples:
```javascript
var ss = require('seededshuffle');
var arrays = [
    [1,2,3,4,5,6,7,8,9,10],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 
];
var keys = [
    "Example key 1.",
    Date.now(),
    Math.PI,
    "Example key 4.",
    false,
];
for (var num in arrays) {
    console.log("\n--- Array "+arrays[num]+" ---");
    for (var key in keys) {
        var shuff = ss.shuffle(arrays[num],keys[key],true),
            ushuff = ss.unshuffle(shuff,keys[key],true);
        console.log("   --- Key "+keys[key]+" ---");
        console.log("Shuffled: "+(shuff?shuff:"returned was empty!"));
        console.log("Unshuffled: "+(ushuff?ushuff:"returned was empty!"));
        console.log();
    };
};
```
```html
<html>
<head>
<title>SeededShuffle test</title>
<script src="./sshuffle.js"></script>
<script>
window.onload = function () {
var arrays = [
    [1,2,3,4,5,6,7,8,9,10],
    ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], 
];
var keys = [
    "Example key 1.",
    Date.now(),
    Math.PI,
    "Example key 4.",
    false,
];
for (var num in arrays) {
    output("<br />--- Array: "+arrays[num]+" ---<br />");
    for (var key in keys) {
        var shuff = SeededShuffle.shuffle(arrays[num],keys[key],true),
            ushuff = SeededShuffle.unshuffle(shuff,keys[key],true);
        output("   --- Key: "+keys[key]+" ---<br />");
        output("Shuffled: "+(shuff?shuff:"returned was empty!")+"<br />");
        output("Unshuffled: "+(ushuff?ushuff:"returned was empty!")+"<br />");
        output("<br />");
    };
};
};
function output (txt) {
    document.getElementById("seeded").innerHTML += txt;
};
</script>
</head>
<body>
<div id="seeded"></div>
</body>
</html>
```
