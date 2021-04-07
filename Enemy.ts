function enemy1Movement(){
    if(myEnemy.x > 39 && myEnemy.x < 41){
    myEnemy.setVelocity(enemySpeed,0)
    }
    if(myEnemy.x > 109 && myEnemy.x < 111){
    myEnemy.setVelocity(-enemySpeed,0)
    }
}

function enemy2Movement(){
        if(mySprite.x >69 && mySprite.x < 76 && mySprite.y >169 && mySprite.x < 181){
        myEnemy2.setFlag(SpriteFlag.Invisible, false)
        spawnEnemy2 = true
    }
    if(spawnEnemy2 == true){
        if(myEnemy2.x==40 && myEnemy2.y ==140 ){
        console.log("jedna")
        myEnemy2.setVelocity(0, enemy2Speed)
        }
        else if(myEnemy2.y < 201 && myEnemy2.y > 199.99 && myEnemy2.x ==40 ){
        console.log("jedna")
        myEnemy2.setVelocity(enemy2Speed, 0)
        }
        else if(mySprite.x > 69 && mySprite.x < 75 && mySprite.y < 184 && mySprite.y > 39 ){
        enemyCase1 = true 
        }
        else{
            enemyCase1 = false 
        }
        if(myEnemy2.x < 75 && myEnemy2.x > 71.99 && myEnemy2.y == 200 && enemyCase1 == true){
        myEnemy2.setVelocity(0, -enemy2Speed) 
        }

         if(myEnemy2.x < 75 && myEnemy2.x > 71.99 && myEnemy2.y > 89.99 && myEnemy2.y < 103.99 && myEnemy2.y > 39.99){
             myEnemy2.follow(mySprite,65)
        }

        else if(myEnemy2.x < 107 && myEnemy2.x > 102.99&& enemyCase1 == false){
        myEnemy2.setVelocity(0, -enemy2Speed) 
        }
        if(myEnemy2.x < 107 && myEnemy2.x > 102.99 && myEnemy2.y == 136 && enemyCase1 == false){
        myEnemy2.setVelocity(enemy2Speed,0) 
        }
        else if(myEnemy2.x > 140 && myEnemy2.y < 141 && enemyCase1 == false){
        myEnemy2.setVelocity(0,0)
        spawnEnemy2 = false 
        myEnemy2.follow(mySprite,69)
        
        }
        }
}

function enemy3Movement(){
    if(mySprite.y ==40 && mySprite.x > 435.99 && mySprite.x < 442.99 && openLoot == true){
            myEnemy3.setPosition(395, 40)
            myEnemy3.follow(mySprite,enemy3Speed)
            myEnemy4.setPosition(441, 136)
            myEnemy4.follow(mySprite,enemy4Speed)
        }
}

function enemy5Movement(){
    if(spawnEnemy5 == true && end !=6){
        for (let i = 0; i < 6; i++) {
            let myEnemy5 = sprites.create(assets.image`Enemy2`,SpriteKind.Enemy)
            myEnemy5.setPosition(x, y)
            x +=50;
            y -= 30;
            myEnemy5.follow(mySprite,45)
            end+=1
            }
    }
}

function enemy6Movement(){
   if(myEnemy6.isHittingTile(CollisionDirection.Bottom)){
    myEnemy6.setVelocity(0, -enemy6Speed)
    }
    if(myEnemy6.isHittingTile(CollisionDirection.Top)){
        myEnemy6.setVelocity(0, enemy6Speed)
    }
}
