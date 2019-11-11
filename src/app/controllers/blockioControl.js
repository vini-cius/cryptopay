const BlockioModel = require('../models/blockioModel.js');
const blockioModel = new BlockioModel();

class BlockioControl {
    get_balance(){
        return function (req, resp) {
            blockioModel.get_balance()
                .then(balance =>
                    resp.render('index.ejs', { balance: balance }))
                .catch(erro => console.log(erro));
        }
    }
}

module.exports = BlockioControl;