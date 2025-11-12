# 🧠 Personal Productivity Suite

A complete **Personal Productivity Suite** built with **Python and FastAPI**, designed to help users stay organized, efficient, and productive.  
This project combines multiple essential tools — **Calculator**, **Notes App**, **Timer**, and **File Organizer** — into a single unified interface.

---

## 🚀 Features

### 🧮 Calculator
- Perform basic arithmetic operations (+, −, ×, ÷)
- Clean and responsive CLI or GUI interface
- Error handling for invalid inputs

### 📝 Notes Manager
- Create, edit, delete, and view personal notes
- Notes stored in a local database or JSON file
- Search and filter notes by title or keywords

### ⏰ Timer / Pomodoro Tool
- Countdown and stopwatch modes
- Helps improve focus using Pomodoro-style sessions
- Option to play a sound or show an alert when the timer completes

### 📂 File Organizer
- Automatically organizes files in a given directory
- Sorts files into folders such as:
  - `Documents` (`.pdf`, `.docx`, `.xlsx`, etc.)
  - `Images` (`.jpg`, `.png`, `.jpeg`, etc.)
  - `Videos`, `Audio`, `Archives`, etc.
- Helps maintain a clean workspace

---

## 🧩 Tech Stack

- **Language:** Python 3.x  
- **Framework:** FastAPI  
- **Frontend (optional):** HTML / JavaScript (if UI added later)  
- **Database:** SQLite or JSON for notes  
- **Other Tools:** OS module, shutil, time, datetime

---

## 📁 Project Structure

personal_productivity_suite/
│
├── main.py # FastAPI entry point
├── calculator.py # Calculator logic
├── notes.py # Notes management API
├── timer.py # Timer logic
├── files.py # File organizer logic
│
├── data/ # Local storage for notes or logs
│ └── notes.json
│
├── static/ (optional) # Frontend assets if web UI is added
│
└── README.md # Project documentation

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/<your-username>/personal-productivity-suite.git
cd personal-productivity-suite
2️⃣ Create a Virtual Environment
bash
Copy code
python -m venv venv
source venv/bin/activate   # On macOS/Linux
venv\Scripts\activate      # On Windows
3️⃣ Install Dependencies
bash
Copy code
pip install -r requirements.txt
4️⃣ Run the Application
bash
Copy code
uvicorn main:app --reload
Access it at: http://localhost:8000

🧠 Learning Tips & Resources
💡 To strengthen your Python foundation:

Watch YouTube tutorials like "Python Programming Mastery Course"

Code daily — consistency builds intuition

Learn to read and understand complex codebases

Focus on writing clean, modular, and documented code

Master basics before specialization (e.g., ML, web dev, automation)

🧑‍💻 Author
Shashi Kumar
📧 Email: mshashikumar0210@gmail.com
🌐 LinkedIn: linkedin.com/in/your-profile

