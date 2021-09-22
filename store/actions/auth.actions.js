import { URL_AUTH_API, URL_LOGIN_API } from "../../constants/database";

export const SIGNUP = "SIGNUP";
export const LOGIN = "LOGIN";

export const signup = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_AUTH_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });

    const data = await response.json();

    dispatch({ type: SIGNUP, token: data.idToken, userId: data.localId });
  };
};

export const login = (email, password) => {
  return async dispatch => {
    const response = await fetch(URL_LOGIN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });

    if (!response.ok) {
      const errorResponse = await response.json();
      console.log(errorResponse);
      const errorID = errorResponse.error.message;

      let message = "No se ha podido ingresar";
      if (errorID === "EMAIL_NOT_FOUND")
        message = "Este mail no se encuentra registrado";

      throw { message };
    }

    const data = await response.json();

    dispatch({ type: LOGIN, token: data.idToken, userId: data.localId });
  };
};
