var Card = require('./../js/card.js').cardModule;

$(document).ready(function() {
  var myCard1 = new Card("A", "H");
  var myCard2 = new Card("8", "C");
  var myCard3 = new Card("4", "D");
  var myCardDiv1 = myCard1.createNode();
  var myCardDiv2 = myCard2.createNode();
  var myCardDiv3 = myCard3.createNode();
  var myCardsArray = [myCardDiv1, myCardDiv2, myCardDiv3];
  var l = 0;
  myCardsArray.forEach(function(cardDiv) {
    $('#cardsDiv').append(cardDiv);
    cardDiv.style.left = l+ "px";
    cardDiv.style.top = l+ "px";
    l += 20;
  });
});
