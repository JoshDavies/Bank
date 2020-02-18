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
    var date = new Date()
    return this.todaysDate(date)
  }

  todaysDate(date) {
    const months = [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ];
    var todaysDate = date.getDate() + '/' + months[date.getMonth()] + '/' + date.getFullYear();
    return todaysDate
  }

};
