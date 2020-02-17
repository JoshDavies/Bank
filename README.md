# Bank


## Quick-start
- to Run tests: Open the 'SpecRunner.html' file in a Chrome browser (copy the file path).
```

----------
## User Stories

```
as a new user
I want to create an account that tracks my current bank balance.

as an account holder
I want to be able to make a deposit

as an account holder
I want to be able to make a withdrawal

as an account holder
I want to view a print out of my history of previous deposits and withdrawals (reverse order)

as an account holder
I want to see the date when each transaction was made.

```
## Class Diagram (UML)
### Objects:
- Account. @statement{ transaction = { date: , credit: , debit: , balance: } }
- Printer / Display

### Messages:
- current balance
- deposit (amount)
- withdraw (amount)
- print statement (transactions)

-------------
## Acceptance criteria

  **Given** a client makes a deposit of 1000 on 10-01-2012  
  **And** a deposit of 2000 on 13-01-2012  
  **And** a withdrawal of 500 on 14-01-2012  
  **When** they print their bank statement  
  **Then** they would see:

  ```
  date || credit || debit || balance
  14/01/2012 || || 500.00 || 2500.00
  13/01/2012 || 2000.00 || || 3000.00
  10/01/2012 || 1000.00 || || 1000.00
  ```
