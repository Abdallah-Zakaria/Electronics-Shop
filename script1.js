'use strict';

var choice="";
var favorite = prompt("How mush your budget ??");
if (favorite < 200 ){
    choice = "nothing can buy it ";
} else if (favorite >= 200 && favorite <500 ) {
    choice = "Airpods";
} else if (favorite >= 500 && favorite <1000 ){
    choice = "Apple Watch";
} else if (favorite >= 1000 && favorite <2000 ){
    choice = "IPhone 11";
} else if (favorite >= 2000 && favorite <3000 ){
    choice = "MacBook";
} else  {
    choice = "iMac";
}
   

alert ("We advice you  to buy " + choice)
