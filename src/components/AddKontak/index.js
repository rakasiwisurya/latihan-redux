import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addKontak,
  getListKontak,
  updateKontak,
} from "../../actions/kontakAction";

export default function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");
  const [id, setId] = useState("");

  const { addKontakResult, detailKontakResult, updateKontakResult } =
    useSelector((state) => state.KontakReducer);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (id) {
      dispatch(updateKontak({ id, nama, nohp }));
    } else {
      dispatch(addKontak({ nama, nohp }));
    }
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  useEffect(() => {
    if (detailKontakResult) {
      dispatch(getListKontak());
      setNama(detailKontakResult.nama);
      setNohp(detailKontakResult.nohp);
      setId(detailKontakResult.id);
    }
  }, [detailKontakResult, dispatch]);

  useEffect(() => {
    if (updateKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
      setId("");
    }
  }, [updateKontakResult, dispatch]);

  return (
    <div>
      <h4>{id ? "Edit Kontak" : "Add Kontak"}</h4>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="nama"
          placeholder="e.g. Rakasiwi Surya"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
        />

        <input
          type="text"
          name="noHp"
          placeholder="e.g. 08571xxxxxx"
          value={nohp}
          onChange={(e) => setNohp(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
