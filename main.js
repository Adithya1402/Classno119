function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
}

function clearCanvas() {
    background("white");
}
function preload(){
    classifier = ml5.imageclassifier('DoodleNet');
}

function draw(){
}   
  // Set Stroke weight to 13
   strokeWeight(13);
  //Set stroke color to 0
   stroke(0);
   //if mouse is pressed draw line between previous and current mouse positions
   if(mouseIsPressed) {
    line(pmouseX,pmouseY, mouseX,mouseY);
   }

   function classifyCanvas(){
    classifier.classify(canvas, gotResult);
   }
 
   function gotResult(error, results) {
  if(error) {
    console.error(error);
}
  console.log(results);
  document.getElementById('label').innerHTML = 'Label:' + results[0].label;
  
  document.getElementById('confidence').innerHTML = 'Confidence' + Math.round(results[0].confidence * 100) + '%';

  utterThis - new SpeechSynthesisisUtterance(results[0].label);
  synth.speak(utterThis);
   }