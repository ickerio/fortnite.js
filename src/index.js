const Client = require('./Client');

// Platforms
Client.PC = 'pc';
Client.XBOX = 'xbl';
Client.PS4 = 'psn';

// Game Types
Client.SOLO = 'p2';
Client.DUO = 'p10';
Client.SQUAD = 'p9';

Client.version = require('../package.json').version;

module.exports = Client;