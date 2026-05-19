/*!
 * @jackmartin/vue-auth v4.2.3
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueAuth = factory());
}(this, (function () { 'use strict';

  var vueRouter_4_x = {
    init: function () {
      if (!this.plugins.router) {
        return "drivers/router/vue-router.4.x.js: router plugin has not been set.";
      }
    },
    beforeEach: function (routerBeforeEach, transitionEach, setTransitions, getAuthMeta) {
      var _this = this;
      this.plugins.router.beforeEach(function (to, from) {
        setTransitions(to);
        return new Promise(function (resolve) {
          routerBeforeEach.call(_this, function () {
            var auth = getAuthMeta(to);
            transitionEach.call(_this, to, auth, function (redirect) {
              if (!redirect) {
                resolve(true);
                return;
              }
              resolve(redirect);
            });
          });
        });
      });
    },
    routerReplace: function (data) {
      var router = this.plugins.router;
      router.replace.call(router, data);
    },
    routerGo: function (data) {
      var router = this.plugins.router;
      (router.push || router.go).call(router, data).catch(function (err) {});
    }
  };

  return vueRouter_4_x;

})));
