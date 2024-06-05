const html5 = document.querySelector(".html5");
const css = document.querySelector(".css");
const javascript = document.querySelector(".javascript");
const sass = document.querySelector(".sass");
const svg = document.querySelector(".svg");
const go = document.querySelector(".go");
const cs = document.querySelector(".cs");
const postgresql = document.querySelector(".postgresql");
const grpc = document.querySelector(".grpc");
const c = document.querySelector(".c");
const cpp = document.querySelector(".cpp");
const git = document.querySelector(".git");
const docker = document.querySelector(".docker");

const allTechs = document.querySelectorAll(".tech");

// html5.addEventListener("click", () => {
//   const lastElement = html5.nextElementSibling;

//   if (lastElement.classList.contains("hide")) {
//     lastElement.classList.add("show");
//     lastElement.classList.remove("hide");
//   } else {
//     lastElement.classList.add("hide");
//     lastElement.classList.remove("show");
//   }
// });

for (let i = 0; i < allTechs.length; i++) {
  const element = allTechs[i];

  element.addEventListener("click", () => {
    const lastElement = element.nextElementSibling;
    if (lastElement.classList.contains("hide")) {
      lastElement.classList.add("show");
      lastElement.classList.remove("hide");
    } else {
      lastElement.classList.add("hide");
      lastElement.classList.remove("show");
    }
  });
}
