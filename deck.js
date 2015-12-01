/*Create a Deck object constructor. A deck should have the following functionality:

The Deck should contain the 52 standard cards
The Deck should be able to shuffle
The Deck should be able to reset
The Deck should be able to deal a random card
Deal should return the card that was dealt and remove it from the deck
Now create a Player object constructor. A Player should have the following functionality:

The Player should have a name
The Player should have a hand
The Player should be able to take a card (use the deck.deal method)
The Player should be able to discard a card

The Game!
Optional: Blackjack */
var BlackJack = function(){
  var deck = new Deck();
  var players = [];
  this.add_players = function(name){
    players.push(new Player(name));
  }
  this.deal = function(idx){
    if (!idx){
      for (var i = 0; i < players.length; i ++){
        players[i].getCard(deck.deal());
      }
    }
    else{
      player[idx].getCard(deck.deal());
    }
    return this;
  }
  this.reset_game = function(){
    deck.reset_deck();
    return this;
  }
  this.show_game = function(){
    for (var i = 0; i < players.length; i ++){
      players[i].show_hand();
    }
    deck.show_deck();
    return this;
  }
}
var Player =function(name){
  this.name = name; //public property that is available to all!
  this.hand = []; // public property that is available to the outside world
  this.getCard = function(aCard){
    console.log('get_card');
    this.hand.push(aCard);
    return this;
  }
  this.discard = function(idx){
    console.log('discard_card');
    this.hand.splice(idx,1);
    return this;
  }
  this.show_hand = function(){
    console.dir(this.hand);
    return this;
  }
}
var player1 = new Player('Mike');
var player2 = new Player('Dillon');
var Deck = function(){
  this.current_deck = [];
  var suits = ['spades', 'clubs', 'hearts', 'diamonds'];
  var card_values = ['ace',2,3,4,5,6,7,8,9,10,'jack','queen','king'];
  this.build_deck = function(){
    for (var i = 0 ; i < 4; i ++){ // iterates through suits
      for (var j = 0; j < 13; j ++){ // iterates through values
        this.current_deck.push({suit:suits[i], card_value: card_values[j], img:""}); // builds suits and values and images
      }
    }
    return this;
  }
var new_game = Object.create(new Player('mike'));
console.dir(new_game);

//SPLICE takes 3 parameters: 1: starting index, where in the array you start from. 2: how many elements of the array are removed, 3: what gets put into that site. (3,4,5)

  this.shuffle = function()
  {
    var temp_deck = [];
    while (this.current_deck.length > 0)
    {
      var idx = Math.floor(Math.random() * this.current_deck.length); // math.random --> 0 and 1;
      temp_deck.push(this.current_deck[idx]);
      this.current_deck.splice(idx, 1);
    }
    this.current_deck = temp_deck;
    return this;
  }
  // to show what is in the deck;
  this.show_deck = function(){
    console.dir(this.current_deck);
    return this;
  }
// returns a card from the deck;
  this.deal = function(){
    return this.current_deck.pop(); // remove the top 'card' of the 'deck' (array) and return it.
  }
  this.reset_deck = function(){
    this.current_deck = [];
    this.build_deck();
    this.shuffle();
    return this;
  }
  this.reset_deck();
}
Deck.prototype.mykey = function(){
  console.log('this hand is awful');
}
var mikegame = new BlackJack();
var publicDeck = new Deck();
publicDeck.mykey();

mikegame.add_players('Mike');
mikegame.add_players('Namhee');
mikegame.add_players('Kris');
mikegame.deal().deal();
mikegame.show_game();
