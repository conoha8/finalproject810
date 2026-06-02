/* calculator.js - Pokemon Type Effectiveness Calculator
   Student ID: S25080Q  Name: Gen
   Selects an attacking type, fires an event listener on button click,
   then writes results to the page via DOM manipulation. */

const ALL_TYPES = [
  "Normal","Fire","Water","Electric","Grass","Ice",
  "Fighting","Poison","Ground","Flying","Psychic",
  "Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy"
];

/* Type chart (attacker's view). Only non-1x entries listed.
   0 = no effect, 0.5 = not very effective, 2 = super effective
   Source: https://www.pokemon.com */
const typeChart = {
  Normal:   { Rock:0.5, Steel:0.5, Ghost:0 },
  Fire:     { Fire:0.5, Water:0.5, Rock:0.5, Dragon:0.5, Grass:2, Ice:2, Bug:2, Steel:2 },
  Water:    { Water:0.5, Grass:0.5, Dragon:0.5, Fire:2, Ground:2, Rock:2 },
  Electric: { Electric:0.5, Grass:0.5, Dragon:0.5, Ground:0, Water:2, Flying:2 },
  Grass:    { Fire:0.5, Grass:0.5, Poison:0.5, Flying:0.5, Bug:0.5, Dragon:0.5, Steel:0.5, Water:2, Ground:2, Rock:2 },
  Ice:      { Fire:0.5, Water:0.5, Ice:0.5, Steel:0.5, Grass:2, Ground:2, Flying:2, Dragon:2 },
  Fighting: { Poison:0.5, Flying:0.5, Psychic:0.5, Bug:0.5, Fairy:0.5, Ghost:0, Normal:2, Ice:2, Rock:2, Dark:2, Steel:2 },
  Poison:   { Poison:0.5, Ground:0.5, Rock:0.5, Ghost:0.5, Steel:0, Grass:2, Fairy:2 },
  Ground:   { Grass:0.5, Bug:0.5, Flying:0, Fire:2, Electric:2, Poison:2, Rock:2, Steel:2 },
  Flying:   { Electric:0.5, Rock:0.5, Steel:0.5, Ground:0, Grass:2, Fighting:2, Bug:2 },
  Psychic:  { Psychic:0.5, Steel:0.5, Dark:0, Fighting:2, Poison:2 },
  Bug:      { Fire:0.5, Fighting:0.5, Flying:0.5, Ghost:0.5, Steel:0.5, Fairy:0.5, Grass:2, Psychic:2, Dark:2 },
  Rock:     { Fighting:0.5, Ground:0.5, Steel:0.5, Fire:2, Ice:2, Flying:2, Bug:2 },
  Ghost:    { Normal:0, Dark:0.5, Ghost:2, Psychic:2 },
  Dragon:   { Steel:0.5, Fairy:0, Dragon:2 },
  Dark:     { Fighting:0.5, Dark:0.5, Fairy:0.5, Psychic:2, Ghost:2 },
  Steel:    { Fire:0.5, Water:0.5, Electric:0.5, Steel:0.5, Ice:2, Rock:2, Fairy:2 },
  Fairy:    { Fire:0.5, Poison:0.5, Steel:0.5, Fighting:2, Dragon:2, Dark:2 }
};

/* Official Pokemon type colors */
const typeColors = {
  Normal:"#9fa19f", Fire:"#e62829", Water:"#2980ef", Electric:"#fac000",
  Grass:"#3fa129", Ice:"#3dcef3", Fighting:"#ff8000", Poison:"#9141cb",
  Ground:"#915121", Flying:"#81b9ef", Psychic:"#ef4179", Bug:"#91a119",
  Rock:"#afa981", Ghost:"#704170", Dragon:"#5060e1", Dark:"#624d4e",
  Steel:"#60a1b8", Fairy:"#ef70ef"
};

// Wait for the DOM to be ready before accessing elements
document.addEventListener("DOMContentLoaded", function () {

  const typeSelect = document.getElementById("type-select");
  const calcBtn    = document.getElementById("calc-btn");
  const resultBox  = document.getElementById("result-box");

  // Build dropdown options dynamically
  ALL_TYPES.forEach(function (t) {
    const option = document.createElement("option");
    option.value = t;
    option.textContent = t;
    typeSelect.appendChild(option);
  });

  // Event listener: run calculation on button click
  calcBtn.addEventListener("click", function () {
    const selected = typeSelect.value;
    if (!selected) return;

    const row = typeChart[selected] || {};
    const super2x  = [];
    const notVery  = [];
    const noEffect = [];

    ALL_TYPES.forEach(function (def) {
      const mult = (row[def] !== undefined) ? row[def] : 1;
      if (mult === 2)   super2x.push(def);
      if (mult === 0.5) notVery.push(def);
      if (mult === 0)   noEffect.push(def);
    });

    // Clear previous results and rebuild via DOM manipulation
    resultBox.innerHTML = "";

    const title = document.createElement("h3");
    title.textContent = selected + " type attacks:";
    title.style.marginBottom = "12px";
    title.style.color = typeColors[selected] || "#fff";
    resultBox.appendChild(title);

    renderCategory(resultBox, "⚔️ Super Effective ×2",    super2x,  "#4ade80");
    renderCategory(resultBox, "🛡️ Not Very Effective ×½", notVery,  "#facc15");
    renderCategory(resultBox, "✖️ No Effect ×0",           noEffect, "#f87171");

    resultBox.style.display = "block";
  });
});

// Renders one result row (label + coloured type badges)
function renderCategory(container, label, types, color) {
  const row = document.createElement("div");
  row.style.marginBottom = "14px";

  const heading = document.createElement("p");
  heading.textContent = label;
  heading.style.color = color;
  heading.style.fontWeight = "bold";
  heading.style.marginBottom = "6px";
  row.appendChild(heading);

  if (types.length === 0) {
    const none = document.createElement("span");
    none.textContent = "None";
    none.style.color = "#888";
    row.appendChild(none);
  } else {
    types.forEach(function (t) {
      const badge = document.createElement("span");
      badge.textContent = t;
      badge.style.backgroundColor = typeColors[t] || "#555";
      badge.style.color = "#fff";
      badge.style.padding = "3px 10px";
      badge.style.borderRadius = "12px";
      badge.style.marginRight = "6px";
      badge.style.fontSize = "14px";
      badge.style.display = "inline-block";
      badge.style.marginBottom = "4px";
      row.appendChild(badge);
    });
  }

  container.appendChild(row);
}
