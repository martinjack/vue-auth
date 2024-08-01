/*!
 * @jackmartin/vue-auth v4.2.2
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

'use strict';

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

module.exports = auth0;
