class Account {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  currentBalance() {
    return this.balance.toFixed(2);
  }

  deposit(credit) {
    this.balance += credit;
    this.recordTransaction(credit);
    return this.currentBalance();
  }

  withdraw(debit) {
    this.balance -= debit;
    return this.currentBalance();
  }

  recordTransaction(amount) {

  }

  todaysDate() {
    return '17/02/2020'
  }

};
