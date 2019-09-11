const initialState = {
  bag: [],
  bagHidden: true
};

const ADD_NEW_ITEM = "ADD_NEW_ITEM";
const HIDE_BAG = "HIDE_BAG";

export function addItem(item) {
  return {
    type: ADD_NEW_ITEM,
    payload: item
  };
}

export function hideBag(item) {
    return {
      type: HIDE_BAG,
      payload: item
    };
}

export default function reducer(state = initialState, action) {
  // console.log("action payload", action.payload);
  switch (action.type) {
    case ADD_NEW_ITEM:
      //   console.log(action.payload)
      return { ...state, bag: [...state.bag, action.payload] };

      case HIDE_BAG:
          // console.log(state, action.payload)
        return { ...state, bagHidden: action.payload}

    default:
      return state;
  }
}
