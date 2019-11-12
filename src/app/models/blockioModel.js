const BlockIo = require('block_io');
const version = 2; // API version
//const block_io = new BlockIo('b3cb-58be-1da2-ad3e', 'sc0t3w3e1ll4nd', version);

//299a-4cf8-66ae-43ab  -----> BTC
//b3cb-58be-1da2-ad3e  -----> BTCTEST

class BlockioModel {
    get_balance(){
        const block_io = new BlockIo('b3cb-58be-1da2-ad3e', 'sc0t3w3e1ll4nd', version);
        return new Promise((resolve,reject) => {
            block_io.get_balance({},function(erro, resp){
                if(erro) return reject(erro.message);
                return resolve(resp.data);
            });
        });
    }
}

module.exports = BlockioModel;