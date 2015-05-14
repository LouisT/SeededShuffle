'use strict';
var expect = require('chai').expect;
var ss = require('./');

describe('seededshuffle', function() {
  var array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  it('should shuffle and return a new array same size with a string seed', function(done) {
    var shuff = ss.shuffle(array,"Example seed",true);
    expect(shuff).to.deep.not.equal(array);
    expect(shuff).to.have.length(array.length);
    done();
  });

  it('should shuffle and unshuffle returning same array with string seed', function(done) {
    var seed = "Hello world";
    var shuff = ss.shuffle(array,seed,true);
    var ushuff = ss.unshuffle(shuff,seed,true);

    expect(ushuff).to.deep.equal(array);
    expect(ushuff).to.have.length(array.length);
    done();
  });

  it('should shuffle and return a new array same size with a number', function(done) {
    var shuff = ss.shuffle(array,701,true);
    expect(shuff).to.deep.not.equal(array);
    expect(shuff).to.have.length(array.length);
    done();
  });

  it('should shuffle and unshuffle returning same array with number seed', function(done) {
    var seed = 25;
    var shuff = ss.shuffle(array,seed,true);
    var ushuff = ss.unshuffle(shuff,seed,true);

    expect(ushuff).to.deep.equal(array);
    expect(ushuff).to.have.length(array.length);
    done();
  });

  it('should shuffle and return a new array same size with a float', function(done) {
    var shuff = ss.shuffle(array,7.1,true);
    expect(shuff).to.deep.not.equal(array);
    expect(shuff).to.have.length(array.length);
    done();
  });

  it('should shuffle and unshuffle returning same array with float seed', function(done) {
    var seed = 2.5;
    var shuff = ss.shuffle(array,seed,true);
    var ushuff = ss.unshuffle(shuff,seed,true);

    expect(ushuff).to.deep.equal(array);
    expect(ushuff).to.have.length(array.length);
    done();
  });
});
