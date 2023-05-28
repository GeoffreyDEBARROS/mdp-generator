let length = document.getElementById("length");

for (let i = 6; i <= 30; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  length.appendChild(option);
}
