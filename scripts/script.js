
// const data = {
//       "skills": [
//         { "id": "Boulangerie", "niveau": 2 },
//         { "id": "Conception", "niveau": 5 },
//         { "id": "Fea", "niveau": 4 },
//         { "id": "Thermo", "niveau": 4 }
//       ]
//     };

let data = null;

async function loadSkills() {
  try {
    const response = await fetch("skills.json");
    if (!response.ok) throw new Error("HTTP error " + response.status);
    data = await response.json();
    stars();
    drawHistogram();
  } catch (err) {
    console.error("Error loading skills.json:", err);
  }
}


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

function stars() {

  data.skills.forEach(skill => {
    const container = document.querySelector(`#${skill.id} .stars`);
    if (!container) return; 
    
    container.innerHTML = ""; 

    for (let i = 0; i < 5; i++) {
      const span = document.createElement("span");
      span.classList.add("fa","fa-star");
      if (i < skill.niveau) span.classList.add("checked");
      container.appendChild(span);
    }
  });
}


function drawHistogram() {
  const canvas = document.getElementById("skillsChart");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const skills = data.skills;
  const barWidth = 60;
  const barGap = 40;
  const chartHeight = canvas.height - 50;
  const maxLevel = 5;

  ctx.font = "14px Poppins, sans-serif";
  ctx.textAlign = "center";

  skills.forEach((skill, i) => {
    const barHeight = (skill.niveau / maxLevel) * chartHeight;
    const x = 60 + i * (barWidth + barGap);
    const y = canvas.height - barHeight - 30;

    ctx.fillStyle = "#e0e0e0";
    ctx.fillRect(x, canvas.height - 30 - chartHeight, barWidth, chartHeight);

    ctx.fillStyle = "#f9c80e"; 
    ctx.fillRect(x, y, barWidth, barHeight);

    ctx.fillStyle = "#333";
    ctx.fillText(skill.id, x + barWidth / 2, canvas.height - 10);
    ctx.fillText(skill.niveau, x + barWidth / 2, y - 5);
  });

  ctx.strokeStyle = "#444";
  ctx.beginPath();
  ctx.moveTo(40, canvas.height - 30);
  ctx.lineTo(canvas.width - 10, canvas.height - 30);
  ctx.stroke();
}


document.addEventListener("DOMContentLoaded", () => {
  clickDescription();
  const corps = document.querySelectorAll("article > h3.corpName");
  corps.forEach(corp => {
    const desc = corp.nextElementSibling;
    if (!desc || !desc.classList.contains("corpDesc")) return;

    const place = (e) => {
      desc.style.left = `${e.clientX + 12}px`;   
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
  loadSkills();
  stars();
  drawHistogram();
});

