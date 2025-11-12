from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class NoteBase(BaseModel):
    title: str = ""
    content: str = ""
    tags: Optional[str] = ""

class NoteCreate(NoteBase):
    pass

class NoteUpdate(NoteBase):
    pass

class NoteOut(NoteBase):
    id: int
    created_at: datetime
    updated_at: datetime
    class Config:
        orm_mode = True

class TimerSessionIn(BaseModel):
    session_type: str
    start: datetime
    end: datetime
    duration: int
