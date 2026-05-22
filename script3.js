let purchaseCount = 3;
let targetBonusLimit = 5000;
let bonusBalance = 6000;
let acrualPercentage = 10;
let increaseAcrualPercentage = 20;
let activityBonusPercentage = 5;
let actualBonusPercentage = 0;

if (bonusBalance > targetBonusLimit && purchaseCount > 1) {
  actualBonusPercentage = increaseAcrualPercentage + activityBonusPercentage
}
else if (bonusBalance > targetBonusLimit) {
  actualBonusPercentage = increaseAcrualPercentage
}
else if (bonusBalance < targetBonusLimit && purchaseCount > 1) {
  actualBonusPercentage = acrualPercentage + activityBonusPercentage
}
else if (bonusBalance < targetBonusLimit) {
  actualBonusPercentage = acrualPercentage
}
console.log ("Процент от покупки: " + actualBonusPercentage + "%")
