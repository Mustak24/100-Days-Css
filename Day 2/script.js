const nav = document.querySelector("center");
const row = document.getElementsByClassName("row");
tap = 1;
function anime() {
  if (tap) {
    tap--;
    row[0].style.transform = "translateY(0px)";
    row[1].style.transform = "scale(0)";
    row[2].style.transform = "translateY(0px)";

    setTimeout(() => {
      row[0].style.transform = "rotateZ(45deg)";
      row[2].style.transform = "rotateZ(135deg)";
    }, 500);
  } else {
    row[0].style.transform = "rotateZ(0deg)";
    row[2].style.transform = "rotateZ(0deg)";
    setTimeout(() => {
      row[0].style.transform = "translateY(-20px)";
      row[1].style.transform = "scale(1)";
      row[2].style.transform = "translateY(20px)";
    }, 500);
    tap++;
  }
}
