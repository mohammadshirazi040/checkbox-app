const fastCheckbox = document.getElementById("fast");
const cheapCheckbox = document.getElementById("cheap");
const goodCheckbox = document.getElementById("good");

let lastCheckedCheckbox = null;

[fastCheckbox, cheapCheckbox, goodCheckbox].forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (cheapCheckbox.checked && goodCheckbox.checked && fastCheckbox.checked) {
      lastCheckedCheckbox.checked = false;
    }
    if (checkbox.checked) {
      lastCheckedCheckbox = checkbox;
    }
  });
});
