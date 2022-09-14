const container = document.querySelector(".container");
const cloneContainer = container.cloneNode(true);
cloneContainer.classList.add("duplicate");
container.append(cloneContainer);

const runAnimation = () => {
  container.classList.add("slide", "no-load");
  const rows = container.querySelectorAll(".row");

  const lastRow = rows[rows.length - 1];
  lastRow.addEventListener("animationend", () => {
    container.classList.remove("slide");
  });
};

container.addEventListener("click", () => {
  container.addEventListener("mousemove", () => runAnimation(), { once: true });
});
