const allTechs = document.querySelectorAll(".tech");

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
