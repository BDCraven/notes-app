// (function(exports) {
//   function isTrue(assertionToCheck) {
//     if (!assertionToCheck) {
//       throw new Error("Assertion failed: assertion is " + assertionToCheck);
//     }else{
//       console.log(".");
//     }
//   }
//   exports.isTrue = isTrue;
// })(this);

var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: assertion is " + assertionToCheck);
    }else{
      console.log("passed");
    }
  },

  isEqual: function(arg1, arg2) {
    if (arg1 === arg2) {
      console.log("passed: " + arg1 + " is equal to " + arg2);
    }else{
      throw new Error("Assertion failed: " + arg1 + " is not equal to " + arg2);
    }
  }
};

function testEquality() {
  assert.isEqual(1,1);
}
testEquality();

// function testEquality() {
//   assert.isEqual(1,2);
// }
// testEquality();
