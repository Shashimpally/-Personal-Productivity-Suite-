from sqlalchemy.orm import Session
from . import models, schemas

def get_notes(db: Session, skip: int = 0, limit: int = 100, q: str = None):
    query = db.query(models.Note)
    if q:
        query = query.filter((models.Note.title.contains(q)) | (models.Note.content.contains(q)))
    return query.offset(skip).limit(limit).all()

def get_note(db: Session, note_id: int):
    return db.query(models.Note).filter(models.Note.id == note_id).first()

def create_note(db: Session, note: schemas.NoteCreate):
    db_note = models.Note(title=note.title, content=note.content, tags=note.tags)
    db.add(db_note)
    db.commit()
    db.refresh(db_note)
    return db_note

def update_note(db: Session, note_id: int, note: schemas.NoteUpdate):
    db_note = get_note(db, note_id)
    if not db_note:
        return None
    db_note.title = note.title
    db_note.content = note.content
    db_note.tags = note.tags
    db.commit()
    db.refresh(db_note)
    return db_note

def delete_note(db: Session, note_id: int):
    db_note = get_note(db, note_id)
    if db_note:
        db.delete(db_note)
        db.commit()
    return db_note

def create_timer_session(db: Session, s: schemas.TimerSessionIn):
    db_s = models.TimerSession(session_type=s.session_type, start=s.start, end=s.end, duration=s.duration)
    db.add(db_s)
    db.commit()
    db.refresh(db_s)
    return db_s
