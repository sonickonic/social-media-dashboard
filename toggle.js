const checkbox = document.querySelector(".checkbox");
console.log(checkbox);

checkbox.addEventListener("change", function () {
  if (this.checked) {
    transition();
    document.documentElement.setAttribute("data-theme", "light");
  } else {
    transition();
    document.documentElement.setAttribute("data-theme", "dark");
  }
});

const transition = () => {
  document.documentElement.classList.add("transition");
  window.setTimeout(() => {
    document.documentElement.classList.remove("transition");
  }, 1000);
};
