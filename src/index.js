import "./assets/styles/styles.scss";

/*=============== BTN QUANTITY ===============*/
const btnPlus = document.querySelectorAll(".quantity__plus");
const btnMoins = document.querySelectorAll(".quantity__moins");
const total = document.querySelector(".total__price");
const quantity1 = document.querySelector("#quantity1");
const quantity2 = document.querySelector("#quantity2");

total.innerHTML =
  "$" + (Number(quantity1.value) * 54.99 + Number(quantity2.value) * 74.99);

btnPlus.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    switch (btn.dataset.id) {
      case quantity1.id:
        quantity1.value = Number(quantity1.value) + 1;
        break;
      case quantity2.id:
        quantity2.value = Number(quantity2.value) + 1;
        break;
    }

    total.innerHTML =
      "$" + (Number(quantity1.value) * 54.99 + Number(quantity2.value) * 74.99);
  })
);

btnMoins.forEach((btn) =>
  btn.addEventListener("click", (event) => {
    switch (btn.dataset.id) {
      case quantity1.id:
        if (Number(quantity1.value) > 1) {
          quantity1.value = Number(quantity1.value) - 1;
        }
        break;
      case quantity2.id:
        if (Number(quantity2.value) > 1) {
          quantity2.value = Number(quantity2.value) - 1;
        }
        break;
    }

    total.innerHTML =
      "$" + (Number(quantity1.value) * 54.99 + Number(quantity2.value) * 74.99);
  })
);
/*===== MENU HIDDEN =====*/

/*=============== FORM SUBMIT ===============*/
const form = document.querySelector("form");
const validation = document.querySelector("#validation");
let errors = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  if (formIsValid(data)) {
    validation.classList.add("ok");
    validation.classList.remove("ko");
    validation.innerHTML = "<li>Your order has been validated</li>";
  }
  console.log(data);
});

const formIsValid = (data) => {
  if (
    !data.address ||
    !data.city ||
    !data.country ||
    !data.email ||
    !data.name ||
    !data.phone ||
    !data.postal
  ) {
    errors.push("You must fill in all the fields");
  } else {
    errors = [];
  }
  if (errors.length) {
    let errorHTML = "";
    errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`;
    });
    validation.classList.remove("ok");
    validation.classList.add("ko");
    validation.innerHTML = errorHTML;
    return false;
  } else {
    validation.innerHTML = "";
    return true;
  }
};
