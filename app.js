// 정답 단어 랜덤 배정
// input칸 하나에 알파벳 하나
// input 커서 자동 이동

const $form = document.querySelector("form");
const $input = document.querySelectorAll(".input");
const $button = document.querySelector("button");
const array = ["clock", "enjoy", "fresh", "photo", "smart"];
const answer = array[Math.floor(Math.random() * array.length)];

console.log(answer);

function moveFocus() {
  for(let i = 0; i < 4; i++){
    $input[i].addEventListener("keyup", function(e){
      if($input[i].value.length === 1){
        $input[i + 1].focus();
        return;
      };
    })
  }
}
moveFocus();

function makeNew() {
  const template = `
  <form class="form">
    <input class="input" type="text" maxlength="1" required>
    <input class="input" type="text" maxlength="1" required>
    <input class="input" type="text" maxlength="1" required>
    <input class="input" type="text" maxlength="1" required>
    <input class="input" type="text" maxlength="1" required>
    <button>제출</button>
  </form>`;
  document.querySelector("body").insertAdjacentHTML("beforeend", template);
}

function onSubmit(e) {
  e.preventDefault();
  for(let i = 0; i < $input.length; i++){
    const value = e.target.children[i].value;
    if(value === answer[i]){
      $input[i].style.backgroundColor = "lightgreen";
    } else if(answer.includes(value)){
      $input[i].style.backgroundColor = "lightpink";
    } else {
      $input[i].style.backgroundColor = "lightgray";
    }
  }
  // makeNew();
}
$form.addEventListener("submit", onSubmit);