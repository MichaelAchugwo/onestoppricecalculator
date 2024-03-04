var showWeb;

function webLoader() {
  showWeb = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myWeb").style.display = "block";
}

var pricePerSqrFeet = 160;
function calculatePriceIn(){
  var inwidth = document.getElementById("job-widthin").value;
  var inheight = document.getElementById("job-heightin").value;
  var innumber = document.getElementById("innumber").value;
  var inprice = document.getElementById("calculated-price-in")
  var inprice = Math.round(inwidth*inheight*innumber*pricePerSqrFeet/144);
  
  document.getElementById("calculated-price-in").innerHTML = inprice;
}
function calculatePriceFt(){
  var ftwidth = document.getElementById("job-widthft").value;
  var ftheight = document.getElementById("job-heightft").value;
  var ftnumber = document.getElementById("ftnumber").value;
  var ftprice = document.getElementById("calculated-price-ft")
  var ftprice = Math.round(ftwidth*ftheight*ftnumber*pricePerSqrFeet);
  
  document.getElementById("calculated-price-ft").innerHTML = ftprice;
}
function resetUnitsIn(){
  document.getElementById("job-widthin").value = '';
  document.getElementById("job-heightin").value = '';
  document.getElementById("innumber").value = '';
  document.getElementById("calculated-price-in").innerHTML = '';
}
function resetUnitsFt(){
  document.getElementById("job-widthft").value = '';
  document.getElementById("job-heightft").value = '';
  document.getElementById("ftnumber").value = '';
  document.getElementById("calculated-price-ft").innerHTML = '';
}

document.getElementById("price").innerHTML = pricePerSqrFeet;
document.getElementById("price2").innerHTML = pricePerSqrFeet;