class BOX{
    constructor(xPosition,yPosition,width,height){
      var options = {
          isStatic:true 
      }
      this.body = Bodies.rectangle(xPosition,yPosition,width,height,options);
      World.add(world,this.body);

    }
     display(){ 
        push();
        fill(0) 
        rectMode(CENTER);
        rect(this.xPosition,this.yPosition,this.width,this.height);
        pop();

     }
    }