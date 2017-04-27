/**
 * PageController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var people = [
      { id: 1, name: 'Денис', status: 1 },
      { id: 2, name: 'Леня', status: 1 },
      { id: 3, name: 'Леха', status: 1 },
      { id: 4, name: 'Руслан', status: 1 },
      { id: 5, name: 'Стас', status: 1 },
    ];

module.exports = {

  index: function(req, res) {
    res.view('page');
  },

  users: function(req, res) {
    res.send(people);
  },

  chageStatus: function(req, res) {
    res.send();
    people = req.body;
    var allgo = _.some(people, function(people) {
      return people.status == 1;
    });
    if (!allgo) {
      sails.sockets.blast("gogo", people);
    }
    sails.sockets.blast("chage-status", people);
  },

  pingAll: function(req, res) {
    res.send();
    sails.sockets.blast("pingAll");
  },
};
