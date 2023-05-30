let length = document.getElementById("length");
let passLength = "";
let password = "";
let apiUrl = `https://api.motdepasse.xyz/create/?quantity=1`;

// Set select input 6 to 30 //
for (let i = 6; i <= 30; i++) {
  let option = document.createElement("option");
  option.value = i;
  option.text = i;
  length.appendChild(option);
}
//

// Call API // Click //
reload.addEventListener("click", () => {
  fetch(apiUrl)
    .then((res) => res.json())
    .then((data) => {
      password = data.passwords[0];
      result.innerHTML = password;
      if (!password) {
        result.innerHTML = "Cochez au moin une option et la longueur"
      }
    });
    
});
//

// Select length //
length.addEventListener("change", (e) => {
  passLength = e.target.value;
  apiUrl += `&password_length=${passLength}`;
});
//

// Checkboxes //
digits.addEventListener("change", () => {
  if (digits.checked) {
    apiUrl += "&include_digits";
  } else {
    apiUrl = apiUrl.replace("&include_digits", "");
  }
});
lowercase.addEventListener("change", () => {
  if (lowercase.checked) {
    apiUrl += "&include_lowercase";
  } else {
    apiUrl = apiUrl.replace("&include_lowercase", "");
  }
});
uppercase.addEventListener("change", () => {
  if (uppercase.checked) {
    apiUrl += "&include_uppercase";
  } else {
    apiUrl = apiUrl.replace("&include_uppercase", "");
  }
});
speChar.addEventListener("change", () => {
  if (speChar.checked) {
    apiUrl += "&include_special_characters";
  } else {
    apiUrl = apiUrl.replace("&include_special_characters", "");
  }
});
//

// Copy password //
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(password);
  result.innerHTML = "Mot de passe copié !";
  setTimeout(() => {
    result.innerHTML = password;
  }, 1000);
});
//
