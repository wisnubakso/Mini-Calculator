var nilai1 = document.getElementById("nilai1");
var nilai2 = document.getElementById("nilai2");

// Function Tambah
function tambah() {
  var hasil = parseFloat(nilai1.value) + parseFloat(nilai2.value);

  //display hasil
  document.getElementById("hasil").innerHTML = hasil;
}
function kurang() {
  var hasil = parseFloat(nilai1.value) - parseFloat(nilai2.value);

  //display hasil
  document.getElementById("hasil").innerHTML = hasil;
}
function kali() {
  var hasil = parseFloat(nilai1.value) * parseFloat(nilai2.value);

  //display hasil
  document.getElementById("hasil").innerHTML = hasil;
}
function bagi() {
  var hasil = parseFloat(nilai1.value) / parseFloat(nilai2.value);

  //display hasil
  document.getElementById("hasil").innerHTML = hasil;
}
