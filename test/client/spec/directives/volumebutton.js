'use strict';

describe('Directive: volumeButton', function () {

  // load the directive's module
  beforeEach(module('akurraApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<volume-button></volume-button>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the volumeButton directive');
  }));
});
