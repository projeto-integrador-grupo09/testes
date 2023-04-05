// middleware para restringir acesso a telas de ADM

const autenticacaoDeLogin = (req, res, next) => {

    if (req.session.admLogado) {
        next();
    } else {
        res.redirect('/adm/login');
        
    } 
};
module.exports = autenticacaoDeLogin;