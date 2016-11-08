describe('hello component', () => {
  beforeEach(module('app', $provide => {
    $provide.factory('app', () => {
      return {
        templateUrl: 'app/hello.html'
      };
    });
  }));
  it('should render hello world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<app>Loading...</app>')($rootScope);
    $rootScope.$digest();

  }));
});
