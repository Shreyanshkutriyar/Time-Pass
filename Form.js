class Form {
  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }
   
  hide(){
    this.greeting.hide()
    this.button.hide()
    this.input.hide()    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(450, 0);
    
        
    this.input.position(465, 100);
   this.button.position(525, 150);

    this.button.mousePressed(function(){
      this.input.hide();
      this.button.hide();
      player.name = this.input.value;
      playerCount+=1;
      player.index = playerCount
      player.update()
      player.updateCount(playerCount);
    
      this.greeting.html("Hello " + player.name )
      this.greeting.position(500, 180)
    });

  }
}
