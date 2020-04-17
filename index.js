//own modules
const {iva, ivaVeh, ivaCaFam} = require("./Modules/iva");
const log = require("./Modules/logs");
//third party modules 
const faker = require("faker");

log.info(`el valor del iva es ${iva}%`);
log.info(`el valor del iva para vehiculos es ${ivaVeh}%`);
log.info(`el valor del iva de la canasta familiar es ${ivaCaFam}%`);
console.log("\n\n");
log.info(faker.name.findName());
