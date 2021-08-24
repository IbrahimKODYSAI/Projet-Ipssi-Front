import axios from 'axios';
import {
  GET_ONE_PRODUCT,
  setOneProduct,
  GET_ALL_USERS,
  setAllUsers,
  GET_USER_INFO,
  ON_SUBMIT_REGISTER,
  ON_SUBMIT_LOGIN,
  ON_SUBMIT_COMMENTARY,
  GET_ONE_PRODUCT_COMMENTARIES,
  getOneProductCommentaries,
  setCommentList,
  setUsersLogin,
  cleanRegisterFields,
  setUserInfo,
  GET_ALL_PRODUCTS,
  setAllProducts,
} from '../store/reducer';
const logMiddleware = store => next => (action) => {
    // console.log('Je suis le middleware, et je laisse passer cette action: ', action);
    next(action);
  
    switch (action.type) {
      case ON_SUBMIT_REGISTER:

        axios.post('http://localhost:3001/api/user/register', {
          firstname: store.getState().registerFirstName,
          lastname: store.getState().registerLastName,
          username: store.getState().registerUserName,
          email: store.getState().registerEmail,
          password: store.getState().registerPassword,
          passwordConfirm: store.getState().registerPasswordConfirm
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
        axios.post('http://localhost:3001/api/user/login', {
          email: store.getState().loginEmail,
          password: store.getState().loginPassword,
        })
          .then((response) => {
            store.dispatch(setUsersLogin(response.data.token));
            sessionStorage.setItem('token', JSON.stringify(store.getState().token));
            window.location.href = '/';
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message, 'Username or Password does not exists');
            console.error(error.response);
          });
        break;
      case GET_ALL_USERS:
        axios.get('http://localhost:3001/api/user/all-users', {
          headers: {
            Authorization: JSON.parse(sessionStorage.getItem('token'))
          },
        })
        .then(response => {
          store.dispatch(setAllUsers(response.data))
        })
        .catch(error => {
          console.error(error.response)
        });
        break;
      case GET_USER_INFO:
        axios.get('http://localhost:3001/api/user', {
          headers: {
            Authorization: JSON.parse(sessionStorage.getItem('token'))
          },
        })
        .then(response => {
          const { user } = response.data
          console.log(user.avatar)
          store.dispatch(setUserInfo(
            user.username,
            user.firstname,
            user.lastname,
            user.email,
            user.isAdmin,
            user.avatar,
          ));
        })
        .catch(error => {
          console.error(error.message);
          console.error(error.response);
        });
        break;
      case GET_ALL_PRODUCTS:
        axios.get('http://localhost:3001/api/product')
        .then((response) => {
          console.log(response.data)
          store.dispatch(setAllProducts(response.data))
          console.log('sucess')
        })
        .catch((error) => {
          console.error(error.message)
        });
        break;
      case GET_ONE_PRODUCT:
        console.log('action', action);
        axios.post('http://localhost:3001/api/product/details', {
          productId: action.productId,
        })
          .then((response) => {
            console.log(response.data);
            store.dispatch(setOneProduct(response.data));
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message);
            console.error(error.response);
          });
        break;
      case ON_SUBMIT_COMMENTARY:
        axios.request({
          url: 'http://localhost:3001/api/comment/create',
          method: 'post',
          data: {
            productId: store.getState().oneProduct._id,
            commentary: store.getState().newComment,
          },
          headers: {
            Authorization: JSON.parse(sessionStorage.getItem('token'))
          }
        })
          .then((response) => {
            store.dispatch(getOneProductCommentaries(store.getState().oneProduct._id))
            console.log(response.data);
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message);
            console.error(error.response);
          });
        break;
      case GET_ONE_PRODUCT_COMMENTARIES:
        axios.post('http://localhost:3001/api/comment/get-commentaries', {
          productId: action.productId,
        })
          .then((response) => {
            console.log(response.data)
            store.dispatch(setCommentList(response.data))
            store.dispatch(cleanRegisterFields());
          })
        break;
      default:
         next(action);
    }
  };
  
  export default logMiddleware;
  