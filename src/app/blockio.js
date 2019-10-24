const BlockIo = require('block_io');
const version = 2; // API version
const block_io = new BlockIo('b3cb-58be-1da2-ad3e', 'sc0t3w3e1ll4nd', version);


block_io.get_balance({},console.log);