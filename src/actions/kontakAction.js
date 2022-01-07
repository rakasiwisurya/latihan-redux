import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
  console.log("2. Masuk Action");
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
      url: "http://localhost:3000/kontaks",
      timeout: 120000,
    })
      .then((response) => {
        // success get API
        console.log("3. Berhasil dapat data ", response.data);
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
        console.log("3. Gagal dapat data ", error.message);
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
