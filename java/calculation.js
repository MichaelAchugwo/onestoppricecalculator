var showWeb;

function webLoader() {
  showWeb = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myWeb").style.display = "block";
}

var pricePerSqrFeet = 170;

var select = document.getElementById("materialSelect");

let previousOption;

let selectedOptionValue = "option1";

function updateVariable() {
  const select = document.getElementById("materialSelect");
  const selectedOption = select.selectedIndex;
  let newPricePerSqrFeet;
  if (selectedOption === 0) {
    return newPricePerSqrFeet;
  } else if (selectedOption === 1) {
    newPricePerSqrFeet = 180;
  } else if (selectedOption === 2) {
    newPricePerSqrFeet = 250;
  } else if (selectedOption === 3) {
    newPricePerSqrFeet = 280;
  } else if (selectedOption === 4) {
    newPricePerSqrFeet = 290;
  } else if (selectedOption === 5) {
    newPricePerSqrFeet = 300;
  } else if (selectedOption === 6) {
    newPricePerSqrFeet = 250;
  }
  pricePerSqrFeet = newPricePerSqrFeet;
  document.getElementById("price").innerHTML = pricePerSqrFeet;
  document.getElementById("price2").innerHTML = pricePerSqrFeet;
  document.getElementById("calculated-price-in").innerHTML = "";
  document.getElementById("calculated-price-ft").innerHTML = "";
}

select.addEventListener("change", updateVariable);

function calculatePriceIn() {
  var inwidth = document.getElementById("job-widthin").value;
  var inheight = document.getElementById("job-heightin").value;
  var innumber = document.getElementById("innumber").value;
  var inprice = document.getElementById("calculated-price-in");
  var inprice = Math.round(
    (inwidth * inheight * innumber * pricePerSqrFeet) / 144
  );

  document.getElementById("calculated-price-in").innerHTML = inprice;
}
function calculatePriceFt() {
  var ftwidth = document.getElementById("job-widthft").value;
  var ftheight = document.getElementById("job-heightft").value;
  var ftnumber = document.getElementById("ftnumber").value;
  var ftprice = document.getElementById("calculated-price-ft");
  var ftprice = Math.round(ftwidth * ftheight * ftnumber * pricePerSqrFeet);

  document.getElementById("calculated-price-ft").innerHTML = ftprice;
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

document.getElementById("price").innerHTML = pricePerSqrFeet;
document.getElementById("price2").innerHTML = pricePerSqrFeet;
