// 0 -- меня нет, 1 -- не готов, 2 -- го

var vm = new Vue({
  el: '.app',
  data: {
    people: null,
  },

  methods: {
    ping: function(person) {
      axios.post('/pingAll');
    },
    pingAll: function(people) {
      axios.post('/pingAll');
    },
  },

  mounted: function() {
    var vm = this;
    axios.get('/users')
      .then(function(response) {
        vm.people = response.data;
      })
      .catch(function(error) {
        console.log(error);
      });
    io.socket.on("chage-status", function(data) {
      if (!_.isEqual(data, vm.people)) {
        vm.people = data;
      }
    });
    io.socket.on("pingAll", function() {
      toastr.info('Сними трубку!');
    });
  },

  watch: {
    people: {
      deep: true,
      handler: function () {
        axios.post('/chage-status', this.people)
          .catch(function(error) {
            console.log(error);
          });
      },
    },
  },

});
