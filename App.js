alert("welcome");
function asap(){
var userInput = prompt("do you prefer Apple device or Android");

if (userInput == "Apple"){
  document.write("<img src = 'https://i2.wp.com/allhomecinema.com/wp-content/uploads/2020/12/iOS-7-10-Emblem.jpg?fit=1800%2C833&ssl=1'/>")

}
else if (userInput == "Android"){
  document.write("<img src ='https://miro.medium.com/max/602/1*0n7jS9SZ2ODJIrQbEWsQkg.jpeg '/>")
}

var userName = prompt("what is your name ");
while (userName !="Abdalla")  {
  userName = prompt("what is your name ");
}
var qst = prompt("how many images you want to print?");
for(var i=0;i<qst;i++){
  document.write("<img src ='https://images.idgesg.net/images/article/2020/08/android-awkward-timing-100855433-large.jpg'>")
}
}
asap();