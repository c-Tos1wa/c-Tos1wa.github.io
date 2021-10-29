const bgColor = document.getElementsByClassName('body')[0];
const img = document.getElementById('figure');
const text = document.querySelector('.status');
const text2 = document.querySelector('.age');


function changeAvatar(){

  if (img.src.match("./images/monica_baby.png")) {
    bgColor.style.backgroundColor = '#ff5a5f';
    img.setAttribute('src', './images/monica.png');
    text.innerHTML = '<strong>Estágio</strong>: criança';
    text2.innerHTML = '<strong>Idade</strong>: 7 anos'
  } 

  else if (img.src.match('./images/monica.png')){
    bgColor.style.backgroundColor = "#e40043";  
    img.setAttribute('src', './images/monica_jovem.png');
    text.innerHTML = '<strong>Estágio</strong>: jovem';
    text2.innerHTML = '<strong>Idade</strong>: 16 anos';
  } 
  
  else if (img.src.match('./images/monica_jovem.png')){
    bgColor.style.backgroundColor = '#fe9ac7';
    img.setAttribute('src', './images/monica_baby.png');
    text.innerHTML = '<strong>Estágio</strong>: bebê';
    text2.innerHTML = '<strong>Idade</strong>: 1 ano';
  } 

}
