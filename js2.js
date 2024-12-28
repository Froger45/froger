function pause_game(){
function draw() {
ctx.drawImage(back, 0, 0)
ctx.drawImage(bird , xPos, yPos) 
if (yPos + bird.height >= canvas.height-road.height) {
	reload()
}

velY += gravity
yPos += velY  
for(let i = 0; i <pipe.length; i++){
	ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
	ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y+pipeUp.height+gap)
	pipe[i].x -=2
	if(pipe[i].x == 80){
		pipe.push({
			x : canvas.width,
			y : Math.floor(Math.random()*pipeUp.height)-pipeUp.height
		})
	}

if (xPos+bird.width >= pipe[i].x && xPos<= pipe[i].x+pipeUp.width 	&&
	(yPos<=pipe[i].y+pipeUp.height || yPos+bird.height >= pipe[i].y+
		pipeUp.height + gap)){reload()}
	if (pipe[i].x==0) {
		score++
		score_audio.play()
	}
	ctx.drawImage(road , 0 , canvas.height-road.height)
	
}
ctx.drawImage(road , 0 , canvas.height-road.height)
score_text.innerHTML = `SCORE: ${score}`
	best_score_text.innerHTML = "BEST SCORE:" + best_score
	}