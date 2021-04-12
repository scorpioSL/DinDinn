"use strict";
var ShiftLetters = /** @class */ (function () {
    function ShiftLetters(input, shift) {
        this.letters = "abcdefghijklmnopqrstuvwxyz";
        this.outPutInCapitals = true;
        this.inputString = "abc";
        this.shiftNumber = 20;
        if (input)
            this.inputString = input;
        if (shift)
            this.shiftNumber = shift;
    }
    ShiftLetters.prototype.generateOutput = function () {
        var _this = this;
        var inputToArray = this.inputString.split('');
        var outPut = [];
        inputToArray.forEach(function (value, index) {
            var letterIndex = _this.letters.indexOf(value.toLowerCase());
            var mod = letterIndex % 26;
            var newIndex = mod + _this.shiftNumber;
            if (newIndex > 26)
                newIndex = newIndex - 26;
            if (_this.outPutInCapitals)
                outPut.push(_this.letters[newIndex].toUpperCase());
            else
                outPut.push(_this.letters[newIndex]);
        });
        console.log("Output - " + outPut.join(''));
    };
    return ShiftLetters;
}());
var firstShift = new ShiftLetters();
firstShift.generateOutput();
