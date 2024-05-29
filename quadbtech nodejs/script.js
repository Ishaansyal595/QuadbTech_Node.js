document.querySelector(".form-switch").addEventListener("click", () => {
  const container = document.querySelector("#container");
  if (container.style.backgroundColor === "rgb(25, 29, 40)") {
    container.style.backgroundColor = "white";
    container.style.color = "black";
  } else {
    container.style.backgroundColor = "#191d28";
    container.style.color = "white";
  }
});
