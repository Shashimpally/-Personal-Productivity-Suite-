import React, { useEffect, useState } from "react";
import API from "../../services/api";

export default function NoteEditor({ note, onSaved }) {
  const [n, setN] = useState(note || { title: "", content: "", tags: "" });

  useEffect(()=> setN(note || { title: "", content: "", tags: "" }), [note]);

  async function save() {
    if (n.id) {
      await API.put(`/notes/${n.id}`, n);
    } else {
      await API.post("/notes", n);
    }
    onSaved();
  }

  return (
    <div>
      <input placeholder="Title" value={n.title} onChange={e=>setN({...n, title:e.target.value})} />
      <textarea placeholder="Content" value={n.content} onChange={e=>setN({...n, content:e.target.value})} rows={8} />
      <input placeholder="tags (comma)" value={n.tags} onChange={e=>setN({...n, tags:e.target.value})} />
      <div>
        <button onClick={save}>Save</button>
      </div>
    </div>
  );
}
