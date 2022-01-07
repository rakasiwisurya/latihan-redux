import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";
export const ADD_KONTAK = "ADD_KONTAK";
export const DELETE_KONTAK = "DELETE_KONTAK";

export const getListKontak = () => {
  return (dispatch) => {
    // loading
    dispatch({
      type: "GET_LIST_KONTAK",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // getAPI
    axios({
      method: "GET",
      url: "http://localhost:3004/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        // success get API
        dispatch({
          type: "GET_LIST_KONTAK",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get API
        dispatch({
          type: "GET_LIST_KONTAK",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const addKontak = (data) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: "ADD_KONTAK",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // getAPI
    axios({
      method: "POST",
      url: "http://localhost:3004/kontaks",
      timeout: 120000,
      data,
    })
      .then((response) => {
        // success get API
        dispatch({
          type: "ADD_KONTAK",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get API
        dispatch({
          type: "ADD_KONTAK",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const deleteKontak = (id) => {
  return (dispatch) => {
    // loading
    dispatch({
      type: "DELETE_KONTAK",
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    // getAPI
    axios({
      method: "DELETE",
      url: "http://localhost:3004/kontaks/" + id,
      timeout: 120000,
    })
      .then((response) => {
        // success get API
        dispatch({
          type: "DELETE_KONTAK",
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        // failed get API
        dispatch({
          type: "DELETE_KONTAK",
          payload: {
            loading: false,
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
