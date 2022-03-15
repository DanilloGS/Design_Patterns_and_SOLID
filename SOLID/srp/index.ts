// Single Responsiblity Principle (Princípio da responsabilidade única)
// Uma classe deve ter um, e somente um, motivo para mudar.

import Notify from "./src/Notify";
import User from "./src/User"

const user = new User("Pedro", '00000000000')

user.setEmail("pedro@gmail.com");
user.setPhone("99999-9999");

Notify.sendEmail(user.getEmail());
Notify.sendSMS(user.getPhone());