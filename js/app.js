'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function Coffeestand(stand, minCust, maxCust, cupsCust, lbsCust) {
  this.stand = stand;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlyCust = '[]';
  this.cupsCust = cupsCust;
  this.hourlyCups = '[]';
  this.dailyCups = '0';
  this.lbsCust = lbsCust;
  this.hourlyLbs = '[]';
  this.dailyLbs = '0';
  this.allDailyBeans = '0';

  this.hourlyCustomers = function() {
    for (var i = 0; i < hours.length; i++) {
  this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  }
};

  this.hourlyCupsEqu = function() {
    for (var i = 0; i < hours.length; i++) {
      var cups = this.cupsCust * this.hourlyCust[i];
      this.hourlyCups.push(parseFloat(cups.toFixed(1)));
      this.dailyCups += cups;
      this.allDailyBeans += (cups / 20);
    }
  };

  this.hourlyLbsEqu = function() {
    for (var i = 0; i < hours.length; i++) {
      var beans = Math.floor(this.lbsCust * this.hourlyCust[i]);
      this.hourlyLbs.push(beans);
      this.dailyBeansByLb += beans;
    }
  };

  this.render = function() {
    this.hourlyCustomers();
    this.hourlyCupsEqu();
    this.hourlyLbsEqu();

  var ulEl = document.createElement('ul');
  ulEl.appendChild(document.createTextNode(this.stand));
  var sectionEl = document.getElementById('tweaks_finest').appendChild(ulEl);

  for (var i = 0; i < hours.length; i++){
    var liEl = document.createElement('li');
    liEl.textContent = hours[i] + ":" + this.allDailyBeans + ' [' + this.hourlyCust[i] +  ' customers, ' + this.dailyCups + ' cups (' + (this.dailyCups / 20) + '), ' + this.dailyLbs + ' lbs to-go]';
    ulEl.appendChild(liEl);
    }
  }
};

var pike = new Coffeestand('Pike Place', 14, 55, 1.2, 3.7);
pike.this.render();
var capHill = new Coffeestand('Capitol Hill', 32, 48, 3.2, 0.4);
//capHill.render();
var library = new Coffeestand('Seattle Public Library', 49, 75, 2.6, 0.2);
//library.render();
var union = new Coffeestand('South Lake Union', 35, 88, 1.3, 3.7);
//union.render();
var airport = new Coffeestand('Sea-Tac Airport', 124, 1.1, 2.7);
//airport.render();
var web = new Coffeestand('Website Sales', 3, 6, 0, 6.7);
//web.render();

//Coffeestand.render();

// var stands = [pike, capHill, library, union, airport, web];
//   for (var i = 0; i < stands.length; i++) {
//     stands[i].this.render();
//   }




//Separation from old and new work.



// function pikeSales(){
// var pikeCups = Math.round(pike.pikeCust() * pike.cupsCust);
// var pikeLbs = Math.round(pike.pikeCust() * (pike.lbsCust)).toFixed(1);
// var pikeAns = [pike.pikeCust(), pikeCups, pikeLbs];
// return pikeAns;
// }
//
// for (var i = 0; i < hours.length; i++){
//   console.log(pikeSales());
// }
// console.log(pikeSales());
// var capHill = {
//   minCust: 32,
//   maxCust: 48,
//   cupsCust: 3.2,
//   lbsCust: 0.4,
//   capHillCust: function() {
//   return Math.floor((Math.random() * (this.maxCust - this.minCust + 1)) + this.minCust);
//   }
// };
// var capHillCups = Math.round(capHill.capHillCust() * capHill.cupsCust);
// var capHillCustLbs = Math.round(capHill.capHillCust() * (capHill.lbsCust)).toFixed(1);
//
// function capHillSales(){
// var capHillCups = Math.round(capHill.capHillCust() * capHill.cupsCust);
// var capHillLbs = Math.round(capHill.capHillCust() * (capHill.lbsCust)).toFixed(1);
// var capHillAns = [capHill.capHillCust(), capHillCups, capHillLbs];
// return capHillAns;
// }
//
// for (i = 0; i < hours.length; i++) {
//   document.write(capHillSales());
// }
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
// var libraryCups = Math.round(library.libraryCust() * library.cupsCust);
// var libraryLbs = Math.round(library.libraryCust() * (library.lbsCust)).toFixed(1);
//
// function librarySales(){
// var libraryCups = Math.round(library.libraryCust() * library.cupsCust);
// var libraryLbs = Math.round(library.libraryCust() * (library.lbsCust)).toFixed(1);
// var libraryAns = [library.libraryCust(), libraryCups, libraryLbs];
// return libraryAns;
// }
//
// for (i = 0; i < hours.length; i++) {
//   document.write(librarySales());
// }
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
// var unionCups = Math.round(union.unionCust() * union.cupsCust);
// var unionLbs = Math.round(union.unionCust() * (union.lbsCust)).toFixed(1);
//
// function unionSales(){
// var unionCups = Math.round(union.unionCust() * union.cupsCust);
// var unionLbs = Math.round(union.unionCust() * (union.lbsCust)).toFixed(1);
// var unionAns = [union.unionCust(), unionCups, unionLbs];
// return unionAns;
// }
//
// for (i = 0; i < hours.length; i++) {
//   document.write(unionSales());
// }
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
// var airportCups = Math.round(airport.airportCust() * airport.cupsCust);
// var airportLbs = Math.round(airport.airportCust() * (airport.lbsCust)).toFixed(1);
//
// function airportSales(){
// var airportCups = Math.round(airport.airportCust() * airport.cupsCust);
// var airportLbs = Math.round(airport.airportCust() * (airport.lbsCust)).toFixed(1);
// var airportAns = [airport.airportCust(), airportCups, airportLbs];
// return airportAns;
// }
//
// for (i = 0; i < hours.length; i++) {
//   document.write(airportSales());
// }
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
// var webCups = Math.round(web.webCust() * web.cupsCust);
// var webLbs = Math.round(web.webCust() * (web.lbsCust)).toFixed(1);
//
// function webSales(){
// var webCups = Math.round(web.webCust() * web.cupsCust);
// var webLbs = Math.round(web.webCust() * (web.lbsCust)).toFixed(1);
// var webAns = [web.webCust(), webCups, webLbs];
// return webAns;
// }
//
// for (i = 0; i < hours.length; i++) {
//   document.write(webSales());
// }
