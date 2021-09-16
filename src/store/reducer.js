const initialState = {
  loginEmail: "",
  loginPassword: "",
  registerLastName: "",
  registerFirstName: "",
  registerUserName: "",
  registerEmail: "",
  registerPassword: "",
  registerPasswordConfirm: "",
  email: "",

  newComment: "",
  commentList: [
  ],

  contactFirstName: "",
  contactLastName: "",
  contactEmail: "",
  contactMessage: "",

  userInfo: {
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    avatar: [
      {
        fileName: "",
        filePath: "",
        filetype: "",
        fileSize: "",
      }
    ],
    isAdmin: false
  },

  Users: [],

  inputSearchValue: "",

  foundProducts: [],

  cartItems: [],

  products: [
    {
      _id: "1",
      name: "",
      title: "Chaussures Vulcanisé",
      price: 24.99,
      imgbig:
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      images: [
        "https://ae04.alicdn.com/kf/Hbfe55f23fcdc4ff5843cb54fa28c7a13c.jpg_200x200.jpg_Q90.jpg_.webp",
        "https://www.cdiscount.com/pdt2/0/9/7/2/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/3/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/4/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      ],
      description:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      stock: 1,
    },
    {
      _id: "2",
      name: "",
      title: "Chaussures d'été, mocassins de tennis",
      price: 35.99,
      imgbig:
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      images: [
        "https://ae01.alicdn.com/kf/H4b42fc637f4a40b2a481b83d4e658596t.jpg_200x200.jpg_Q90.jpg_.webp",
        "https://www.cdiscount.com/pdt2/0/9/7/2/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/3/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/4/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      ],
      description:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      stock: 1,
    },
    {
      _id: "3",
      name: "",
      title: "Montre de sport connectée",
      price: 10.99,
      imgbig:
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      images: [
        "https://ae01.alicdn.com/kf/U8f2a56f662b243b9bc7c42f29e9d915ds.jpg_200x200.jpg_Q90.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/2/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/3/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/4/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      ],
      description:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      stock: 1,
    },
    {
      _id: "4",
      name: "NEW BALANCE Baskets GM500TRS Gris/Bleu Mixte",
      title: "New balance Baskets ",
      price: 39.99,
      imgbig:
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      images: [
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/2/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/3/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/4/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      ],
      description:
        "● Baskets pour hommes● A lacets ● Qualité haute ● Contrefort Rembourré ● Languette rembourrée ● Semelle intermédiaire en mousse EVA● Marque Slazenger ● Tige: Cuir, Doublure: textile, Semelle: Synthétique● Essuyez avec un chiffon humide",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      stock: 1,
    },
    {
      _id: "5",
      name: "",
      title: "Bracelet en chaîne cubaine pour hommes",
      price: 74.99,
      imgbig:
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      images: [
        "https://ae01.alicdn.com/kf/H32841077b52542c1beab1e1e3730f51fb/2020-New-Trendy-Cuban-Chain-Men-Bracelet-Classic-Stainless-Steel-3-5-7mm-Width-Chain-Bracelet.jpg_480x480q90.jpg_.webp",
        "https://www.cdiscount.com/pdt2/0/9/7/2/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/3/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/4/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      ],
      description:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      stock: 1,
    },
    {
      _id: "6",
      name: "",
      title: "Montre de luxe pour hommes",
      price: 29.99,
      imgbig:
        "https://www.cdiscount.com/pdt2/0/9/7/1/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      images: [
        "https://ae01.alicdn.com/kf/Hda94ca41d6514a2da4ea25526432a7aco/Men-Watches-2021-Luxury-Male-Elegant-Ultra-Thin-Watch-Men-Business-Stainless-Steel-Mesh-Quartz-Watch.jpg_480x480q90.jpg_.webp",
        "https://www.cdiscount.com/pdt2/0/9/7/2/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/3/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
        "https://www.cdiscount.com/pdt2/0/9/7/4/700x700/mp30665097/rw/new-balance-baskets-gm500trs-gris-bleu-mixte.jpg",
      ],
      description:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      stock: 1,
    },
  ],
  sortedProducts: [],
  oneProduct: {
    id: "",
    description: "",
    title: "",
    price: null,
    images: [
      {
        fileName: "",
        filePath: "",
        filetype: "",
        fileSize: "",
      }
    ],
    content: "",
    comments: [],
    colors: [],
    ratings: [],
    count: null,
    date: "",
  },
  categories: [
    {
      id: "1",
      name: "electromenager",
      image: "",
    },
    {
      id: "4",
      name: "informatique",
      image: "",
    },
    {
      id: "2",
      name: "chaussure",
      image: "",
    },
    {
      id: "3",
      name: "bijoux",
      image: "",
    },
  ],
  activeItemUserMenu: false,
  activeItemIndex: 0,
  toggleSideDrawer: false,

  createProductName: "",
  createProductTitle: "",
  createProductDescription: "",
  createProductPrice: 0,
  createProductCategory: "",
  createProductCategory2: "",
  createProductCategory3: "",
  createProductCategory4: "",
  createProductImage: "",
  createProductImage2: "",
  createProductImage3: "",
  createProductImage4: "",
  createProductColor: "",
  createProductColor2: "",
  createProductColor3: "",
  createProductColor4: "",
  createProductImages: [],
  creatProductStock: 0,


};
export const ON_SUBMIT_CART = "ON_SUBMIT_CART";
export const GET_ONE_PRODUCT_COMMENTARIES = "GET_ONE_PRODUCT_COMMENTARIES";
export const ON_SUBMIT_REGISTER = "ON_SUBMIT_REGISTER";
export const ON_SUBMIT_LOGIN = "ON_SUBMIT_LOGIN";
export const GET_ALL_USERS = "GET_ALL_USERS"
export const GET_USER_INFO = "GET_USER_INFO";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const ON_SUBMIT_COMMENTARY = "ON_SUBMIT_COMMENTARY";

const SET_TOGGLE_SIDEDRAWER = "SET_TOGGLE_SIDEDRAWER";
const SET_CART_ITEMS = "SET_CART_ITEMS";
const SET_COMMENT_LIST = "SET_COMMENT_LIST";
const SET_ONE_PRODUCT = "SET_ONE_PRODUCT";
const SET_ALL_PRODUCTS = "SET_ALL_PRODUCTS";
const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const ON_INPUT_PRODUCT_IMAGE_CHANGE = "ON_INPUT_PRODUCT_IMAGE_CHANGE";
const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_USER_INFO = "SET_USER_INFO";
const CLEAN_REGISTER_FIELD = "CLEAN_REGISTER_FIELD";
const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";
const SET_ACTIVE_ITEM_USER_MENU = "SET_ACTIVE_ITEM_USER_MENU";
const SET_FOUND_PRODUCT = "SET_FOUND_PRODUCT";
const SET_SORTED_PRODUCT = "SET_SORTED_PRODUCT";
const SET_RATING_PRODUCT = "SET_RATING_PRODUCT";
const SET_ALL_USERS = "SET_ALL_USERS";

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItemIndex: action.index,
      };
    case SET_ACTIVE_ITEM_USER_MENU:
      return {
        ...state,
        activeItemUserMenu: !state.activeItemUserMenu,
      }
    case SET_TOGGLE_SIDEDRAWER:
      return {
        ...state,
        toggleSideDrawer: action.valuetrue,
      }
    case ON_INPUT_PRODUCT_IMAGE_CHANGE:
      return {
        ...state,
        createProductImages: action.imageObject,
      }
    case ON_INPUT_CHANGE:
      return {
        ...state,
        [action.name]: action.value,
      };
    case SET_USER_LOGIN:
      return {
        ...state,
        token: action.token,
      };
    case SET_USER_INFO:
      return {
        ...state,
        userInfo: {
          firstName: action.firstName,
          lastName: action.lastName,
          userName: action.userName,
          email: action.email,
          isAdmin: action.isAdmin,
          avatar: action.avatar
        },
      };
    case SET_ALL_USERS:
      return {
        ...state,
        users: action.allUsers
      }
    case SET_ALL_PRODUCTS:
      return {
        ...state,
        products: action.allProducts
      };
    case SET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.oneProductFound,
      };
    case SET_COMMENT_LIST:
      return {
        ...state,
        commentList: action.commentListFound
      };
    case SET_SORTED_PRODUCT:
      return {
        ...state,
        sortedProducts: action.sortProducts,
      };
    case SET_FOUND_PRODUCT:
      return {
        ...state,
        foundProducts: action.foundProducts,
      };
    case SET_RATING_PRODUCT:
      return {
        ...state,
        rating: state.products
          .find((element) => element._id === action.productId)
          .rating.push(action.ratingValue),
      };
    case SET_CART_ITEMS:
      return {
        ...state,
        cartItems: action.cart
      }
    case CLEAN_REGISTER_FIELD: {
      return {
        ...state,
        loginEmail: "",
        loginPassword: "",
        registerLastName: "",
        registerFirstName: "",
        registerUserName: "",
        registerEmail: "",
        registerPassword: "",
        registerPasswordConfirm: "",
        newComment: "",
      };
    }
    default:
      return state;
  }
};

export const setActiveItem = (index) => ({
  type: SET_ACTIVE_ITEM,
  index,
});
export const setToggleSideDrawer = (valuetrue) => ({
  type: SET_TOGGLE_SIDEDRAWER,
  valuetrue
})
export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
});
export const onInputImageChange = (imageObject) => ({
  type: ON_INPUT_PRODUCT_IMAGE_CHANGE,
  imageObject
})
export const getAllProducts = () => ({
  type: GET_ALL_PRODUCTS,
})
export const setAllProducts = (allProducts) => ({
  type: SET_ALL_PRODUCTS,
  allProducts
});
export const setCartItems = (cart) => ({
  type: SET_CART_ITEMS,
  cart
});
export const onSubmitCart = () => ({
  type: ON_SUBMIT_CART,
})
export const getOneProduct = (productId) => ({
  type: GET_ONE_PRODUCT,
  productId,
});
export const setOneProduct = (oneProductFound) => ({
  type: SET_ONE_PRODUCT,
  oneProductFound,
});
export const setFoundProduct = (foundProducts) => ({
  type: SET_FOUND_PRODUCT,
  foundProducts,
});
export const setSortedProducts = (sortProducts) => ({
  type: SET_SORTED_PRODUCT,
  sortProducts,
});
export const setRatingValue = (ratingValue, productId) => ({
  type: SET_RATING_PRODUCT,
  ratingValue,
  productId,
});
export const onSubmitRegister = () => ({
  type: ON_SUBMIT_REGISTER,
});
export const onSubmitLogin = () => ({
  type: ON_SUBMIT_LOGIN,
});
export const cleanRegisterFields = () => ({
  type: CLEAN_REGISTER_FIELD,
});
export const setUsersLogin = (token) => ({
  type: SET_USER_LOGIN,
  token,
});
export const onSubmitCemmentary = () => ({
  type: ON_SUBMIT_COMMENTARY,
});
export const getOneProductCommentaries = (productId) => ({
  type: GET_ONE_PRODUCT_COMMENTARIES,
  productId
})
export const setCommentList = (commentListFound) => ({
  type: SET_COMMENT_LIST,
  commentListFound,
})
export const getUserInfo = () => ({
  type: GET_USER_INFO,
});
export const getAllUsers = () => ({
  type: GET_ALL_USERS,
})
export const setAllUsers = (allUsers) => ({
  type: SET_ALL_USERS,
  allUsers
});
export const setUserInfo = (
  userName,
  firstName,
  lastName,
  email,
  isAdmin,
  avatar
) => ({
  type: SET_USER_INFO,
  userName,
  firstName,
  lastName,
  email,
  isAdmin,
  avatar
});
export default reducer;
