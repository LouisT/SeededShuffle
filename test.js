'use strict';
var shuffle = require('./');
var expect = require('chai').expect;

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
    'bola',
    3,
];
for (var num in arrays) {
    console.log("\n--- Array "+arrays[num]+" ---");
    for (var key in keys) {
        var shuff = ss.shuffle(arrays[num],keys[key],true),
            ushuff = ss.unshuffle(shuff,keys[key],true);
        console.log("   --- Key "+keys[key]+" ---");
        console.log("Shuffled: "+(shuff && shuff.length ? shuff:"returned was empty!"));
        console.log("Unshuffled: "+(ushuff && ushuff.length ? ushuff:"returned was empty!"));
        console.log();
    };
};

describe('shuffle-seed', function() {
	it('should test', function(done) {
		console.log(shuffle([1,2,3,4,5],'ball'));


		console.log()
		done();
	});
});
