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

