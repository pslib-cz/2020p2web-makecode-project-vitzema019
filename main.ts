tiles.setTilemap(tilemap`level2`)
let chest = sprites.create(img`
    . . b b b b b b b b b b b b . .
    . b e 4 4 4 4 4 4 4 4 4 4 e b .
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
    b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
    b e e 4 4 4 4 4 4 4 4 4 4 e e b
    b e e e e e e e e e e e e e e b
    b e e e e e e e e e e e e e e b
    b b b b b b b d d b b b b b b b
    c b b b b b b c c b b b b b b c
    c c c c c c b c c b c c c c c c
    b e e e e e c b b c e e e e e b
    b e e e e e e e e e e e e e e b
    b c e e e e e e e e e e e e c b
    b b b b b b b b b b b b b b b b
    . b b . . . . . . . . . . b b .
`)
let mySprite = sprites.create(assets.image`FOX10`,SpriteKind.Player) //set img of player

let myEnemy = sprites.create(img`
    ........................
    ........................
    ........................
    ........................
    ..........ffff..........
    ........ff1111ff........
    .......fb111111bf.......
    .......f11111111f.......
    ......fd111111111f......
    ......fd11111111df......
    ......fd11111111df......
    ......fcdd1111ddcff.....
    .......fbcf11fcbfbbf....
    .......ffbdb1bdffff.....
    ........fcbfbfdf........
    ........ffffffff........
    ......ffffffffff........
    .....fcb1bcffff.........
    ......ffbff.............
    ........................
    ........................
    ........................
    ........................
    ........................
`,SpriteKind.Enemy) //set img of enemy
let myEnemy2 = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`,SpriteKind.Enemy)
//arrow variables
let myEnemy3 = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
            `,SpriteKind.Enemy)
            myEnemy3.setPosition(-410, -400)
//------------------------------------------------------
let arrow = 1      //default value of arrow in inventory.
let addarrow = 0
let spawnEnemy2 = false
let enemyCase1 = false
let enemyCase2 = false
let enemySpeed2 = 65 //enemy speed
let playerSpeed =75 //player speed
let arrowVX =playerSpeed  //default direction of arrow
let arrowVY =-playerSpeed //default direction of arrow
let enemySpeed = 100
let openLoot = false
//-------------------------------------------------------

mySprite.setPosition(45, 45) //set default position of player
myEnemy.setPosition(40, 105)
chest.setPosition(392, 71)
myEnemy2.setPosition(40, 140)

myEnemy2.setFlag(SpriteFlag.Invisible, true)
myEnemy2.setFlag(SpriteFlag.BounceOnWall, false)
scene.cameraFollowSprite(mySprite) //camera follow player
mySprite.setStayInScreen(true)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
mySprite.setFlag(SpriteFlag.ShowPhysics, true)
myEnemy.setFlag(SpriteFlag.BounceOnWall, true)
game.splash("Use A or B to shoot")
controller.moveSprite(mySprite, playerSpeed, playerSpeed); //move with player

sprites.onDestroyed(SpriteKind.Player, function(sprite: Sprite) { 
    game.over()
})

// arrow function
//---------------------------------------------------------
function positionX (){ //set last vx before player stop
    let arrowVX
    arrowVX = mySprite.vx
    return arrowVX
}
function positionY(){ //set last vy before player stop
    let arrowVY
    arrowVY = mySprite.vy
    return arrowVY
}
//-----------------------------------------------------------


info.setLife(2)//set vlaue of life variable
//myEnemy.setVelocity(enemySpeed,0)//set speed of enemy

game.onUpdate(function() {
    //console.log(arrowVX)
    //console.log(myEnemy.x)
    //console.log(myEnemy2.y)
    //console.log(mySprite.y)

    //Projectile kill
    //----------------------------------------------------------------------------------------
    projectile.setFlag(SpriteFlag.DestroyOnWall, false)
    projectile.setFlag(SpriteFlag.AutoDestroy, false)
     //----------------------------------------------------------------------------------------

    //patrol enemy
    enemy1Movement()
    enemy2Movement()
    enemy3Movement()
    // loot 2/2
    //-------------------------------------
    if(mySprite.overlapsWith(chest)){
        
        chest.setImage(img`
            . b b b b b b b b b b b b b b .
            b e 4 4 4 4 4 4 4 4 4 4 4 4 4 b
            b e 4 4 4 4 4 4 4 4 4 4 4 4 e b
            b e e 4 4 4 4 4 4 4 4 4 4 e e b
            b b b b b b b d d b b b b b b b
            . b b b b b b c c b b b b b b .
            b c c c c c b c c b c c c c c b
            b c c c c c c b b c c c c c c b
            b c c c c c c c c c c c c c c b
            b c c c c c c c c c c c c c c b
            b b b b b b b b b b b b b b b b
            b e e e e e e e e e e e e e e b
            b e e e e e e e e e e e e e e b
            b c e e e e e e e e e e e e c b
            b b b b b b b b b b b b b b b b
            . b b . . . . . . . . . . b b .
        `)
        if(addarrow != 1){
            openLoot = true
            chest.startEffect(effects.blizzard,1500)
            music.baDing.play()
            chest.say("+5 arrows", 2000)
            arrow = arrow +5
            addarrow +=1
        }
    } 
    //-------------------------------------

    //Destroy enemy and -HP
    //-------------------------------------
   if (mySprite.overlapsWith(myEnemy)) {
    //console.log("why help")  
    info.changeLifeBy(-1)
    myEnemy.destroy(effects.ashes,100)  
    music.powerDown.play()
    } 
    //-------------------------------------

    info.setScore(arrow)//set arrow as score
    
    //Projectile
    //-----------------------------
    if(mySprite.vx != 0){
        arrowVX = positionX()
    }
    if(mySprite.vy != 0){
        arrowVY = positionY()
    }

})
//Arrow kill enemy ^^
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
        if (projectile.vx != 0 || projectile.vy != 0){
            otherSprite.destroy(effects.halo,100)
            music.bigCrash.play()
        }
            
        })
//Enemy kill player :)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
            info.changeLifeBy(-1)
            music.powerDown.play()
            myEnemy2.destroy(effects.ashes,100)
        })
        
//player direction
controller.right.onEvent(ControllerButtonEvent.Pressed, function() {
    mySprite.setImage(assets.image`FOX5`)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function() {
    mySprite.setImage(assets.image`FOX4`)

})
controller.up.onEvent(ControllerButtonEvent.Pressed, function() {
    mySprite.setImage(assets.image`FOX6`)

})
controller.down.onEvent(ControllerButtonEvent.Pressed, function() {
    mySprite.setImage(assets.image`FOX10`)    
})

//arrow shoot
let projectile= sprites.createProjectileFromSprite(img`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
`, mySprite, 0, 0)


controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    if (arrowVX== playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . f . . . . . . . . . . 1 . .
            . . . f e e e e e e e e e 1 1 .
            . . f . . . . . . . . . . 1 . .
            . . . . . . . . . . . . . . . .
        `, mySprite, playerSpeed, 0)
        projectile.setVelocity(110, 0)
    }
    if (arrowVX== -playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
        projectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . .
            . . 1 . . . . . . . . . . f . .
            . 1 1 e e e e e e e e e f . . .
            . . 1 . . . . . . . . . . f . .
            . . . . . . . . . . . . . . . .
        `, mySprite, -playerSpeed, 0)
        projectile.setVelocity(-110, 0)
    }
    if (arrowVY== 56.5625 && arrowVX == 56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`arrow01`, mySprite, 56, 56)
        }
    if (arrowVY== -56.5625 && arrowVX == 56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`arrow02`, mySprite, 56, -56) 
        }
    if (arrowVY== 56.5625 && arrowVX == -56.5625 && arrow > 0) {
            music.zapped.play()  
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`56 -56`, mySprite, -56, 56)
        }
    if (arrowVY== -56.5625 && arrowVX == -56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`--`, mySprite, -56, -56)
        }     
    })
controller.B.onEvent(ControllerButtonEvent.Pressed, function() {
    
           if (arrowVY== playerSpeed && arrow > 0) {
               music.zapped.play()
               arrow = arrow - 1 
        projectile = sprites.createProjectileFromSprite(img`
            . . . . .
            . . . . .
            . f . f .
            . . f . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . 1 1 1 .
            . . 1 . .
            . . . . .
        `, mySprite, 0, playerSpeed)
        projectile.setVelocity(0, 110)
    }
    if (arrowVY== -playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
        projectile = sprites.createProjectileFromSprite(img`
            . . . . .
            . . 1 . .
            . 1 1 1 .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . e . .
            . . f . .
            . f . f .
            . . . . .
            . . . . .
        `, mySprite, 0, -playerSpeed)
        projectile.setVelocity(0, -110)
    }
    if (arrowVY== 56.5625 && arrowVX == 56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`arrow0`, mySprite, 56, 56) 
        }
   if (arrowVY== -56.5625 && arrowVX == 56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`arrow02`, mySprite, 56, -56) 
        }
    if (arrowVY== 56.5625 && arrowVX == -56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`56 -0`, mySprite, -56, 56)
        }
    if (arrowVY== -56.5625 && arrowVX == -56.5625 && arrow > 0) {
            music.zapped.play()
            arrow = arrow - 1 
            projectile = sprites.createProjectileFromSprite(assets.image`--0`, mySprite, -56, -56)
        }            
    })
//-----------------------------------------------------------------