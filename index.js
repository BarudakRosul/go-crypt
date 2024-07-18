const encrypt = require("./lib/encrypt");
const decrypt = require("./lib/decrypt");
const gcrypt = { encrypt, decrypt };

module.exports = { encrypt, decrypt };
module.exports = gcrypt;
