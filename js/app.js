
var pike = {
  minCust: 14,
  maxCust: 55,
  cupsCust: 1.2,
  lbsCust: 3.7,
  pikeCust: function(){
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};

function pikeSales(){
var pikeCups = Math.round(pike.pikeCust() * pike.cupsCust);
var pikeLbs = Math.round(pike.pikeCust() * (pike.lbsCust)).toFixed(1);
var pikeAns = [pike.pikeCust(), pikeCups, pikeLbs];
return pikeAns;
}

for (i = 0; i < 15; i++) {
  document.write(pikeSales());
}

var capHill = {
  minCust: 32,
  maxCust: 48,
  cupsCust: 3.2,
  lbsCust: 0.4,
  capHillCust: function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
var capHillCups = Math.round(capHill.capHillCust() * capHill.cupsCust);
var capHillCustLbs = Math.round(capHill.capHillCust() * (capHill.lbsCust)).toFixed(1);

function capHillSales(){
var capHillCups = Math.round(capHill.capHillCust() * capHill.cupsCust);
var capHillLbs = Math.round(capHill.capHillCust() * (capHill.lbsCust)).toFixed(1);
var capHillAns = [capHill.capHillCust(), capHillCups, capHillLbs];
return capHillAns;
}

for (i = 0; i < 15; i++) {
  document.write(capHillSales());
}

var library = {
  minCust: 49,
  maxCust: 75,
  cupsCust: 2.6,
  lbsCust: 0.2,
  libraryCust: function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
var libraryCups = Math.round(library.libraryCust() * library.cupsCust);
var libraryLbs = Math.round(library.libraryCust() * (library.lbsCust)).toFixed(1);

function librarySales(){
var libraryCups = Math.round(library.libraryCust() * library.cupsCust);
var libraryLbs = Math.round(library.libraryCust() * (library.lbsCust)).toFixed(1);
var libraryAns = [library.libraryCust(), libraryCups, libraryLbs];
return libraryAns;
}

for (i = 0; i < 15; i++) {
  document.write(librarySales());
}

var union = {
  minCust: 35,
  maxCust: 88,
  cupsCust: 1.3,
  lbsCust: 3.7,
  unionCust: function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
var unionCups = Math.round(union.unionCust() * union.cupsCust);
var unionLbs = Math.round(union.unionCust() * (union.lbsCust)).toFixed(1);

function unionSales(){
var unionCups = Math.round(union.unionCust() * union.cupsCust);
var unionLbs = Math.round(union.unionCust() * (union.lbsCust)).toFixed(1);
var unionAns = [union.unionCust(), unionCups, unionLbs];
return unionAns;
}

for (i = 0; i < 15; i++) {
  document.write(unionSales());
}

var airport = {
  minCust: 68,
  maxCust: 124,
  cupsCust: 1.1,
  lbsCust: 2.7,
  airportCust: function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
var airportCups = Math.round(airport.airportCust() * airport.cupsCust);
var airportLbs = Math.round(airport.airportCust() * (airport.lbsCust)).toFixed(1);

function airportSales(){
var airportCups = Math.round(airport.airportCust() * airport.cupsCust);
var airportLbs = Math.round(airport.airportCust() * (airport.lbsCust)).toFixed(1);
var airportAns = [airport.airportCust(), airportCups, airportLbs];
return airportAns;
}

for (i = 0; i < 15; i++) {
  document.write(airportSales());
}

var web = {
  minCust: 3,
  maxCust: 6,
  cupsCust: 0,
  lbsCust: 6.7,
  webCust: function() {
  return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
  }
};
var webCups = Math.round(web.webCust() * web.cupsCust);
var webLbs = Math.round(web.webCust() * (web.lbsCust)).toFixed(1);

function webSales(){
var webCups = Math.round(web.webCust() * web.cupsCust);
var webLbs = Math.round(web.webCust() * (web.lbsCust)).toFixed(1);
var webAns = [web.webCust(), webCups, webLbs];
return webAns;
}

for (i = 0; i < 15; i++) {
  document.write(webSales());
}
