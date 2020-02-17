class Account {
  constructor() {
    this.balance = 0;
  }

  currentBalance() {
    return this.balance.toFixed(2);
  }

  deposit(credit) {
    this.balance += credit;
    return this.currentBalance();
  }

  withdraw(debit) {
    this.balance -= debit;
    return this.currentBalance();
  }
};
