// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

console.log(returnFirstTwoDrivers(drivers))


const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

  console.log(returnLastTwoDrivers(['Sally', 'Bob', 'Freddy', 'Claudia']))

  const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

console.log(selectingDrivers[0](drivers))
console.log(selectingDrivers[1](drivers))

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

//const fairMultiplier = createFareMultiplier()

//console.log(fairMultiplier)

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const fareQuadtripler = createFareMultiplier(4);

const fareQuintupler = createFareMultiplier(5);

console.log(fareDoubler(10))
console.log(fareTripler(12))
console.log(fareQuadtripler(5))
console.log(fareQuintupler(5))

const selectDifferentDrivers = function (drivers, driversReturn) {
    return driversReturn(drivers);
  };

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers))