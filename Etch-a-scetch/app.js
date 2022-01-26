
let containerSide = "300px",
    type = "gradient",
    box = document.getElementsByClassName("box"),
    table = document.querySelector(".table"),
    gradient = document.querySelector("#gradient"),
    random = document.querySelector("#random"),
    reset = document.querySelector("#reset"),
    size = document.querySelector("#size"),
    boxSide = 16;

table.style.width = containerSide;

init();

reset.addEventListener("click", function() {
  resetGrid(size.value);
});

random.addEventListener("click", function() {
  type = "random";
  this.classList.add("active");
  gradient.classList.remove("active");
});

gradient.addEventListener("click", function() {
  type = "gradient";
  this.classList.add("active");
  random.classList.remove("active");
});

size.addEventListener("input", function(e) {
  if (e.target.value !== 16) {
    resetGrid(e.target.value);
  }
});

function init() {
  for(let i=0; i<boxSide*boxSide; i++) {
    createDiv();
  }
  main();
}

function resetGrid(sidee) {
  boxSide = sidee;
  table.innerHTML = "";
  init();
  size.value = sidee;
}

function main() {
  for (let i=0; i<box.length; i++) {
    box[i].addEventListener("mouseover", function() {
      if (type === "random") {
        white(this);
      }
      else {
        black(this);
      }
    });
  }
}

function black(event) {
  event.style.background = "#000";
  event.style.opacity = 1;
}

function white(event) {
  event.style.opacity = 1;
  event.style.background = "#fff";
}

function createDiv() {
  let divElt = document.createElement("div");
  divElt.classList.add("box");
  divElt.style.height = table.offsetWidth / boxSide + "px";
  divElt.style.width = table.offsetWidth / boxSide + "px";
  divElt.style.opacity = 0.1;
  table.appendChild(divElt);
}

