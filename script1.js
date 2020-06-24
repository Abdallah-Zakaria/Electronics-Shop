'use strict';

function budjet() {
    var choice = "";
    var favorite = prompt("How mush is your budget ??");
    while (favorite < 200 || favorite > 4000) {
        if (favorite < 200 && favorite >= 0) {
            var favorite = prompt("There is no products within your budget, Rise Your budget UP to 200  ");
        } else if (favorite < 0) {
            var favorite = prompt("there is budget in minus, try to put a real budget ");
        } else if (favorite > 3000) {
            var favorite = prompt("Your so RICH :P, the most expensive product cost you 3000, try make your budget under that ");
        } 
    }

    if (favorite >= 200 && favorite <500 ) {
        choice = "Airpods";
    } else if (favorite >= 500 && favorite <1000 ){
        choice = "Apple Watch";
    } else if (favorite >= 1000 && favorite <2000 ){
        choice = "IPhone 11";
    } else if (favorite >= 2000 && favorite <3000 ){
        choice = "MacBook";
    } else if (favorite >= 3000 && favorite <4000) {
        choice = "iMac";
    } else {
        var favorite = prompt(" enter your Budget in numbers !!");
    }
    alert("We advice you  to buy " + choice);
}

budjet();