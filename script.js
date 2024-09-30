let List = document.querySelector(".List");
let options = document.getElementsByClassName("option");
let selectField = document.querySelector(".text");
let arraydown = document.querySelector(".arrowDown");
options = Array.from(options);
console.log(options);
options.forEach((option) => {
  option.onclick = (e) => {
    selectField.innerHTML = option.textContent;
    List.classList.toggle("hide");
    arraydown.classList.toggle("rotate");
  };
});
