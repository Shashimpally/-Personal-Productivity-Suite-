from sqlalchemy import Column, Integer, String, Text, DateTime
from .database import Base
import datetime

class Note(Base):
    __tablename__ = "notes"
    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, default="")
    content = Column(Text, default="")
    tags = Column(String, default="")
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    updated_at = Column(DateTime, default=datetime.datetime.utcnow, onupdate=datetime.datetime.utcnow)

class TimerSession(Base):
    __tablename__ = "timer_sessions"
    id = Column(Integer, primary_key=True, index=True)
    session_type = Column(String)
    start = Column(DateTime)
    end = Column(DateTime)
    duration = Column(Integer)
