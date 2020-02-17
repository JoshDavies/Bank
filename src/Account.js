class Account {
  constructor() {
    this.balance = 0;
  }

  currentBalance() {
    return this.balance.toFixed(2);
  }

  deposit(amount) {
    this.balance += amount;
    return this.balance.toFixed(2);
  }
};
