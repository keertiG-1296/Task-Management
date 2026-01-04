Task Management Application

A full-stack Task Management application built with Django (Backend) and React (Frontend).

 How to Run the Project Locally
 Prerequisites

Make sure you have the following installed:

Python 3.10+

Node.js (LTS)

Git

 Backend Setup (Django)

Clone the repository:

git clone https://github.com/keertiG-1296/Task-Management.git
cd Task-Management


Create and activate virtual environment:

python -m venv venv
venv\Scripts\activate   # Windows


Install backend dependencies:

pip install -r requirements.txt


Navigate to backend folder:

cd backend


Run database migrations:

python manage.py makemigrations
python manage.py migrate


Start the Django server:

python manage.py runserver


 Backend will run at:

http://127.0.0.1:8000/

 Frontend Setup (React)

Open a new terminal and navigate to the project root:

cd Task-Management


Go to frontend folder:

cd frontend


Install frontend dependencies:

npm install


Start the React development server:

npm start


✅ Frontend will run at:

http://localhost:3000/

🔗 Running Both Together

Backend → http://127.0.0.1:8000
