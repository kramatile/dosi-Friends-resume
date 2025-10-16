function clickDescription() {
  const allDt = document.querySelectorAll("dt.Organization");

  allDt.forEach(dt => {
    dt.addEventListener("click", () => {
      const dd = dt.nextElementSibling;

      document.querySelectorAll("#Formation dd").forEach(otherDd => {
        if (otherDd !== dd) {
          otherDd.classList.remove("show");
        }
      });

      dd.classList.toggle("show");
    });
  });
}

document.addEventListener("DOMContentLoaded", clickDescription);
