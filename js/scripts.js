// Business Logic -----
function BankAccount (accountName, initialDeposit) {
  this.accountName = accountName;
  this.initialDeposit = initialDeposit;
}

BankAccount.prototype.deposit = function(amount) {
  this.initialDeposit += amount;
}

BankAccount.prototype.withdraw = function(amount) {
  this.initialDeposit -= amount;
}

// User Interface -----



// user interface logic
$(document).ready(function() {
  let totalAccount;
  $("form#formOne").submit(function(event) { 
    event.preventDefault();
    const accountName = $("input#name").val();
    const initialDeposit = parseInt($("input#initial-desposit").val());
    totalAccount = new BankAccount(accountName, initialDeposit)
    console.log(accountName);
    console.log(initialDeposit);
    $("#balance").text(initialDeposit)
    
  })
  $("form#withdraw-form").submit(function(event) {
    event.preventDefault();
      const amount = parseInt($("input#withdraw").val());
      totalAccount.withdraw(amount)
      console.log(totalAccount);
      $("#balance").text(totalAccount.initialDeposit)
    })
      console.log(withdraw); 

  $("form#deposit-form").submit(function(event) {
    event.preventDefault();
      const amount = parseInt($("input#deposit").val());
      totalAccount.deposit(amount)  
      console.log(deposit); 
      $("#balance").text(totalAccount.initialDeposit)
  })    
});
