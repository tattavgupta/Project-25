var paperSprite
class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restituition:0.3,
            friction:0.5,
            density:1.2

        }
        rectMode(CENTER);
        paperSprite=createSprite(width/2, 80, 10,10);
        paperSprite.addImage(paperIMG)
        paperSprite.scale=0.25
        this.body=Bodies.circle(x,y,radius,options)
        this.radius=radius
        World.add(world,this.body)
    }
    display(){
        var pos=this.body.position
        paperSprite.x=pos.x
        paperSprite.y=pos.y
        push()
        ellipseMode(RADIUS)
        fill("purple")
        ellipse(pos.x,pos.y,this.radius,this.radius)
        pop()
    }
}