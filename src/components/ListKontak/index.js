import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getListKontak,
  deleteKontak,
  detailKontak,
} from "../../actions/kontakAction";

export default function ListKontak() {
  const {
    getListKontakResult,
    getListKontakLoading,
    getListKontakError,
    deleteKontakResult,
  } = useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListKontak());
  }, [dispatch]);

  useEffect(() => {
    if (deleteKontakResult) {
      dispatch(getListKontak());
    }
  }, [deleteKontakResult, dispatch]);

  return (
    <div>
      <h4>List Kontak</h4>
      {getListKontakResult ? (
        getListKontakResult.map((kontak) => {
          return (
            <p key={kontak.id}>
              {kontak.nama} - {kontak.nohp} -{" "}
              <button onClick={() => dispatch(detailKontak(kontak))}>
                Edit
              </button>{" "}
              <button onClick={() => dispatch(deleteKontak(kontak.id))}>
                Hapus
              </button>
            </p>
          );
        })
      ) : getListKontakLoading ? (
        <p>Loading...</p>
      ) : (
        <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
      )}
    </div>
  );
}
