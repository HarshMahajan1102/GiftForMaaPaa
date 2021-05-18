class Form {
  constructor() {
    this.title = createElement('h2');
    this.input = createInput("  Name (1st Letter Capital)");
    this.button = createButton("Touch This For Your Gift");
    // this.greeting = createElement('h3');
    player.name = this.input.value();
  }

  hide(){
    // this.greeting.hide();
    this.title.hide();
    this.button.hide();
    this.input.hide();
  }

  // func(){
   
  // }

  display(){
    this.title.html("Welcome To Your Gift !");
    this.title.position(displayWidth/2 - 120, 0);
    this.input.position(displayWidth/2 - 85, 300);
    this.button.position(displayWidth/2 - 80, 350);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      this.title.hide();

      if(this.input.value() = 'Harsh' && this.button.mousePressed){
        draw.background(bg);
      } else {
        this.greeting.html("Sorry " + player.name + ", but for the time you are not supposed to access this");
        this.greeting.position(displayWidth/2 - 85, 300);
      }
    });
  }
}
