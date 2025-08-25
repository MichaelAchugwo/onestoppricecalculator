var paperPrintBox = document.getElementById("paperPrintBox");
var largeFormatBox = document.getElementById("largeFormatBox");

function toggleBoxes() {
  const selectedOption = document.querySelector(
    'input[name="printType"]:checked'
  ).value;
  if (selectedOption === "Paper Print") {
    paperPrintBox.style.display = "block";
    largeFormatBox.style.display = "none";
  } else {
    paperPrintBox.style.display = "none";
    largeFormatBox.style.display = "block";
  }
}

var newPricePerSqrFeet = 190;
var a4Price = 200;
var a3Price = 400;

var select = document.getElementById("materialSelect");
const selectPaper = document.getElementById("paperSelect");

function updateVariable() {
  const selectedOption = select.selectedIndex;
  const selectedPaper = selectPaper.selectedIndex;
  switch (selectedOption) {
    case 0:
      newPricePerSqrFeet = 190;
      break;
    case 1:
      newPricePerSqrFeet = 230;
      break;
    case 2:
      newPricePerSqrFeet = 350;
      break;
    case 3:
      newPricePerSqrFeet = 270;
      break;
    case 4:
      newPricePerSqrFeet = 550;
      break;
    case 5:
      newPricePerSqrFeet = 350;
      break;
    case 6:
      newPricePerSqrFeet = 450;
      break;
    default:
      newPricePerSqrFeet = 200;
  }
  switch (selectedPaper) {
    case 0:
      a4Price = 250;
      a3Price = 450;
      document.getElementById("a3Box").style.display = "flex";
      break;
    case 1:
      a4Price = 100;
      a3Price = 200;
      document.getElementById("a3Box").style.display = "flex";
      break;
    case 2:
      a4Price = 100;
      a3Price = 200;
      document.getElementById("a3Box").style.display = "flex";
      break;
    case 3:
      a4Price = 200;
      document.getElementById("a3Box").style.display = "none";
      break;
    case 4:
      a4Price = 200;
      document.getElementById("a3Box").style.display = "none";
      break;
  }
  document.getElementById("price").innerHTML = newPricePerSqrFeet;
  document.getElementById("price2").innerHTML = newPricePerSqrFeet;
  document.getElementById("calculated-price-in").innerHTML = "";
  document.getElementById("calculated-price-ft").innerHTML = "";
  document.getElementById("a4price").innerHTML = a4Price;
  document.getElementById("a3price").innerHTML = a3Price;
  document.getElementById("calculated-price-a4").innerHTML = "";
  document.getElementById("calculated-price-a3").innerHTML = "";
}

document.getElementById("a3number").addEventListener("input", function () {
  var a3number = document.getElementById("a3number").value;
  const selectedPaper = selectPaper.selectedIndex;
  if (a3number >= 20 && selectedPaper === 0) {
    a3Price = 400;
  } else {
    a3Price = 450;
  }
  document.getElementById("a3price").innerHTML = a3Price;
});

document.getElementById("a4number").addEventListener("input", function () {
  var a4number = document.getElementById("a4number").value;
  const selectedPaper = selectPaper.selectedIndex;
  if (a4number >= 20 && selectedPaper === 0) {
    a4Price = 200;
  } else {
    a4Price = 250;
  }
  document.getElementById("a4price").innerHTML = a4Price;
});

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculatePriceIn() {
  var inwidth = document.getElementById("job-widthin").value;
  var inheight = document.getElementById("job-heightin").value;
  var innumber = document.getElementById("innumber").value;
  var inprice = document.getElementById("calculated-price-in");
  var inprice = Math.round(
    (inwidth * inheight * innumber * newPricePerSqrFeet) / 144
  );

  document.getElementById("calculated-price-in").innerHTML = formatNumber(inprice);
}
function calculatePriceFt() {
  var ftwidth = document.getElementById("job-widthft").value;
  var ftheight = document.getElementById("job-heightft").value;
  var ftnumber = document.getElementById("ftnumber").value;
  var ftprice = document.getElementById("calculated-price-ft");
  var ftprice = Math.round(ftwidth * ftheight * ftnumber * newPricePerSqrFeet);

  document.getElementById("calculated-price-ft").innerHTML = formatNumber(ftprice);
}
function calculatePriceA4() {
  var a4number = document.getElementById("a4number").value;
  var a4price = a4Price * a4number;
  document.getElementById("calculated-price-a4").innerHTML = formatNumber(a4price);
}
function calculatePriceA3() {
  var a3number = document.getElementById("a3number").value;
  var a4price = a3Price * a3number;
  document.getElementById("calculated-price-a3").innerHTML = formatNumber(a4price);
}

function resetUnitsIn() {
  document.getElementById("job-widthin").value = "";
  document.getElementById("job-heightin").value = "";
  document.getElementById("innumber").value = "1";
  document.getElementById("calculated-price-in").innerHTML = "";
}
function resetUnitsFt() {
  document.getElementById("job-widthft").value = "";
  document.getElementById("job-heightft").value = "";
  document.getElementById("ftnumber").value = "1";
  document.getElementById("calculated-price-ft").innerHTML = "";
}
function resetUnitsA4() {
  document.getElementById("a4number").value = "1";
  document.getElementById("calculated-price-a4").innerHTML = "";
}
function resetUnitsA3() {
  document.getElementById("a3number").value = "1";
  document.getElementById("calculated-price-a3").innerHTML = "";
}



window.addEventListener("DOMContentLoaded", () => {
  updateVariable();

  document.querySelectorAll('input[name="printType"]').forEach((elem) => {
    elem.addEventListener("change", toggleBoxes);
  });
  
  toggleBoxes();
  select.addEventListener("change", updateVariable);
  selectPaper.addEventListener("change", updateVariable);

  document.getElementById("price").innerHTML = newPricePerSqrFeet;
  document.getElementById("price2").innerHTML = newPricePerSqrFeet;
  document.getElementById("a4price").innerHTML = a4Price;
  document.getElementById("a3price").innerHTML = a3Price;
});
