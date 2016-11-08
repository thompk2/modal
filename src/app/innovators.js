angular
  .module('app')
  .component('app', {
    templateUrl: 'app/innovators.html',
    controller() {
      this.innovators = [{
        name: 'Ada Lovelace',
        born: 1815,
        died: 1852,
        description: 'Prophet of Computer Age'
      }, {
        name: 'Edith Clarke',
        born: 1883,
        died: 1959,
        description: 'Keeps Current, Takes Charge'
      }, {
        name: 'Grace Hopper',
        born: 1906,
        died: 1992,
        description: '“Amazing Grace,” Queen of Software'
      }, {
        name: 'Evelyn Boyd Granville',
        born: 1924,
        description: 'Race, Space, & Education Advocacy'
      }, {
        name: 'Sister Mary Kenneth Keller',
        born: 1913,
        died: 1985,
        description: 'First Female Computer Science PhD'
      }, {
        name: 'Susan Kare',
        born: 1954,
        description: 'The Apple Icon'
      }, {
        name: 'Carol Shaw',
        born: 1955,
        description: 'Atari Game Developer'
      }, {
        name: 'Radia Perlman',
        born: 1951,
        description: '“Don’t Call Me Mother of the Internet”'
      }];
    }
  });
