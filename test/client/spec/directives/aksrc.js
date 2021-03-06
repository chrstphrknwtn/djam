'use strict';

describe('Directive: akSrc', function () {

  // load the directive's module
  beforeEach(module('akurraApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ak-src></ak-src>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the akSrc directive');
  }));
});
