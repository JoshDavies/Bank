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

});
