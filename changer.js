let colors = document.querySelectorAll(".colors");
colors.forEach((color) => {
  document.getElementById(`${color.id}`).style.backgroundColor = `${color.id}`;
});

colors.forEach((color) => {
  color.addEventListener("click", (e) => {
    document.getElementById("body").style.backgroundColor = `${e.target.id}`;
  });
});
