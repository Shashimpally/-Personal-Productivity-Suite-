from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from .database import SessionLocal, engine, Base
from . import models, crud, schemas

# create tables
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Productivity Suite API")

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/api/notes", response_model=list[schemas.NoteOut])
def list_notes(q: str = None, db: Session = Depends(get_db)):
    return crud.get_notes(db, q=q)

@app.post("/api/notes", response_model=schemas.NoteOut)
def create_note(note: schemas.NoteCreate, db: Session = Depends(get_db)):
    return crud.create_note(db, note)

@app.get("/api/notes/{note_id}", response_model=schemas.NoteOut)
def get_note(note_id: int, db: Session = Depends(get_db)):
    n = crud.get_note(db, note_id)
    if not n:
        raise HTTPException(status_code=404, detail="Note not found")
    return n

@app.put("/api/notes/{note_id}", response_model=schemas.NoteOut)
def update_note(note_id: int, note: schemas.NoteUpdate, db: Session = Depends(get_db)):
    updated = crud.update_note(db, note_id, note)
    if not updated:
        raise HTTPException(status_code=404, detail="Note not found")
    return updated

@app.delete("/api/notes/{note_id}")
def delete_note(note_id: int, db: Session = Depends(get_db)):
    deleted = crud.delete_note(db, note_id)
    if not deleted:
        raise HTTPException(status_code=404, detail="Note not found")
    return {"ok": True}

@app.post("/api/timer/session")
def create_session(s: schemas.TimerSessionIn, db: Session = Depends(get_db)):
    return crud.create_timer_session(db, s)
