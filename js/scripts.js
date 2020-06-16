// Business Logic -----
function BankAccount (accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.initialDeposit += amount;
}

BankAccount.prototype.withdrawal = function(amount) {
  this.initialDeposit -= amount;
}

// User Interface -----



// user interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const accountName = $("input#name").val();
    const initialDeposit = $("input#initial-desposit").val();
  })
  $("form#formDeposit").submit(function(event) {
    event.preventDefault();
      const deposit = $("input#deposit")
  })    
  $("form#formWithdrawal").submit(function(event) {
    event.preventDefault();
      const withdrawal = $("input#withdrawal")
  })  
});
