import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

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
  ON_SUBMIT_CART,
} from '../store/reducer';

toast.configure()
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
            toast.success("Inscription réussi", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000
            })
            store.dispatch(cleanRegisterFields());
            window.location.href = '/login';
          })
          // en cas d'echec : catch
          .catch((error) => {
            console.error(error.message);
            toast.error(error.response.data, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000
            })
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
            toast.success("Connecté", {
              position: toast.POSITION.TOP_RIGHT,
              autoClose: 3000
            })
          })
          // en cas d'echec : catch
          .catch((error) => {
            toast.error(error.response.data, {
              position: toast.POSITION.TOP_CENTER,
              autoClose: 3000
            })
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
          store.dispatch(setUserInfo(
            user.username,
            user.firstname,
            user.lastname,
            user.email,
            user.isAdmin,
            user.avatar,
            user.password
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
          store.dispatch(setAllProducts(response.data))
        })
        .catch((error) => {
          console.error(error.message)
        });
        break;
      case GET_ONE_PRODUCT:
        axios.post('http://localhost:3001/api/product/details', {
          productId: action.productId,
        })
          .then((response) => {
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
            store.dispatch(setCommentList(response.data))
            store.dispatch(cleanRegisterFields());
          })
        break;
      case ON_SUBMIT_CART:
        axios.request({
          url: 'http://localhost:3001/api/user/cart',
          method: 'put',
          data: {
            cartItems: store.getState().cartItems
          },
          headers: {
            Authorization: JSON.parse(sessionStorage.getItem('token'))
          }
        })
        .then((response) => {
          // toast.success("product added to cart", {
          //   position: toast.POSITION.BOTTOM_CENTER,
          //   autoClose: 2000
          // })
        })
        .catch((error) => {
          console.log(error.response);
        });
      break;
      default:
         next(action);
    }
  };
  
  export default logMiddleware;
  