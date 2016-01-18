'use strict';

var hours = ['6:00am','7:00am','8:00am','9:00am','10:00am','11:00am','12:00pm','1:00pm','2:00pm','3:00pm','4:00pm','5:00pm','6:00pm','7:00pm','8:00pm'];

function Coffeestand(stand, minCust, maxCust, cupsCust, lbsCust) {
  this.stand = stand;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.hourlyCust = [];
  this.cupsCust = cupsCust;
  this.hourlyCups = [];
  this.lbsCust = lbsCust;
  this.hourlyLbs = [];
  this.hourlyCupLbs = [];
  this.allHourlyBeans = this.hourlyCupLbs + this.hourlyLbs;
  this.allDailyBeans = 0;
  // stand.push(this);
};
 Coffeestand.prototype.hourlyCustomers = function() {
  for (var i = 0; i < hours.length; i++) {
this.hourlyCust.push(Math.ceil(Math.random() * (this.maxCust - this.minCust) + this.minCust));
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
    var beans = (this.lbsCust * this.hourlyCust[i]);
    this.hourlyLbs.push(beans);
    this.allDailyBeans += beans;
  }
};
Coffeestand.prototype.render = function() {
  var sectEl = document.getElementById('tweaks_finest');
  var tblEl = document.createElement('table');
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.stand;
  trEl.appendChild(thEl);
  tblEl.appendChild(trEl);
  sectEl.appendChild(tblEl);
  var trEl2 = document.createElement('tr');
  var thEl2 = document.createElement('th');

  this.hourlyCustomers();
  this.hourlyCupsEqu();
  this.hourlyLbsEqu();

  for (var i = 0; i < hours.length; i++) {
    var tdEl = document.createElement('td');
    tdEl.textContent = this.hourlyLbs[i].toFixed[1];
    trEl2.appendChild(tdEl);
  }
  for (var i = 0; i < hours.length; i++){
    var tdEl2 = document.createElement('td');
    var shorten = (this.hourlyCupLbs[i] + this.hourlyLbs[i]).toFixed(1);
    tdEl2.textContent = hours[i] + ": " + shorten +  " lbs " + this.hourlyCust[i] + " customers, " + this.hourlyCups[i].toFixed(1) + "cups (" + this.hourlyCupLbs[i].toFixed(1) + " lbs)," + this.hourlyLbs[i].toFixed(1) + 'lbs to-go';
    trEl.appendChild(tdEl2);
  }
  var tdEl2 = document.createElement('td');
      tdEl2.textContent = 'Total lbs of Beans Sold at this Location: ' + this.allDailyBeans.toFixed(1);
      trEl.appendChild(tdEl2);
};
// var newLocation = new Coffeestand(stand, +minCust, +maxCust, +cupsCust, +lbsCust);
var pike = new Coffeestand('Pike Place', 14, 55, 1.2, 3.7);
var capHill = new Coffeestand('Capitol Hill', 32, 48, 3.2, 0.4);
var library = new Coffeestand('Seattle Public Library', 49, 75, 2.6, 0.2);
var union = new Coffeestand('South Lake Union', 35, 88, 1.3, 3.7);
var airport = new Coffeestand('Sea-Tac Airport', 68, 124, 1.1, 2.7);
var web = new Coffeestand('Website Sales', 3, 6, 0, 6.7);

  pike.render();
  capHill.render();
  library.render();
  union.render();
  airport.render();
  web.render();

  var addData = document.getElementById('tableData');
  addData.addEventListener('submit', addStand);

    function addStand(e) {
      console.log(e);
      e.preventDefault();

    var stand = e.target.stand1.value;
    var minCust = e.target.minCust1.value;
    var maxCust = e.target.maxCust1.value;
    var cupsCust = e.target.cupsPerCust.value;
    var lbsCust = e.target.lbsPerCust.value;

    var addNewStore = new Coffeestand(stand, +minCust, +maxCust, +cupsCust, +lbsCust);
    addNewStore.render();
  };
