// Create map and sprites
//----------------------------------------------------------------------------------------------------------
tiles.setTilemap(tilemap`level2`)
let chest = sprites.create(assets.image`Chest`)
let mySprite = sprites.create(assets.image`FOX10`,SpriteKind.Player) //set img of player
let myEnemy = sprites.create(assets.image`Enemy1`,SpriteKind.Enemy) //set img of enemy
let myEnemy2 = sprites.create(assets.image`Enemy2`,SpriteKind.Enemy)
//arrow variables
let myEnemy3 = sprites.create(assets.image`Enemy2`,SpriteKind.Enemy)
            myEnemy3.setPosition(-410, -400)
let myEnemy4 = sprites.create(assets.image`Enemy2`,SpriteKind.Enemy)
            myEnemy4.setPosition(-410, -400)
let Projectile2 = SpriteKind.create()
let projectile= sprites.createProjectileFromSprite(assets.image`arrowNone`, mySprite, 0, 0)
let projectile2:Sprite= null;
let projectile3:Sprite = null;
let turrets:Sprite[] = []
turrets.push(sprites.create(assets.image`turret`));turrets[0].setPosition(151, 92)
turrets.push(sprites.create(assets.image`turret`));turrets[1].setPosition(199, 92)
turrets.push(sprites.create(assets.image`turret`));turrets[2].setPosition(247, 92)
turrets.push(sprites.create(assets.image`turret`));turrets[3].setPosition(295, 92)          
//----------------------------------------------------------------------------------------------------------

// Variables
//----------------------------------------------------------------------------------------------------------
let arrow = 2      //default value of arrow in inventory.
let addarrow = 0
let spawnEnemy2 = false
let enemyCase1 = false
let enemyCase2 = false
let button = false
let enemySpeed = 100
let enemy2Speed = 55 //enemy speed
let enemy3Speed = 90
let enemy4Speed = 30
let playerSpeed =75 //player speed
let arrowSpeed = 150
let arrowVX =0  //default direction of arrow
let arrowVY =0  //default direction of arrow
let openLoot = false
info.setLife(1)//set vlaue of life variable
//----------------------------------------------------------------------------------------------------------

// Positions - set default positions
//----------------------------------------------------------------------------------------------------------
mySprite.setPosition(45, 45) 
myEnemy.setPosition(40, 105)
chest.setPosition(392, 71)
myEnemy2.setPosition(40, 140)
//----------------------------------------------------------------------------------------------------------

// Flags and other
//----------------------------------------------------------------------------------------------------------
myEnemy2.setFlag(SpriteFlag.Invisible, true) //Set enemy invisible
myEnemy2.setFlag(SpriteFlag.BounceOnWall, false) //Enemy will bounce on wall
scene.cameraFollowSprite(mySprite) //Camera follow player // Player will stay in screen
mySprite.setFlag(SpriteFlag.StayInScreen, true) //Player will stay in screen
mySprite.setFlag(SpriteFlag.ShowPhysics, true) 
myEnemy.setFlag(SpriteFlag.BounceOnWall, true) //Enemy will bounce on wall
game.splash("Use A to shoot to direction you look") //This info will show at the start
controller.moveSprite(mySprite, playerSpeed, playerSpeed); //move with player
sprites.onDestroyed(SpriteKind.Player, function(sprite: Sprite) { //End game when player is out of lives
    game.over()
})
//----------------------------------------------------------------------------------------------------------

// Arrow function
//----------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------

// Turrets
//----------------------------------------------------------------------------------------------------------
game.onUpdateInterval(500, function() {
    if(button == true){
        turrets.forEach(function(turret: Sprite, index: number) {
            projectile2 = sprites.createProjectileFromSprite(assets.image`arrowDown`, turret, 0, playerSpeed)
            projectile2.setKind(Projectile2)
            projectile2.setVelocity(0, 200)
        }) 
    }
})
//----------------------------------------------------------------------------------------------------------

// Game update
//----------------------------------------------------------------------------------------------------------
game.onUpdate(function() {
    // Turret activation a deactivation
    //------------------------------------------------------------------------------------------------------
    if(mySprite.x >114 && mySprite.x < 120 && mySprite.y ==136){
        button = true;
    }
    if(mySprite.x >360 && mySprite.x < 365 && mySprite.y ==136){
        button = false;
    }
    //------------------------------------------------------------------------------------------------------

    // Set arrow as score
    //------------------------------------------------------------------------------------------------------
    info.setScore(arrow)
    //------------------------------------------------------------------------------------------------------

    // Projectile kill
    //------------------------------------------------------------------------------------------------------
    projectile.setFlag(SpriteFlag.DestroyOnWall, false) //Projectile will stuck in the wall
    projectile.setFlag(SpriteFlag.AutoDestroy, false) //Projectile will stuck in the wall
    //projectile2.setFlag(SpriteFlag.DestroyOnWall, false) //Projectile will stuck in the wall
    //projectile2.setFlag(SpriteFlag.AutoDestroy, false) //Projectile will stuck in the wall
    //projectile3.setFlag(SpriteFlag.DestroyOnWall, false) //Projectile will stuck in the wall
    //projectile3.setFlag(SpriteFlag.AutoDestroy, false) //Projectile will stuck in the wall
    //------------------------------------------------------------------------------------------------------

    // Enemy movement
    //------------------------------------------------------------------------------------------------------
    enemy1Movement() //Enemy1 route
    enemy2Movement() //Enemy2 route
    enemy3Movement() //Enemy3 route
    //------------------------------------------------------------------------------------------------------

    // Loot chest
    //------------------------------------------------------------------------------------------------------
    if(mySprite.overlapsWith(chest)){
        chest.setImage(assets.image`Chest02`) //Chest will change image to open chest
        if(openLoot == false){ //If chest is lock player will be able to open it
            chest.startEffect(effects.blizzard,1500) //Effect after open chest
            music.baDing.play() //Play sound effect
            chest.say("+5 arrows", 2000) // Message
            arrow = arrow +5 //Add 5 arrows to your inventory
            openLoot = true //Variable is checking if player opens chest during playing
        }
    } 
    //------------------------------------------------------------------------------------------------------

    // Projectile
    //------------------------------------------------------------------------------------------------------
    if(mySprite.vx != 0){
        arrowVX = positionX()
        arrowVY = 0;
        }
    if(mySprite.vy != 0){
        arrowVY = positionY()
        arrowVX = 0;
        }
    //------------------------------------------------------------------------------------------------------
})
//----------------------------------------------------------------------------------------------------------

// Arrow kills enemy ^^
//----------------------------------------------------------------------------------------------------------
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
        if (projectile.vx != 0 || projectile.vy != 0){
            otherSprite.destroy(effects.halo,100)
            music.bigCrash.play()
            }   
        })
//----------------------------------------------------------------------------------------------------------

// Enemy kills player :)
//----------------------------------------------------------------------------------------------------------
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
            info.changeLifeBy(-1)
            music.powerDown.play()
            otherSprite.destroy(effects.ashes,100)
        })
//----------------------------------------------------------------------------------------------------------

// Turret kills player
//------------------------------------------------------------------------------------------------------
sprites.onOverlap(SpriteKind.Player,Projectile2 , function(sprite: Sprite, otherSprite: Sprite) {
        if (otherSprite.vx != 0 || otherSprite.vy != 0){
            console.log("help pls")
            info.changeLifeBy(-1)
            otherSprite.destroy(effects.halo,100)
            music.bigCrash.play()
            }   
        })
//------------------------------------------------------------------------------------------------------

// Player direction
//----------------------------------------------------------------------------------------------------------
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
//----------------------------------------------------------------------------------------------------------

// Arrow shoot
//----------------------------------------------------------------------------------------------------------
controller.A.onEvent(ControllerButtonEvent.Pressed, function() {
    if (arrowVX== playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
        projectile = sprites.createProjectileFromSprite(assets.image`arrowRight`, mySprite, playerSpeed, 0)
        projectile.setVelocity(arrowSpeed, 0)
    }
    if (arrowVX== -playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
        projectile = sprites.createProjectileFromSprite(assets.image`arrowLeft`, mySprite, -playerSpeed, 0)
        projectile.setVelocity(-arrowSpeed, 0)
    }  
     if (arrowVY== playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
    projectile = sprites.createProjectileFromSprite(assets.image`arrowDown`, mySprite, 0, playerSpeed)
    projectile.setVelocity(0, arrowSpeed)
    }
    if (arrowVY== -playerSpeed && arrow > 0) {
        music.zapped.play()
        arrow = arrow - 1 
        projectile =sprites.createProjectileFromSprite(assets.image`arrowUp`, mySprite, 0, -playerSpeed)
        projectile.setVelocity(0, -arrowSpeed)  
        }  
    })
//----------------------------------------------------------------------------------------------------------