const inputField = document.querySelector(".inputField");
const qrCode_image = document.querySelector(".qrCode_image");
const gnrtBtn = document.querySelector(".gnrtBtn");
const title = document.querySelector(".title");

gnrtBtn.addEventListener("click", () => {
  if (inputField.value == "") {
    title.innerHTML = "Enter text or url";
    title.style.color = "red";
  } else {
    title.innerHTML = "QR Code Generator";
    title.style.color = "green";
  }
  qrCode_image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputField.value}`;
  qrCode_image.style.transform = "scale(1)";
});
