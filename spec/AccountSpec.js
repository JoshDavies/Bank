describe('Account', () => {
  let account;
  beforeEach(function() {
    account = new Account()
  });

  describe('currentBalance', () => {
    it('should display a users current balance', () => {
      expect(account.currentBalance()).toEqual('0.00');
    });
  });

  describe('deposit', () => {
    it('should add a given amount to the users total balance', () =>{
      expect(account.deposit(1000)).toEqual("1000.00");
      expect(account.deposit(2000)).toEqual("3000.00");
    });
  });

  describe('withdraw', () => {
    it('should subtract a given amount from the users total balance', () =>{
      account.balance = 3000;
      expect(account.withdraw(500)).toEqual("2500.00");
    })
  });

  describe('formatDate', () => {
    it('should return the date of the transaction: dd/mm/yyyy', () => {
      var date = new Date(2012, 0, 10);
      expect(account.formatDate(date)).toEqual('10/01/2012');
    })
  });

  describe('recordTransaction', () => {
    it('should track the date the transaction was made', () => {
      console.log(account.recordTransaction(1000))
  //     expect(account.recordTransaction(1000)).toEqual('10/01/2012 || 1000.00 || || 1000.00')
    })
  });

});
