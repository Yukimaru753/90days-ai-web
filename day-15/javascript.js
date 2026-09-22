const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const content2 = document.createElement("p");
content2.classList.add("content");
content2.textContent = "Hey I’m red!";
content2.style.color = "red";

const content3 = document.createElement("h3");
content3.classList.add("content");
content3.textContent = "I’m a blue h3!";
content3.style.color = "blue";

const content4 = document.createElement("div");
content4.classList.add("content");
content4.style.backgroundColor = "pink";
content4.style.border = "1px solid black";

const content5 = document.createElement("h1");
content5.classList.add("content");
content5.textContent = "I’m in a div";
content4.appendChild(content5);

const content6 = document.createElement("p");
content6.classList.add("content");
content6.textContent = "ME TOO!";
content4.appendChild(content6);

container.appendChild(content);
container.appendChild(content2);
container.appendChild(content3);
container.appendChild(content4);

const btn = document.querySelector("#btn");
btn.onclick = () => alert("Hello World");
btn.addEventListener("click", () => console.log("A"));

btn.addEventListener("click", () => console.log("B"));

const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World!!!");
});

function alertFunction() {
  alert("YAY! YOU DID IT!");
}

const btn3 = document.querySelector("#btn3");
btn3.addEventListener("click", alertFunction);
btn3.addEventListener("click", function (e) {
  console.log(e.target);
  e.target.style.background = "blue"; 
});

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        alert(button.id);
    });
});