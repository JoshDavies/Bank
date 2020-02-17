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
      expect(account.deposit(1000)).toEqual("1000.00")
      expect(account.deposit(2000)).toEqual("3000.00")
    })
  });

  describe('withdraw', () => {
    it('should subtract a given amount from the users total balance', () =>{
      account.balance = 3000
      expect(account.withdraw(500)).toEqual("2500.00")
    })
  });

});
