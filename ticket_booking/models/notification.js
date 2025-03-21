class NotificationObserver {
    notify(user, message) {
      throw new Error('notify() must be implemented');
    }
  }
class EmailNotifier extends NotificationObserver {
    notify(user, message) {
      console.log(`Email sent to ${user.email}: ${message}`);
    }
  }
  
  class SmsNotifier extends NotificationObserver {
    notify(user, message) {
      console.log(`SMS sent to ${user.phone}: ${message}`);
    }
  }
  