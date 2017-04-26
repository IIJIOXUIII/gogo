/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  index: function(req, res) {
    res.view('page');
  },

  users: function(req, res) {
    res.send([
      { id: 1, name: 'Денис', status: 0 },
      { id: 2, name: 'Леня', status: 0 },
      { id: 3, name: 'Леха', status: 0 },
      { id: 4, name: 'Руслан', status: 0 },
      { id: 5, name: 'Стас', status: 0 },
    ]);
  },

  chageStatus: function(req, res) {
    res.send();
    sails.sockets.blast("chage-status", req.body);
  },

  pingAll: function(req, res) {
    res.send();
    sails.sockets.blast("pingAll");
  },
};
