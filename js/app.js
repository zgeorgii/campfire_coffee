
var pike = {
  minCust: 14,
  maxCust: 55,
  cupsCust: 1.2,
  lbsCust: 3.7,
  pikeCust: function(){
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
var pikeCups = Math.round(pike.pikeCust() * pike.cupsCust);
var pikeLbs = Math.round(pike.pikeCust() * (pike.lbsCust)).toFixed(1);

// var capHill = {
//   minCust: 32,
//   maxCust: 48,
//   cupsCust: 3.2,
//   lbsCust: 0.4,
//   capHillCust: function() {
//   return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };
//
// var library = {
//   minCust: 49,
//   maxCust: 75,
//   cupsCust: 2.6,
//   lbsCust: 0.2,
//   libraryCust: function() {
//   return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };
//
// var union = {
//   minCust: 35,
//   maxCust: 88,
//   cupsCust: 1.3,
//   lbsCust: 3.7,
//   unionCust: function() {
//   return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };
//
// var airport = {
//   minCust: 68,
//   maxCust: 124,
//   cupsCust: 1.1,
//   lbsCust: 2.7,
//   airportCust: function() {
//   return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };
//
// var web = {
//   minCust: 3,
//   maxCust: 6,
//   cupsCust: 0,
//   lbsCust: 6.7,
//   webCust: function() {
//   return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };
