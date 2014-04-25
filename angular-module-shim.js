(function(angular) {

    'use strict';

    if ( !angular ) {
        throw new Error('angular-module-shim: Missing Angular');
    }

    var origFn = angular.module;
    var hash = {};

    angular.module = function(name,requires,configFn) {

        var registered = hash[name];
        var module;

        if ( registered ) {
            module = origFn(name);
            if ( requires ) module.requires.push.apply(module.requires,requires);
        } else {
            hash[name] = true;
            module = origFn(name,requires,configFn);
        }

        return module;
    };
})(window.angular);
