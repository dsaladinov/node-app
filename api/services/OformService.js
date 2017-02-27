"use strict";

var OformService = {
  findAll: function () {
    return Oformdoc.findAll(
      {include: [{
          model:Doc_otchujdenya,as:'DocOtchujdenyaAS',
                include: [{ model:Oformdoc, as:'OformdocAS',
                    include: [{ model: Spravochnik, as: 'SpravochnikAS'}] }]
      }]}
        );
  },

  findById: function (id) {
    return Oformdoc.findById(id);
  },

  findByCode: function (code) {
    return Oformdoc.findOne({where: {code: code}});
  }
};

module.exports = OformService;

// model:Doverennosti,as:'DoverennostiAS',
// model:Nasledstva,as:'NasledstvaAS',
// model:Prochie_dogovora,as:'ProchieDogovoraAS',
// model:Zaveshaniya,as:'ZaveshaniyaAS',
// model:Zayavleniya,as:'ZayavleniyaAS'
