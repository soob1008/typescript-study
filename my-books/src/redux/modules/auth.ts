import { createActions, handleActions } from "redux-actions";
//타입 설정
interface AuthState {
  token: string | null;
  loading: boolean;
  error: Error | null;
}

//초기값
const initialState: AuthState = {
  token: null,
  loading: false,
  error: null,
};

//prefix
const prefix = "my-books/auth";

export const { pending, success, fail } = createActions(
  "PENDING",
  "SUCCESS",
  "FAIL",
  { prefix }
);

//리듀서만들기
const reducer = handleActions<AuthState, string>(
  {
    PENDING: (state) => ({
      ...state,
      loading: true,
      error: null,
    }),
    SUCCESS: (state, action) => ({
      token: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action: any) => ({
      ...state,
      loading: false,
      //action.payload를 타입으로 정의하는 것이 어렵다.
      error: action.payload,
    }),
  },
  initialState,
  { prefix }
);

export default reducer;

//saga
export function* authSaga() {
  //saga에서 일어나는 로직
}
