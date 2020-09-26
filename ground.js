class Ground {
    //constructor() function is invoked whenever a new object is made using the Box class
    // "this" to refer to the object created using this class.
constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world, this.body)
}

display() {
    var pos = this.body.position;
//push() -> captures the new setting.
    push();
    //translate() -> to change the 0 of the axis to a given x and y position.

    translate(pos.x,pos.y);
    rectMode(CENTER);
    fill(255);
    rect(0,0,this.width,this.height);
    //pop() -> reverts to the old setting.

    pop();
}
}