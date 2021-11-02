let addbtn = document.getElementById("add");
var input = document.getElementById("input");
var todo = document.getElementById("todo");

addbtn.addEventListener("click", function () {
  var para = document.createElement("p");
  para.innerText = input.value;
  para.classList.add("paragraph-styling");
  todo.appendChild(para);
  input.value = "";
  para.addEventListener("click", function () {
    para.style.textDecoration = "line-through";
  });
  para.addEventListener("dblclick", function () {
    todo.removeChild(para);
  });
});
