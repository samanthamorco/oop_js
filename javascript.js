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
  var index = 0;
  return function() {
    return document.getElementById("boxOne").style.backgroundColor = colors[index%3];
    index++;
  }
})();

var clickBoxTwo = (function() {
  var colors = ["purple", "black", "yellow"];
  var index = 0;
  return function() {
    return document.getElementById("boxTwo").style.backgroundColor = colors[index%3];
    index++;
  }
})();

window.accounts = accounts;

