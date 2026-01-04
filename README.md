Task Management Application
```bash

A full-stack Task Management application built with Django (Backend) and React (Frontend).
```

 How to Run the Project Locally
 Prerequisites
```bash
Make sure you have the following installed:

Python 3.10+

Node.js (LTS)

Git
```
 Backend Setup (Django)

Clone the repository:
```bash
git clone https://github.com/keertiG-1296/Task-Management.git
cd Task-Management

```
Create and activate virtual environment:
```bash
python -m venv venv
venv\Scripts\activate   # Windows
```

Install backend dependencies:
```bash
pip install -r requirements.txt
```
```bash
Navigate to backend folder:

cd backend
```
Run database migrations:
```bash
python manage.py makemigrations
python manage.py migrate
```

Start the Django server:
```bash
python manage.py runserver
```

 Backend will run at:
```bash
http://127.0.0.1:8000/
```
 Frontend Setup (React)

Open a new terminal and navigate to the project root:
```bash
cd Task-Management

```
Go to frontend folder:
```bash
cd frontend

```
Install frontend dependencies:
```bash
npm install

```
Start the React development server:
```bash
npm start

```
 Frontend will run at:
```bash
http://localhost:3000/
```
🔗 Running Both Together
```bash
Backend → http://127.0.0.1:8000
```
