const bgColor = document.getElementsByClassName('body')[0];
const img = document.getElementById('figure');
const text = document.querySelector('.status');
const text2 = document.querySelector('.age');

function whatChange(color, path, status, age){
  bgColor.style.backgroundColor = `${color}`
  img.setAttribute('src', `${path}`)
  text.innerHTML = `<strong>Estágio</strong>: ${status}`
  text2.innerHTML = `<strong>Idade</strong>: ${age}`
}

function changeAvatar(){

  if (img.src.match("./images/monica_baby.png")) {

    whatChange('#ff5a5f', './images/monica.png', 'criança', '7 anos' )
   
  } 

  else if (img.src.match('./images/monica.png')){

    whatChange("#f06449", './images/monica_jovem.png', 'jovem', '16 anos' )
  
  } 
  
  else if (img.src.match('./images/monica_jovem.png')){

    whatChange('#fe9ac7', './images/monica_baby.png', 'bebê', '1 ano' )
  } 

}
