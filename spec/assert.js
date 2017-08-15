(function(exports) {
  function isTrue(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: assertion is " + assertionToCheck);
    }else{
      console.log(".");
    }
  }
  exports.isTrue = isTrue;
})(this);
