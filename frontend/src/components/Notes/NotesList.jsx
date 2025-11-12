import React, { useEffect, useState } from "react";
import API from "../../services/api";

export default function NotesList({ onEdit }) {
  const [notes, setNotes] = useState([]);
  const [q, setQ] = useState("");

  useEffect(()=>{ fetchNotes(); }, []);

  async function fetchNotes() {
    const res = await API.get("/notes", { params: q ? { q } : {} });
    setNotes(res.data);
  }
  async function deleteNote(id) {
    await API.delete(`/notes/${id}`);
    fetchNotes();
  }

  return (
    <div>
      <div style={{display:"flex", gap:8}}>
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="search..." />
        <button onClick={fetchNotes}>Search</button>
        <button onClick={()=>onEdit(null)}>New</button>
      </div>
      <ul>
        {notes.map(n=>(
          <li key={n.id}>
            <strong>{n.title || "(untitled)"}</strong>
            <div>{n.content?.slice(0,120)}</div>
            <div>
              <button onClick={()=>onEdit(n)}>Edit</button>
              <button onClick={()=>deleteNote(n.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
