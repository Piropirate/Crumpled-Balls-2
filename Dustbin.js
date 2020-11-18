class Dustbin{
    constructor(x,y){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction : 0.5, 
            density : 1.2
        }
        this.body = Bodies.rectangle(x-50,y-30,20,100,options);
        this.body2 = Bodies.rectangle(x,y,100,20,options);
        this.body3 = Bodies.rectangle(x+50,y-30,20,100,options);
        this.height = 100;
        this.width = 20;
        this.height2 = 200;
        this.width2 = 200;
        this.image = loadImage("sprites/dustbingreen.png");
        World.add(world,this.body);
        World.add(world,this.body2);
        World.add(world,this.body3);
    }
    display(){
        var pos = this.body2.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(-50,-40,this.width,this.height);
        rect(50,-40,this.width,this.height);
        image(this.image,-100,-185,this.width2,this.height2); 
        pop();
    }
}