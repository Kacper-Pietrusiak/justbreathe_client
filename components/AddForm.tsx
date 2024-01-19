import React, { ChangeEvent, FormEvent, useState } from "react";
import { apiUrl } from "@/constants/apiUrl";

const AddForm = () => {
  const [form, setForm] = useState({
    title: " ",
    text: " ",
    isPublished: false,
    createdBy: "Kacper",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch(`${apiUrl}/post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
        }),
      });
    } finally {
      // setLoading(false);
    }

    console.log({ ...form });
  };

  return (
    <div className="border-2 border-black rounded-md p-3 flex items-center flex-col w-screen h-screen ">
      <h1>My Form</h1>
      <form className="flex flex-col w-full h-full" onSubmit={handleSubmit}>
        <label>Tytuł</label>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={(e) => handleChange(e)}
          className="border-[1px] "
        />

        <label>Tekst</label>
        <textarea
          name="text"
          value={form.text}
          onChange={(e) => handleChange(e)}
          className="border-[1px]"
        />

        <label>Opublikowany</label>
        <input
          type="checkbox"
          name="isPublished"
          checked={form.isPublished}
          onChange={() => setForm({ ...form, isPublished: !form.isPublished })}
        />

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
};

export default AddForm;
