1️⃣ Clone Repository
git clone <your-github-repo-url>
cd Task-Management

2️⃣ Create & Activate Virtual Environment
python -m venv venv
venv\Scripts\activate

3️⃣ Install Dependencies
pip install -r requirements.txt

4️⃣ Run Migrations
python manage.py makemigrations
python manage.py migrate

5️⃣ Start Server
python manage.py runserver


Server runs at:

http://127.0.0.1:8000/
