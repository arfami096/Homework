let user = "netologist";
let orderOwner = "leo-tolstoy";
let admin = "admin";
if (user === orderOwner || user === admin) { 
console.log ("Редактирование разрешено") 
}
else {
  console.log ("Заказ нельзя редактировать")
}
