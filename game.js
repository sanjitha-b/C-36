class Game {
constructor(){}
readstate(){
    var gamestateRef = database.ref("gamestate")
    gamestateRef.on("value", function(data){
gamestate = data.val()


    })
}
update(state){
database.ref("/").update({
    gamestate:state
})

}

}