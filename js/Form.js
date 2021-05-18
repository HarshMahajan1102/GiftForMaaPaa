class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("  Name (1st Letter Capital)");
    this.button = createButton("Touch This For Your Gift");
    // this.greeting = createElement('h4');
    this.confession = createElement('h1');
    this.confession2 = createElement('h3');
  }

  hide(){
    // this.greeting.hide();
    this.title.hide();
    this.button.hide();
    this.input.hide();
  }

  display(){
    this.title.html("Welcome To Your Gift !");
    this.title.position(displayWidth/2 - 120, 0);
    this.input.position(displayWidth/2 - 85, 300);
    this.button.position(displayWidth/2 - 80, 350);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();
      player.name = this.input.value();


      if(this.input.value() === "Vivek" || this.input.value() === "Shweta" && this.button.mousePressed){
        bg = loadImage('images/gb.jpg');
        // this.greeting.html("Happy Marriage Anniversary");
        // this.greeting.position(displayWidth/2 - 85, 300);
      } else {
        bg = loadImage('images/Sorry.png');
        this.confession.html("Sorry Once Again " + player.name);
        this.confession.position(displayWidth/2 + 50, 535);
        // this.confession2.html("But It seems like this is not the place you are looking for !");
        // this.confession2.position(displayWidth/2 - 210, 275);
      }
    });
  }
}
