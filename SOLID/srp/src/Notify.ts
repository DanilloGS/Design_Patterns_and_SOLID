// Classe espceializada em mandar notificações para usuários.

class Notify {
  sendEmail(email: string) {
    console.log("Sending email to " + email);
  }

  sendSMS(phone: string) {
    console.log("Sending SMS to " + phone);
  }
}

export default new Notify()