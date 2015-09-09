module.exports = function() {
  return {
    restrict: 'EA',
    replace: true,
    controller: 'PiechartCtrl',
    template: 
      '<svg ng-attr-height="{{radius * 2 + 10}}" ng-attr-width="{{radius * 2 + 10}}">' +
        '<g ng-attr-transform="translate({{radius}}, {{radius}}), scale({{radius}})"' +
          ' ng-attr-stroke-width="{{1 / radius}}"' +
          ' ng-transclude>' +
        '</g>' +
      '</svg>',
    transclude: true,
    scope: {
      radius: '@'
    }
  };
};