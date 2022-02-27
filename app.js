const $form = document.querySelector("form");
const $input = document.querySelectorAll(".input");
const $button = document.querySelector("button");
const answer = "apple";

function onSubmit(e) {
  e.preventDefault();
  for(let i = 0; i < 5; i++){
    const value = e.target.children[i].value;
    if(value === answer[i]){
      $input[i].style.backgroundColor = "lightgreen";
    } else if(answer.includes(value)){
      $input[i].style.backgroundColor = "lightpink";
    } else {
      $input[i].style.backgroundColor = "lightgray";
    }
  }
  const template = 
  `<div>
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
    <input class="input">
  </div>`;
  document.querySelector("body").insertAdjacentHTML(behin)
}
$form.addEventListener("submit", onSubmit);