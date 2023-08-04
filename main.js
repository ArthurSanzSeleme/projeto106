function startClassification()
{
  navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Gd-gMUaOJ/model.json', modelReady);
}

function modelReady(){
  classifier.classify( gotResults);
}
function gotResults( error, results) {
  if (error){
   console.error(error);  
  }else {
  console.log(results);
  random_number_r = Math.floor(Math.random() * 255)+ 1;
  random_number_g = Math.floor(Math.random() * 255)+ 1;
  random_number_b = Math.floor(Math.random() * 255)+ 1;

  document.getElementById("result_label").innerHTML = 'posso ouvir-'+
  results[0].label;
  document.getElementById("result_confidence").innerHTML = 'presição -'+
  (results[0].confidence*100).toFixed(2)+" %";
  document.getElementById("result_label").style.color = "rgb("
  +random_number_r+","+random_number_g+","+random_number_r+"("
  document.getElementById("result_confidence").style.color = "rgb("
  +random_number_r+","+random_number_g+","+random_number_r+"("

  img = document.getElementById('alien1')
  img1 = document.getElementById('alien2')
  img2 = document.getElementById('alien3')
  img3 = document.getElementById('alien4')

  if(results[0].label == "Palmas") {
    img.src = '1.png';
     img.src = '2.png';
     img.src = '3.gif';
     img.src = '4.png';;
  }
 else if(results[0].label == "assobiu") {
  img.src = '1.png';
  img.src = '2.png';
  img.src = '3.gif';
  img.src = '4.png';
  }
 else  if(results[0].label == "estalo") {
     img.src = '1.png';
     img.src = '2.png';
     img.src = '3.gif';
     img.src = '4.png';
  }else{
     img.src = '1.png';
     img.src = '2.png';
     img.src = '3.png';
     img.src = '4.gif';
  }
  }
}