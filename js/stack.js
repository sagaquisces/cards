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
