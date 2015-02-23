/**
 * Util module for poorly categorised funcationality
 * @return {void}
 */
(function (app) {
    'use strict';

    app.Utils = {
        /**
         * uuid provides a standard v4 random UUID
         * @return {string} uuid
         */
        uuid: function () {
            /* jshint: bitwise:false */
            var i, random;
            var uuid = '';

            for (i = 0; i < 32; i++) {
                random = Math.random() * 64 | 0;
                if (i === 8 || i === 12 || i === 16 || i === 20) {
                    uuid += '-';
                }

                uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16)
            }

            return uuid;
        },

        /**
         * pluralize is a simple natural language function to pluralise
         * collection nouns
         * @param  {int}    count
         * @param  {string} word
         * @return {string}
         */
        pluralize: function (count, word) {
            return (count === 1) ? word : word + 's';
        },

        /**
         * store encases localStorage object with overloaded signature and
         * trivial safety on fetch
         * @param  {string} namespace
         * @param  {*}      data
         * @return {*}
         */
        store: function (namespace, data) {
            if (data) {
                return localStorage.setItem(namespace, JSON.stringify(data));
            }

            var store = localStorage.getItem(namespace);
            return (store && JSON.parse(store)) || [];
        },

        /**
         * extend accepts any number of objects composing their properties
         * together
         * @return {object}
         */
        extend: function () {
            var newObj = {};

            for (var i = 0; i < arguments.length; i++) {
                var obj = arguments[i];
                for (var key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        newObj[key] = obj[key];
                    }
                }
            }

            return newObj;
        }
    };
})(app = window.app || {});
