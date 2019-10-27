module.exports = {
  version: function() {
    return "v1.0";
  },
  divide: function(n1, n2) {
    return (n1 == 0 || n2 == 0) ? 0 : n1 / n2;
  },
  sum: function(n1, n2) {
    return n1 + n2;
  },
  lowestNumber: function(n1, n2) {
    return n1 < n2 ? n1
           : n2 < n1 ? n2
           : "Error";
  },
  lowestInArray: function(list) {
    var lowestNumber = list[0];
    for (var i = 0;i < list.length;i++) {
      (list[i] < lowestNumber ) ? lowestNumber = list[i]
      : "error";
      }
    return lowestNumber;
  },
  isItEven(num) {
    return (num % 2 == 0);
  }
};

