// console.log("loaded instructions...");

// document.querySelector("#by1").addEventListener("mouseover", byf);

// function byf() {
//   console.log("byf bla bla bla");
//   document.querySelector("#by1").classList.add("my_scale");
//   document.querySelector("#by1").style.fill = "pink";
// }
// document.querySelector(".info-text h2").textContent = "hhhhh";

// document.addEventListener("DOMContentLoaded", () => {
//   const dots = document.querySelectorAll(".cls-2");

//   dots.forEach((dot) => {
//     dot.addEventListener("click", () => {
//       console.log("En prik blev klikket!");
//       dot.classList.toggle("active"); // gør prikken aktiv
//     });
//   });
// });

document.addEventListener("DOMContentLoaded", () => {
  // Find alle prikker med klassen .cls-2
  const dots = document.querySelectorAll(".cls-2");

  // Tilføj klikfunktion til hver prik
  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      console.log(
        "En prik blev klikket! cx:",
        dot.getAttribute("cx"),
        "cy:",
        dot.getAttribute("cy")
      );

      // Skift farve på prikken midlertidigt for visuel feedback
      dot.style.fill = "#000000ff"; // grøn
      setTimeout(() => {
        dot.style.fill = "#ff2900"; // tilbage til rød
      }, 300);

      // Alternativt kan du toggler en klasse
      dot.classList.toggle("active");
    });
  });
});

document.querySelector("#hovedstaden").addEventListener("click", hovedstaden);

function hovedstaden() {
  console.log("hovedstaden er trykket paa");

  document.querySelector(".info-text h2").textContent = "hovedstaden";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

document.querySelector("#sjælland").addEventListener("click", sjælland);

function sjælland() {
  console.log("sjælland er trykket paa");

  document.querySelector(".info-text h2").textContent = "sjælland";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

document
  .querySelector("#sønderjylland")
  .addEventListener("click", sønderjylland);

function sønderjylland() {
  console.log("sønderjylland er trykket paa");

  document.querySelector(".info-text h2").textContent = "sønderjylland";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

function vestjylland() {
  console.log("vestjylland er trykket paa");

  document.querySelector(".info-text h2").textContent = "vestjylland";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

function østjylland() {
  console.log("østjylland er trykket paa");

  document.querySelector(".info-text h2").textContent = "østjylland";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

function nordjylland() {
  console.log("nordjylland er trykket paa");

  document.querySelector(".info-text h2").textContent = "nordjylland";
  document.querySelector(".info-text p").textContent =
    "Hamsteret bruger sin mund til at opbevare ting. Den kan f.eks. opbevare det den har røvet eller smugle ting ind/ud af landet ved at opbevare det i dens store mund.";
}

document.addEventListener("DOMContentLoaded", () => {
  const hotspots = document.querySelectorAll("#Lag_1 .hotspot");
  const targetBox = document.getElementById("efficiency"); // brug den box du vil opdatere

  if (!hotspots.length || !targetBox) return;

  function showInfo(el) {
    const html = el.dataset.info || `<p>Ingen info</p>`;
    hotspots.forEach((h) => h.classList.remove("active"));
    el.classList.add("active");
    targetBox.innerHTML = html;
    targetBox.classList.add("open");
    targetBox.setAttribute("tabindex", "-1");
    targetBox.focus();
  }

  hotspots.forEach((el) => {
    el.setAttribute("role", "button");
    el.setAttribute("tabindex", "0");
    el.addEventListener("click", () => showInfo(el));
    el.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        showInfo(el);
      }
    });
  });
});
