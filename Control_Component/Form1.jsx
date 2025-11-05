import { useState } from "react";

function Form1() {
  let [form1, setForm1] = useState({ fname: "sampleFirst", lname: "sampleLast" });

  return (
    <>
      <label>Enter your first name</label>
      <input
        type="text"
        value={form1.fname}
        onChange={(e) => setForm1({ ...form1, fname: e.target.value })}
      />

      <label>Enter your last name</label>
      <input
        type="text"
        value={form1.lname}
        onChange={(e) => setForm1({ ...form1, lname: e.target.value })}
      />

      <button
        type="button"
        onClick={() => alert(`Welcome ${form1.fname} ${form1.lname}`)}
      >
        Submit
      </button>

      <p>Welcome {form1.fname} {form1.lname}</p>
    </>
  );
}

export default Form1;