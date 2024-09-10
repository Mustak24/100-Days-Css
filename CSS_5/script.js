const graph = document.getElementById("graph");
const circle = graph.querySelectorAll("circle");
const infoBox = document
  .getElementsByClassName("graph")[0]
  .querySelectorAll("span");

for (let i = 0; i < circle.length; i++) {
  infoBox[i].style.top = `${circle[i].cy.animVal.value - 10}px`;
}

graph.addEventListener("mousemove", (e) => {
  try {
    for (let i in circle) {
      if (circle[i] == e.target) {
        infoBox[i].style.opacity = "1";
        infoBox[i].style.transform = "scale(1) translateY(-20px)";
      } else {
        infoBox[i].style.opacity = "0";
        infoBox[i].style.transform = "scale(0)";
      }
    }
  } catch (e) {
    console.log(e);
  }
});
