function arrowFnc(){
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
}
