import { addKontak, getListKontak } from "../../actions/kontakAction";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function AddKontak() {
  const [nama, setNama] = useState("");
  const [nohp, setNohp] = useState("");

  const { addKontakResult } = useSelector((state) => {
    return state.KontakReducer;
  });
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addKontak({ nama, nohp }));
  };

  useEffect(() => {
    if (addKontakResult) {
      dispatch(getListKontak());
      setNama("");
      setNohp("");
    }
  }, [addKontakResult, dispatch]);

  return (
    <div>
      <h4>Add Kontak</h4>
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
