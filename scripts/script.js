function clickDescription() {
  const allDt = document.querySelectorAll("dt.Organization");
  allDt.forEach(dt => {
    dt.addEventListener("click", () => {
      const dd = dt.nextElementSibling;
      document.querySelectorAll("#Formation dd").forEach(other => {
        if (other !== dd) other.classList.remove("show");
      });
      dd.classList.toggle("show");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  clickDescription();

  const corps = document.querySelectorAll("article > h3.corpName");
  corps.forEach(corp => {
    const desc = corp.nextElementSibling;
    if (!desc || !desc.classList.contains("corpDesc")) return;

    const place = (e) => {
      desc.style.left = `${e.clientX + 12}px`;   // since position: fixed
      desc.style.top  = `${e.clientY + 12}px`;
    };

    corp.addEventListener("mouseenter", (e) => {
      place(e);
      desc.classList.add("visible");
      corp.addEventListener("mousemove", place);

    });

    corp.addEventListener("mousemove", place);

    corp.addEventListener("mouseleave", () => {
      desc.classList.remove("visible");
        corp.removeEventListener("mousemove");

    });
  });
});
