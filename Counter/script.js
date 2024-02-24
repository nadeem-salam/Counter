let num = 0;

const value = document.querySelector('.value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
btn.addEventListener("click", (e) => {

  const style = e.currentTarget.classList;

  if (style.contains("btn-danger")){
    num--;
  }
  else if(style.contains("btn-success")){
    num++;
  }
  else if(style.contains("btn-secondary")){
    num=0;
  }
  value.textContent = num;
  if (num>0){
    value.style.color = "green"
}
else if (num<0){
    value.style.color = "red"
}
else{
    value.style.color = "black"
}
})
})