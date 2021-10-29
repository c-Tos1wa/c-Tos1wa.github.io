const bgColor = document.getElementsByClassName('body')[0];
const img = document.getElementById('figure');
const text = document.querySelector('.status').value;


function changeAvatar(){
  bgColor.style.backgroundColor = "#e40043";
  
  img.setAttribute('src', './images/monica_jovem.png');
  
  text.innerHTML = "Estágio: Baby";
}
