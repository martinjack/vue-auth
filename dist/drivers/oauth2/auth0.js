/*!
 * @jackmartin/vue-auth v4.2.2
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global.VueAuth = factory());
}(this, (function () { 'use strict';

    var auth0 = {
      url: '',
      params: {
        client_id: '',
        redirect_uri: 'login/auth0',
        response_type: 'code',
        scope: 'openid profile email',
        state: {}
      }
    };

    return auth0;

})));
