class Slingshot{
    constructor(bodyA, bodyB){
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness : 0.01,
            length : 5
        }
    this.chain = Constraint.create(options);
    World.add(world, this.chain);
}

draw() {
    strokeWeight(10);
   // line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y)
}
}