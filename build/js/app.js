(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Card(rank, suit) {this.rank = rank;this.suit = suit;}

Card.prototype.toString = function() {var e,a;switch(this.rank){case"A":e="Ace";break;case"2":e="Two";break;case"3":e="Three";break;case"4":e="Four";break;case"5":e="Five";break;case"6":e="Six";break;case"7":e="Seven";break;case"8":e="Eight";break;case"9":e="Nine";break;case"10":e="Ten";break;case"J":e="Jack";break;case"Q":e="Queen";break;case"K":e="King";break;default:e=null;}switch(this.suit){case"C":a="Clubs";break;case"D":a="Diamonds";break;case"H":a="Hearts";break;case"S":a="Spades";break;default:a=null;}return null==e||null==a?"":e+" of "+a;};

Card.prototype.createNode = function(){var e,a,s,n,d,t,c;switch(e=document.createElement("DIV"),e.className="card",a=document.createElement("DIV"),a.className="front",c=" ",this.suit){case"C":c="♣";break;case"D":a.className+=" red",c="♦";break;case"H":a.className+=" red",c="♥";break;case"S":c="♠";}return t=this.rank,""==this.toString()&&(t=" "),s=document.createElement("DIV"),s.className="index",d=document.createTextNode(t),s.appendChild(d),s.appendChild(document.createElement("BR")),d=document.createTextNode(c),s.appendChild(d),a.appendChild(s),s=document.createElement("DIV"),d=document.createTextNode(c),s.appendChild(d),"A"==this.rank&&(s.className="ace",n=s.cloneNode(!0),a.appendChild(n)),"3"!=this.rank&&"5"!=this.rank&&"9"!=this.rank||(s.className="spotB3",n=s.cloneNode(!0),a.appendChild(n)),"2"!=this.rank&&"3"!=this.rank||(s.className="spotB1",n=s.cloneNode(!0),a.appendChild(n)),"2"!=this.rank&&"3"!=this.rank||(s.className="spotB5",n=s.cloneNode(!0),a.appendChild(n)),"4"!=this.rank&&"5"!=this.rank&&"6"!=this.rank&&"7"!=this.rank&&"8"!=this.rank&&"9"!=this.rank&&"10"!=this.rank||(s.className="spotA1",n=s.cloneNode(!0),a.appendChild(n),s.className="spotA5",n=s.cloneNode(!0),a.appendChild(n),s.className="spotC1",n=s.cloneNode(!0),a.appendChild(n),s.className="spotC5",n=s.cloneNode(!0),a.appendChild(n)),"6"!=this.rank&&"7"!=this.rank&&"8"!=this.rank||(s.className="spotA3",n=s.cloneNode(!0),a.appendChild(n),s.className="spotC3",n=s.cloneNode(!0),a.appendChild(n)),"7"!=this.rank&&"8"!=this.rank&&"10"!=this.rank||(s.className="spotB2",n=s.cloneNode(!0),a.appendChild(n)),"8"!=this.rank&&"10"!=this.rank||(s.className="spotB4",n=s.cloneNode(!0),a.appendChild(n)),"9"!=this.rank&&"10"!=this.rank||(s.className="spotA2",n=s.cloneNode(!0),a.appendChild(n),s.className="spotA4",n=s.cloneNode(!0),a.appendChild(n),s.className="spotC2",n=s.cloneNode(!0),a.appendChild(n),s.className="spotC4",n=s.cloneNode(!0),a.appendChild(n)),n=document.createElement("IMG"),n.className="face","J"==this.rank&&(n.src="graphics/jack.gif"),"Q"==this.rank&&(n.src="graphics/queen.gif"),"K"==this.rank&&(n.src="graphics/king.gif"),"J"!=this.rank&&"Q"!=this.rank&&"K"!=this.rank||(a.appendChild(n),s.className="spotA1",n=s.cloneNode(!0),a.appendChild(n),s.className="spotC5",n=s.cloneNode(!0),a.appendChild(n)),e.appendChild(a),e;};

exports.cardModule = Card;

},{}],2:[function(require,module,exports){
var Card = require('./../js/card.js').cardModule;

function Stack() {this.cards = new Array()}

Stack.prototype.makeDeck = function(r) {var e,n,a,t,h=new Array("A","2","3","4","5","6","7","8","9","10","J","Q","K"),c=new Array("C","D","H","S");for(t=h.length*c.length,this.cards=new Array(r*t),e=0;e<r;e++)for(n=0;n<c.length;n++)for(a=0;a<h.length;a++)this.cards[e*t+n*h.length+a]=new Card(h[a],c[n])};

Stack.prototype.makeNewOrderDeck = function(n) {
	var ranks = new Array("A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K");
  var suits = new Array("H", "C", "S", "D");
  var i, j, k;
  var m;

  m = ranks.length * suits.length;

  // Set array of cards.

  this.cards = new Array(n * m);

  // Fill the array with 'n' packs of cards.

  for (i = 0; i < n; i++) // for number of decks
    for (j = 0; j < suits.length; j++) // suits
      for (k = 0; k < ranks.length; k++)
        this.cards[i * m + j * ranks.length + k] =
          new Card(ranks[k], suits[j]);

  var mid = Math.ceil(this.cards.length/2);
  var left = this.cards.splice(0,mid);
  var right = this.cards.reverse();

  alert (left);
  alert (right);

  this.cards = left.concat(right);



  }

Stack.prototype.deal = function(){return this.cards.length>0?this.cards.shift():null}

Stack.prototype.draw = function(s){var r;return s>=0&&s<this.cards.length?(r=this.cards[s],this.cards.splice(s,1)):r=null,r}

Stack.prototype.count = function() {return this.cards.length;}

Stack.prototype.addCard = function(card) {this.cards.push(card);}

Stack.prototype.combine = function(c){this.cards=this.cards.concat(c.cards),c.cards=new Array}

exports.stackModule = Stack;

},{"./../js/card.js":1}],3:[function(require,module,exports){
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

},{"./../js/card.js":1,"./../js/stack.js":2}]},{},[3]);
