const { Forma_de_pagamento } = require("../databases/models");

async function test() {
    let forma_de_pagamento = await Forma_de_pagamento.findAll({
        raw: true,
    });
    console.log(forma_de_pagamento)
}
test();