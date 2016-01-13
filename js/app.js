//'use strict'

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function Coffeestand(stand, minCust, maxCust, cupsCust, lbsCust) {
  this.stand = stand;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlyCust = [];
  this.cupsCust = cupsCust;
  this.hourlyCups = [];
  //this.dailyCups = 0;
  this.lbsCust = lbsCust;
  this.hourlyLbs = [];
  //this.dailyLbs = 0;
  this.hourlyCupLbs = [];
  this.allHourlyBeans = this.hourlyCupLbs + this.hourlyLbs;
  this.allDailyBeans = 0;
};

 Coffeestand.prototype.hourlyCustomers = function() {
  for (var i = 0; i < hours.length; i++) {
this.hourlyCust.push(Math.floor(Math.random() * (this.maxCust - this.minCust) + this.minCust));
  }
};

Coffeestand.prototype.hourlyCupsEqu = function() {
  for (var i = 0; i < hours.length; i++) {
    var cups = this.cupsCust * this.hourlyCust[i];
    this.hourlyCups.push(cups);
    this.hourlyCupLbs.push(cups / 20);
    this.allDailyBeans += (cups / 20);
  }
};

Coffeestand.prototype.hourlyLbsEqu = function() {
  for (var i = 0; i < hours.length; i++) {
    var beans = Math.floor(this.lbsCust * this.hourlyCust[i]);
    this.hourlyLbs.push(beans);
    this.allDailyBeans += beans;
  }
};

Coffeestand.prototype.render = function() {
  this.hourlyCustomers();
  this.hourlyCupsEqu();
  this.hourlyLbsEqu();

var ulEl = document.createElement('ul');
ulEl.appendChild(document.createTextNode(this.stand));
var sectionEl = document.getElementById('tweaks_finest').appendChild(ulEl);

for (var i = 0; i < hours.length; i++){
  var liEl = document.createElement('li');
  liEl.textContent = hours[i] + ": " + (this.hourlyCupLbs[i] + this.hourlyLbs[i]).toFixed(1) +  ' lbs [' + this.hourlyCust[i] + ' customers, ' + this.hourlyCups[i].toFixed(1) + 'cups (' + this.hourlyCupLbs[i].toFixed(1) + ' lbs), ' + this.hourlyLbs[i].toFixed(1) + 'lbs to-go]';
  ulEl.appendChild(liEl);
  }
  liEl = document.createElement('li');
  liEl.textContent = 'Total lbs of Beans Sold at this Location: ' + this.allDailyBeans.toFixed(1);
  ulEl.appendChild(liEl);
};

var pike = new Coffeestand('Pike Place', 14, 55, 1.2, 3.7);
pike.render();
var capHill = new Coffeestand('Capitol Hill', 32, 48, 3.2, 0.4);
capHill.render();
var library = new Coffeestand('Seattle Public Library', 49, 75, 2.6, 0.2);
library.render();
var union = new Coffeestand('South Lake Union', 35, 88, 1.3, 3.7);
union.render();
var airport = new Coffeestand('Sea-Tac Airport', 124, 1.1, 2.7);
airport.render();
var web = new Coffeestand('Website Sales', 3, 6, 0, 6.7);
web.render();
