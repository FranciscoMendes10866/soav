/**
 * This commented code is an example of what you would normally do in your reducers.
 * Just because it's commented doesn't mean it's an incorrect approach.
 */

// export default (state, { payload, type }) => {
//   switch (type) {
//     case "ADD_BOOK":
//       return {
//         ...state,
//         books: {
//           list: [...state.books.list, payload],
//         },
//       };
//     case "REMOVE_BOOK":
//       return {
//         ...state,
//         books: {
//           list: state.books.list.filter((book) => book.id !== payload),
//         },
//       };
//     case "UPDATE_BOOK":
//       return {
//         ...state,
//         books: {
//           list: state.books.list.map((book) => {
//             if (book.id === payload.id) {
//               return payload;
//             }
//             return book;
//           }),
//         },
//       };
//     default:
//       return state;
//   }
// };


/**
 * This code is an example of a different approach using immer.
 */

import produce from "immer";

export default (state, { payload, type }) => {
  switch (type) {
    case "ADD_BOOK":
      return produce(state, (draft) => {
        draft.books.list.push({ ...payload });
      });
    case "REMOVE_BOOK":
      return produce(state, (draft) => {
        const bookIndex = draft.books.list.findIndex(
          (book) => book.id === payload
        );
        draft.books.list.splice(bookIndex, 1);
      });
    case "UPDATE_BOOK":
      return produce(state, (draft) => {
        const book = draft.books.list.find((book) => book.id === payload.id);
        book.title = payload.title;
        book.author = payload.author;
      });
    default:
      return state;
  }
};
