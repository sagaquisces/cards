// var Card = require('./../js/card.js').cardModule;
var Stack = require('./../js/stack.js').stackModule;


$(document).ready(function() {
  var deck = new Stack();
  deck.makeDeck(1);
  var l = 0;
  deck.cards.forEach(function(card) {
    var cardDiv = card.createNode();
    $('#stackDiv').append(cardDiv);
    cardDiv.style.left = l+ "px";
    cardDiv.style.top = l+ "px";
    l += 10;
  });

});
