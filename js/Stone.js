class Stone{
    constructor(x,y,r) {
        this.r = r
        this.body = Bodies.circle(x,y,r)
        World.add(world,this.body)
    }

    display() {
        var pos = this.body.position
        push()
        fill("white")
        ellipse(pos.x,pos.y,this.r,this.r)
        pop()
    }
} 
