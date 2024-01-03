const button= document.querySelector(".btn");
button.addEventListener("click", (evt)=>{
  evt.preventDefault()
  let points = 0
  const show=document.querySelector("#disp")
  if(document.querySelector("#answer1").checked){
    points++
  }
  if (document.querySelector("#answer2").checked){
    points++
  }
  if (document.querySelector("#answer3").checked){
    points++
  }
  if (document.querySelector("#answer4").checked){
    points++
  }
  if (document.querySelector("#answer5").checked){
    points++
  }
  show.textContent= "Ваши баллы: "+ points;



})
