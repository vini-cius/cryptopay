const BaseControl = require('../controllers/baseControl.js');
const baseControl = new BaseControl();

module.exports = (app) => {
    const routersBase = BaseControl.rotas();

    app.get(routersBase.home, baseControl.home());

    app.route(routersBase.login)
        .get(baseControl.login())
        .post(baseControl.efetuaLogin());
};