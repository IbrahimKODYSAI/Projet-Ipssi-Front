import axios from 'axios';
import {
  GET_ONE_PRODUCT,
  setOneProduct,
  ON_SUBMIT_REGISTER,
  ON_SUBMIT_LOGIN,
  ON_SUBMIT_CONTACT,
  setUsersLogin,
  cleanRegisterFields,
} from '../store/reducer';
const logMiddleware = store => next => (action) => {
    // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
    next(action);
  
    switch (action.type) {
      case ON_SUBMIT_REGISTER:
        axios.post('http://localhost:3000/api/users/register', {
          username: store.getState().registerUserName,
          firstname: store.getState().registerFirstName,
          lastname: store.getState().registerLastName,
          mail: store.getState().registerEmail,
          password: store.getState().registerPassword,
        })
          .then((response) => {
            // console.log(response.data);
            store.dispatch(cleanRegisterFields());
            window.location.href = '/login';
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message);
            console.error(error.response);
          });
        break;
      case ON_SUBMIT_LOGIN:
        axios.post('http://localhost:3000/api/users/login', {
          mail: store.getState().loginEmail,
          password: store.getState().loginPassword,
        })
          .then((response) => {
            store.dispatch(setUsersLogin(response.data.token));
            sessionStorage.setItem('token', JSON.stringify(store.getState().token));
            window.location.href = '/user';
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message, 'Username or Password does not exists');
            console.error(error.response);
          });
        break;
      case GET_ONE_PRODUCT:
        axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.post(`http://localhost:3000/article/`, {
          productId: action.productId,
        })
          .then((response) => {
            // console.log(response.data);
            store.dispatch(setOneProduct(response.data));
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message);
            console.error(error.response);
          });
        break;
      case ON_SUBMIT_CONTACT:
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        axios.post('http://localhost:3000/api/mailer/', {
          contactFirstName: store.getState().contactFirstName,
          contactLastName: store.getState().contactLastName,
          contactEmail: store.getState().contactEmail,
          contactMessage: store.getState().contactMessage,
        })
          .then((response) => {
            // console.log(response.data);
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message);
            console.error(error.response);
          });
        break;
      default:
         next(action);
    }
  };
  
  export default logMiddleware;
  