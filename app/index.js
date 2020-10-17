let question = document.getElementsByClassName("question");

for (let i = 0; i < question.length; i++) {
  question[i].addEventListener("click", function () {
    // console.log(this.nextElementSibling);
    let answer = this.nextElementSibling;
    let arrow = this.firstElementChild;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
      arrow.style.transform = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
      arrow.style.transform = "rotateZ(180deg)";
    }
  });
}
