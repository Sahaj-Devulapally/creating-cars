class Form{

constructor(){
this.input=createInput().attribute("placeholder","Name")
this.button=createButton("Play")
this.greeting=createElement("h3")
this.title=createElement("h1")
}
display(){

this.title.html("Car Racing Game")
this.title.position(displayWidth/2,0)
this.input.position(displayWidth/2-100,displayHeight/2)
this.button.position(displayWidth/2-100,displayHeight/2+100)
this.button.mousePressed(()=>{
this.input.hide()
this.button.hide()
player.name=this.input.value()
playerCount++
player.index=playerCount
player.update()
player.updateCount(playerCount)
this.greeting.html("Hello "+ player.name)
this.greeting.position(displayWidth/2,displayHeight/2)
})
}
hide(){
this.greeting.hide()
this.input.hide()
this.button.hide()
this.title.hide()
}






}