import * as Knex from "knex";

exports.seed = async function (knex: Knex): Promise<any> {
    // Deletes ALL existing entries
    return knex("tokens").del()
        .then(() => {
          // Inserts seed entries
          return knex.raw(`INSERT INTO tokens
            (contract_address, symbol, market, outcome)
            VALUES
            ('ETH', 'ETH', NULL, NULL),
            ('0x7a305d9b681fb164dc5ad628b5992177dc66aec8', 'REP', NULL, NULL),
            ('0x2000000000000000000000000000000000000000', 'shares', '0x0000000000000000000000000000000000000001', 1),
            ('0x1000000000000000000000000000000000000000', 'shares', '0x0000000000000000000000000000000000000001', 0)`);
        });
};