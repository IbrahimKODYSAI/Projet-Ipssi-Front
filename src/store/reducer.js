const initialState = {
  loginEmail: "",
  loginPassword: "",
  registerLastName: "",
  registerFirstName: "",
  registerUserName: "",
  registerEmail: "",
  registerPassword: "",
  email: "",

  contactFirstName: "",
  contactLastName: "",
  contactEmail: "",
  contactMessage: "",

  userInfo: {
    firstName: "",
    lastName: "",
    userName: "",
    mail: "",
    avatar: "",
    role: "",
  },

  inputSearchValue: "",

  foundProducts: [],

  products: [
    {
      id: "1",
      description: "",
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
      content:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      count: 1,
      date: "Mar 12 2012 10:00:00 AM",
    },
    {
      id: "2",
      description: "",
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
      content:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      count: 1,
      date: "Mar 12 2012 10:00:00 AM",
    },
    {
      id: "3",
      description: "",
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
      content:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      count: 1,
      date: "Mar 12 2012 10:00:00 AM",
    },
    {
      id: "4",
      description: "NEW BALANCE Baskets GM500TRS Gris/Bleu Mixte",
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
      content:
        "● Baskets pour hommes● A lacets ● Qualité haute ● Contrefort Rembourré ● Languette rembourrée ● Semelle intermédiaire en mousse EVA● Marque Slazenger ● Tige: Cuir, Doublure: textile, Semelle: Synthétique● Essuyez avec un chiffon humide",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      count: 1,
      date: "Mar 12 2012 10:00:00 AM",
    },
    {
      id: "5",
      description: "",
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
      content:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      count: 1,
      date: "Mar 12 2012 10:00:00 AM",
    },
    {
      id: "6",
      description: "",
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
      content:
        "Sandales d'été pour hommes, tongs d'extérieur, de plage, bon marché, nouvelle collection 2020",
      colors: ["red", "black", "crimson", "teal"],
      size: ["40", "40 1/2", "41 1/2", "42", "43"],
      rating: [4, 4, 4, 5, 2, 5, 5, 1, 3, 5],
      count: 1,
      date: "Mar 12 2012 10:00:00 AM",
    },
  ],
  sortedProducts: [],
  oneProduct: {
    id: "",
    description: "",
    title: "",
    price: null,
    images: [],
    content: "",
    colors: [],
    size: [],
    rating: [],
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
  creatProductTitle: "",
  creatProductDescription: "",
  creatProductContent: "",
  creatProductPrice: 0,
};

export const GET_ONE_PRODUCT = "GET_ONE_PRODUCT";
export const ON_SUBMIT_REGISTER = "ON_SUBMIT_REGISTER";
export const ON_SUBMIT_LOGIN = "ON_SUBMIT_LOGIN";
export const GET_USER_INFO = "GET_USER_INFO";
export const ON_SUBMIT_CONTACT = "ON_SUBMIT_CONTACT";

const ON_INPUT_CHANGE = "ON_INPUT_CHANGE";
const SET_ONE_PRODUCT = "SET_ONE_PRODUCT";
const SET_USER_LOGIN = "SET_USER_LOGIN";
const SET_USER_INFO = "SET_USER_INFO";
const CLEAN_REGISTER_FIELD = "CLEAN_REGISTER_FIELD";
const SET_ACTIVE_ITEM = "SET_ACTIVE_ITEM";
const SET_ACTIVE_ITEM_USER_MENU = "SET_ACTIVE_ITEM_USER_MENU";
const SET_FOUND_PRODUCT = "SET_FOUND_PRODUCT";
const SET_SORTED_PRODUCT = "SET_SORTED_PRODUCT";
const SET_RATING_PRODUCT = "SET_RATING_PRODUCT";

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
          mail: action.mail,
          role: action.role,
          avatar: action.avatar,
        },
      };
    case SET_ONE_PRODUCT:
      return {
        ...state,
        oneProduct: action.oneProductFound,
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
          .find((element) => element.id === action.productId)
          .rating.push(action.ratingValue),
      };
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
export const onInputChange = (name, value) => ({
  type: ON_INPUT_CHANGE,
  name,
  value,
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
export const onSubmitContact = () => ({
  type: ON_SUBMIT_CONTACT,
});
export const getUserInfo = () => ({
  type: GET_USER_INFO,
});
export const setUserInfo = (
  userName,
  firstName,
  lastName,
  mail,
  role,
  avatar
) => ({
  type: SET_USER_INFO,
  userName,
  firstName,
  lastName,
  mail,
  role,
  avatar,
});
export default reducer;
