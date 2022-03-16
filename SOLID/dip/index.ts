// Dependency Inversion Principle (Princípio da inversão da dependência)
// Dependa de abstrações e não de implementações

import DbFactory from "./src/DbFactory";

// Toda e qualquer mudança no código irá ocorrer somente no DbFactory. 
// Mudança em código de Baixo nível não afetará o alto nível do código

DbFactory.startDB()
DbFactory.switchDB()

DbFactory.startDB()


