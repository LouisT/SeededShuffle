/*
  SeededShuffle - Node.js & Browser
  By Louis T. <louist@ltdev.im>
  https://github.com/LouisT/SeededShuffle/
*/
(function(Setup){
   var proto = {
       strSeed: null,
       shuffle: function (arr, seed, copy) {
             if (this.getType(arr) == "Array") {
                if (this.setSeed(seed)) {
                   var shuff = (copy?arr.slice(0):arr),
                       size = shuff.length,
                       map = this.genMap(size);
                   for (var i = size - 1; i > 0; i--) {
                       shuff[i] = shuff.splice(map[size-1-i],1,shuff[i])[0];
                   }
                   return shuff;
                };
             };
             return null;
       },
       unshuffle: function (arr, seed, copy) {
             if (this.getType(arr) == "Array") {
                if (this.setSeed(seed)) {
                   var shuff = (copy?arr.slice(0):arr),
                       size = shuff.length,
                       map = this.genMap(size);
                   for (var i = 1; i < size; i++) {
                       shuff[i] = shuff.splice(map[size-1-i],1,shuff[i])[0];
                   }
                   return shuff;
                };
             };
             return null;
       },
       genMap: function (size) {
             var map = new Array(size);
             for (var x = 0; x < size; x++) {
                 //Don't change these numbers.
                 map[x] = ((this.__seed = (this.__seed*9301+49297)%233280)/233280.0)*size|0;
             };
             return map;
       },
       setSeed: function (seed) {
             if (!/(number|string)/i.test(this.getType(seed))) {
                return false;
             };
             if (isNaN(seed)) {
                var seed = String((this.strSeed = seed)).split('').map(function(x){return x.charCodeAt(0)}).join('');
             };
             return this.__seed = this.seed = Number(seed);
       },
       getType: function (obj) {
             return Object.prototype.toString.call(obj).match(/^\[object (.*)\]$/)[1];
       },
   };
   Setup((function(){
        return Object.create(proto);
   })());
})((typeof exports!=='undefined'?function(fn){module.exports=fn;}:function(fn){this['SeededShuffle']=fn;}));
