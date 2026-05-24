let accountStatus = "vip";
let username = "Jack";
let cashbackPercentage = 0;


if (accountStatus === "extended") {
    cashbackPercentage = 15;
}
else if (accountStatus === "premium") {
    cashbackPercentage = 20;
}
else if (accountStatus === "vip") {
    cashbackPercentage = 30;
}
else {
    cashbackPercentage = 10;
}
console.log (username + " | " + "(" + accountStatus + ")" + " аккаунт." + " Вы получаете " + cashbackPercentage + "% с покупок на бонусный счёт.")

