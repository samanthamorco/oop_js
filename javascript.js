function createAccount() {
  var firstName = document.getElementById('firstName');
  var lastName = document.getElementById('lastName');
  var openingBalance = document.getElementById('openingBalance');
  var account = new Account(firstName.value, lastName.value, openingBalance.value); // need to create constructor
  accounts.push(account);
  firstName.value = "";
  lastName.value = "";
  openingBalance.value = "";
}

var clickBoxOne = (function() {
  var colors = ["blue", "red", "green"];
  return function() {
    return document.getElementById("boxOne").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  }
})();

var clickBoxTwo = (function() {
  var colors = ["purple", "black", "yellow"];
  return function() {
    return document.getElementById("boxTwo").style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
  }
})();

window.accounts = accounts;

