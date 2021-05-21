class Form {
  constructor() {
    // this.title = createElement('h2');
    this.input = createInput("Name");
    this.button = createButton("Enter");
    this.button2 = createButton("Play");
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
    // this.title.html("Welcome To Your Surprise !");
    // this.title.position(displayWidth/2 - 150, 0);
    this.input.position(displayWidth/2 - 135, 450);
    this.button.position(displayWidth/2 + 53, 450);
    this.button2.hide();
    this.button2.position(displayWidth - 150, displayHeight - 150);
    
    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();
      // this.title.hide();
      player.name = this.input.value();

      if(this.input.value() === "Vivek" || this.input.value() === "Shweta" && this.button.mousePressed){
        bg = loadImage('images/gb.jpg');
        bg.height = displayHeight;
        bg.width = displayWidth;
        this.button2.show();

        this.button2.mousePressed(()=>{

        video = createVideo("images/InShot.mp4");
        flag=1
        positionFlag=1
        // console.log("IN")
        // console.log("preessed")

        if(flag===1){
          video.play();
          // console.log("video staterd")
        }

        if(positionFlag===1){
          // console.log("in pos")
           video.position(width/2 - 3550, height/2 - 285);
           video.size(displayWidth + 5780, displayHeight - 130);
           positionFlag=0;
          }
        
        // if(flag===1){
          // console.log("in image")
               //  image(video, width/2-150, height/2-250);
          // }

      })
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

/*
 
After line 36
        this.greeting.html("Happy Anniversary");
 
        this.greeting.position(displayWidth/2 - 85, 300);
        this.greeting2.html("Drag the mouse for surprise");
 
        this.greeting2.position(displayWidth/2 -60, 350);

*/

/*

After line 34
this.greeting.html("Happy Marriage Anniversary");
this.greeting.position(displayWidth/2 - 85, 300);

*/
