let acc = document.getElementsByClassName("accordion");
let question = document.getElementsByClassName("question");
let answer = document.getElementsByClassName("answer");
let arrow = document.getElementsByClassName("arrow");

for (var i = 0; i < question.length; i++) {
  question[i].onclick = function () {
    var setClasses = !this.classList.contains("active");
    setClass(question, "active", "remove");
    setClass(answer, "show", "remove");
    setClass(arrow, "arrow-up", "remove");

    if (setClasses) {
      this.classList.toggle("active");
      this.nextElementSibling.classList.toggle("show");
      this.firstElementChild.classList.toggle("arrow-up");
    }
  };
}

function setClass(els, className, fnName) {
  for (var i = 0; i < els.length; i++) {
    els[i].classList[fnName](className);
  }
}
