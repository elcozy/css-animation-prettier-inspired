const pArr = [
  [3, 2, 7, 6, 10, 6],
  [4, 3, 3, { size: 14, bg: "blue" }, 6, 4, 6],
  [3, 4, { size: 4, bg: "red" }, { size: 12, bg: "yellow" }, 4, 6],
  [
    4,
    4,
    6,
    { size: 8, bg: "blue" },
    { size: 7, bg: "purple" },
    { size: 2, bg: "blue" },
    8,
    8,
  ],
  [6, 2, 4, 2, { size: 6, bg: "yellow" }, 6, { size: 6, bg: "red" }, 2, 14],
  [7, 6, { size: 6, bg: "purple" }, 6, { size: 6, bg: "yellow" }, 14],
  [
    8,
    7,
    2,
    { size: 3, bg: "red" },
    { size: 5, bg: "yellow" },
    { size: 9, bg: "blue" },
    10,
    2,
    6,
  ],
  [
    6,
    8,
    4,
    { size: 6, bg: "blue" },
    { size: 6, bg: "red" },
    { size: 4, bg: "purple" },
    7,
    14,
  ],
  [6, 8, { size: 2, bg: "purple" }, { size: 12, bg: "yellow" }, 6, 8, 4],
  [5, 2, 3, { size: 7, bg: "purple" }, 10, 14],
  [8, { size: 3, bg: "blue" }, { size: 3, bg: "yellow" }, 8, 12],
  [5, 3, 2, { size: 7, bg: "blue" }, 14, 10],
  [8, { size: 2, bg: "red" }, { size: 4, bg: "purple" }, 8, 12],
  [5, 3, 2, { size: 7, bg: "red" }, 14, 10],
  [8, 12, 8, 6],
];
const rArr = [
  [3, 2, 7, 6, 10, 6],
  [4, 3, 3, { size: 14, bg: "blue" }, 6, 4, 6],
  [3, 4, { size: 4, bg: "red" }, { size: 12, bg: "yellow" }, 4, 6],
  [
    4,
    4,
    6,
    { size: 8, bg: "blue" },
    { size: 7, bg: "purple" },
    { size: 2, bg: "blue" },
    8,
    8,
  ],
  [6, 2, 4, 2, { size: 6, bg: "yellow" }, 6, { size: 6, bg: "red" }, 2, 14],
  [7, 6, { size: 6, bg: "purple" }, 6, { size: 6, bg: "yellow" }, 14],
  [
    8,
    7,
    2,
    { size: 3, bg: "red" },
    { size: 5, bg: "yellow" },
    { size: 9, bg: "blue" },
    10,
    2,
    6,
  ],
  [
    6,
    8,
    4,
    { size: 6, bg: "blue" },
    { size: 6, bg: "red" },
    { size: 4, bg: "purple" },
    7,
    14,
  ],
  [6, 8, { size: 2, bg: "purple" }, { size: 8, bg: "yellow" }, 8, 8, 6],
  [5, 2, 3, { size: 7, bg: "purple" }, 3, { size: 7, bg: "red" }, 14],
  [
    8,
    { size: 3, bg: "blue" },
    { size: 3, bg: "yellow" },
    4,
    { size: 7, bg: "purple" },
    9,
  ],
  [
    5,
    3,
    2,
    { size: 7, bg: "blue" },
    5,
    { size: 3, bg: "yellow" },
    { size: 3, bg: "red" },
    12,
  ],
  [
    8,
    { size: 2, bg: "red" },
    { size: 4, bg: "purple" },
    6,
    { size: 7, bg: "blue" },
    7,
  ],
  [5, 3, 2, { size: 7, bg: "red" }, 6, { size: 7, bg: "purple" }, 11],
  [8, 12, 8, 6],
];
const rArr2 = [
  [3, 2, 7, 6, 10, 6],
  [4, 3, 3, { size: 14, bg: "blue" }, 6, 4, 6],
  [4, 3, 3, { size: 4, bg: "red" }, { size: 12, bg: "yellow" }, 4, 6],
  [
    4,
    3,
    3,
    { size: 8, bg: "blue" },
    { size: 7, bg: "purple" },
    { size: 2, bg: "blue" },
    8,
    8,
  ],
  [4, 3, 3, { size: 6, bg: "yellow" }, 6, { size: 6, bg: "red" }, 2, 14],
  [4, 3, 3, { size: 6, bg: "purple" }, 6, { size: 6, bg: "yellow" }, 14],
  [
    4,
    3,
    3,
    { size: 3, bg: "red" },
    { size: 5, bg: "yellow" },
    { size: 9, bg: "blue" },
    10,
    2,
    6,
  ],
  [
    5,
    3,
    2,
    { size: 6, bg: "blue" },
    { size: 6, bg: "red" },
    { size: 4, bg: "purple" },
    7,
    14,
  ],
  [4, 3, 3, { size: 2, bg: "purple" }, { size: 8, bg: "yellow" }, 8, 8, 6],
  [4, 3, 3, { size: 7, bg: "purple" }, 3, { size: 7, bg: "red" }, 14],
  [
    4,
    3,
    3,
    { size: 3, bg: "blue" },
    { size: 3, bg: "yellow" },
    4,
    { size: 7, bg: "purple" },
    9,
  ],
  [
    4,
    3,
    3,
    { size: 7, bg: "blue" },
    5,
    { size: 3, bg: "yellow" },
    { size: 3, bg: "red" },
    12,
  ],
  [
    4,
    3,
    3,
    { size: 2, bg: "red" },
    { size: 4, bg: "purple" },
    6,
    { size: 7, bg: "blue" },
    7,
  ],
  [4, 3, 3, { size: 7, bg: "red" }, 6, { size: 7, bg: "purple" }, 11],
  [8, 12, 8, 6],
];
const runAnimation = (container, rowName = "row") => {
  container.classList.add("slide", "no-load");
  const rows = container.querySelectorAll(`.${rowName}`);

  const lastRow = rows[rows.length - 1];
  lastRow.addEventListener("animationend", () => {
    container.classList.remove("slide");
  });
};

const mainParent = document.getElementById("animated-texts");

const createHTMLTags = (array, id = "letter") => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "container";
  mainContainer.id = id;

  //   { size: , bg: "" }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const rowDiv = document.createElement("div");
    rowDiv.className = "row";

    for (let j = 0; j < element.length; j++) {
      const elementInner = element[j];
      let color = "";
      let size = "";

      if (isNaN(elementInner)) {
        color = elementInner.bg;
        size = elementInner.size;
      } else {
        size = elementInner;
      }

      const cellDiv = document.createElement("div");
      cellDiv.className = `cell size-${size} ${color}`;

      rowDiv.appendChild(cellDiv);
    }
    mainContainer.appendChild(rowDiv);
    mainParent.appendChild(mainContainer);
  }

  const container = document.querySelector(`#${id}`);
  const cloneContainer = container.cloneNode(true);
  cloneContainer.classList.add("duplicate");
  container.append(cloneContainer);

  container.addEventListener("click", () => {
    // runAnimation(container);
    container.addEventListener("mousemove", () => runAnimation(container), {
      once: true,
    }); // triggers when the mouse is clicked and moved
  });
};

window.onload = createHTMLTags(pArr, "pLetter");
window.onload = createHTMLTags(rArr, "rLetter");

const createHTMLTags2 = (array, id = "letter") => {
  const mainContainer = document.createElement("div");
  mainContainer.className = "container";
  mainContainer.id = id;

  //   { size: , bg: "" }

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const rowDiv = document.createElement("div");
    rowDiv.className = "row2";

    for (let j = 0; j < element.length; j++) {
      const elementInner = element[j];
      let color = "";
      let size = "";

      if (isNaN(elementInner)) {
        color = elementInner.bg;
        size = elementInner.size;
      } else {
        size = elementInner;
      }

      const cellDiv = document.createElement("div");
      cellDiv.className = `cell size-${size} ${color}`;

      rowDiv.appendChild(cellDiv);
    }
    mainContainer.appendChild(rowDiv);
    mainParent.appendChild(mainContainer);
  }

  const container = document.querySelector(`#${id}`);
  const cloneContainer = container.cloneNode(true);
  cloneContainer.classList.add("duplicate");
  container.append(cloneContainer);

  container.addEventListener("click", () => {
    // runAnimation(container);
    container.addEventListener(
      "mousemove",
      () => runAnimation(container, "row2"),
      {
        once: true,
      }
    ); // triggers when the mouse is clicked and moved
  });
};
window.onload = createHTMLTags2(rArr2, "rLetters");
