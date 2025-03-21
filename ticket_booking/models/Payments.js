class PaymentStrategy {
  pay(amount) {
    throw new Error('pay() must be implemented');
  }
}

class CreditCardPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ₹${amount} using Credit Card`);
      return 'SUCCESS';
    }
  }
  
  class UpiPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ₹${amount} using UPI`);
      return 'SUCCESS';
    }
  }
  
  class WalletPayment extends PaymentStrategy {
    pay(amount) {
      console.log(`Paid ₹${amount} using Wallet`);
      return 'SUCCESS';
    }
  }
  

  class Payment {
    constructor(paymentId, amount, strategy) {
      this.paymentId = paymentId;
      this.amount = amount;
      this.strategy = strategy;
      this.status = 'PENDING';
    }
  
    completePayment() {
      this.status = this.strategy.pay(this.amount);
    }
  }
  
  
  module.exports = Payment;
  