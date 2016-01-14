
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

  // document.write('table');
  // document.write('<tr><th>Coffee Stands</th></tr>');
  // document.write('<tr><td>' + pike.render() + '</td><tr>');
  // document.write('</table>')


// var stands = ['pike.render()', 'capHill.render()', 'library.render()', 'union.render()', 'airport.render()', 'web.render()'];
//
//   document.write('<table>');
//   document.write('<tr><th>Coffee Stands</th></tr>');
//
//   for(var i = 0; i < stands.length; i++){
//     document.write('<tr><td>' + stands[i] + '</td></tr>');
//   }
//
//   document.write('</table>');



  // var tblEl = document.createElement('table');
  //
  // var trEl = document.createElement('tr');
  //
  // var thEl = document.createElement('th');
  //
  // thEl.textContent = 'Coffee Stands';
  //
  // trEl.appendChild(thEl);
  //
  // var tdEl = document.createElement('td');
  // tdEl.textContent =
  // trEl.appendChild(tdEl);
  //
  // tblEl.appendChild(trEl);

// function makeTbl() {
//
//   var stands = [pike.render(), capHill.render(), library.render(), union.render(), airport.render(), web.render()];
//
//   var sectEl = document.getElementById('tweaks_finest');
//
//   var tblEl = document.createElement('table');
//
//   var trEl = document.createElement('tr');
//
//   var thEl = document.createElement('th');
//
//   thEl.textContent = 'Coffee Stands';
//
//   trEl.appendChild(thEl);
//
//   for (var i = 0; i < stands.length; i++) {
//
//   var tdEl = document.createElement('td');
//
//   tdEl.textContent = stands[i];
//
//   trEl.appendChild(tdEl);
// }
//   tblEl.appendChild(trEl);
//
//   sectEl.appendChild(tblEl);
// }
// makeTbl();
