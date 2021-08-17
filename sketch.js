const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var joinPoint, side, side2, bridge, wall1, wall2
var stones = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  wall1 = new Base(0,height/2,30,height)
  wall2 = new Base(width,height/2,30,height)

  side1 = new Base(0,height-200,width/2,height/3)
  side2 = new Base(width,height-200,width/2,height/3)
  var sidePos = side2.body.position
  jointPoint = new Base(sidePos.x-(side1.w/2.2),sidePos.y-(side1.h/2.4),50,50)

  bridge = new Bridge(16,{x:width/9,y:height/1.9})
  Matter.Composite.add(bridge.body,jointPoint.body)
  link = new Link(bridge,jointPoint.body)
  frameRate(80);

  for (var i = 0;i < 8;i++) {
    var x = random(width/2 - 200,width/2 + 300)
    var y = random(-10,140)
    var stone = new Stone(x,y,40,40)
    stones.push(stone)
 }

}

function draw() {
  background(51);
  Engine.update(engine);
  rectMode(CENTER)
  ellipseMode(RADIUS)

  for (var i = 0;i < stones.length;i++) {
    stones[i].display()
  }
  
  side1.display()
  side2.display()
  wall1.display()
  wall2.display()
  jointPoint.display()

  bridge.show()

}
