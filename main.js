function start()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
  classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/wmkI6B45J/model.json', modelReady);
}

function modelReady(){
  classifier.classify(gotResults);
}

bark = 0;
meow = 0;
roar = 0;
moo = 0;

function gotResults(error, results) {
  if(error) {
    console.error(error);
  } else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'Detected voice is of  - '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Detected Dog - '+bark+ ' Detected Cat - '+meow;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")";

img = document.getElementById("animal_picture");

if (results[0].label = "barkin'") {
img.src='bark.gif';
bark = bark + 1;
} 
 else if (results[0].label == "meowing") {
  img.src = 'meow.gif';
  meow = meow + 1;
  }
  else if (results[0].label == "roar") {
    img.src = '';
    roar = roar + 1;
    }
    else if (results[0].label == "mooing") {
      img.src = 'moo.gif';
      moo = moo + 1;
      }
}}