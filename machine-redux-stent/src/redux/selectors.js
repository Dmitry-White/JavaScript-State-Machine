const credentialsSelector = state => state.credentials;

const loadingSelector = state => state.loading;

const userSelector = state => state.user;
const userNameSelector = state => state.user.name;

const errorSelector = state => state.error;
const errorMessageSelector = state => state.error.message;

export {
  credentialsSelector,
  loadingSelector,
  userSelector,
  userNameSelector,
  errorSelector,
  errorMessageSelector
}