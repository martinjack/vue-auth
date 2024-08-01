/*!
 * @jackmartin/vue-auth v4.2.2
 * https://websanova.com/docs/vue-auth
 * Released under the MIT License.
 */

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

export default auth0;
