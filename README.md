# Productivity Suite (MVP)

## Backend
1. cd backend
2. python -m venv .venv
3. source .venv/bin/activate  # or .venv\\Scripts\\activate on Windows
4. pip install -r requirements.txt
5. uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

## Frontend
1. cd frontend
2. npm install
3. npm run dev
4. Open http://localhost:5173

## Notes
- The file organizer endpoint requires careful handling (it will move files). Test with dry-run first.
- For production use, replace SQLite with Postgres and add authentication.
