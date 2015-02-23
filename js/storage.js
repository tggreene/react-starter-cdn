(function (app) {
    "use strict";
    app.Storage = function (method) {
        var local = function (namespace, data) {
            if (data) {
                return localStorage.setItem(namespace, JSON.stringify(data));
            }

            var store = localStorage.getItem(namespace);
            return (store && JSON.parse(store)) || [];
        };

        switch (method) {
            case 'local':
                return local;
            default:
                return local;
        }
    };


})(app = window.app || {});