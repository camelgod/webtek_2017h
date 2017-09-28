# webtek_2017h
This is our repository for IT2805 Webteknologi featuring website in HTML, CSS, JS.

# Hvordan sette opp ditt eget testmiljø:

Du trenger:
1. Git
2. Python3
3. Pip (sudo apt-get install pip (eller pip3))
4. Virtualenv (pip install virtualenv)

Sette opp prosjektmappe:
1. Lag en ny mappe på din datamaskin til dette prosjektet
2. Lag en ny mappe med virtualenv. Skriv 'virtualenv venv' i terminal.
3. Hent prosjektet fra github med kommandoen 'git clone https://github.com/camelgod/webtek_2017h.git'

Starte opp serveren:
1. I prosjektmappen din, aktiver virtualenv med '. venv/bin/activate'
3. gå inn i webtek_2017h og skriv 'python manage.py migrate' for å klargjøre databasen
3. skriv 'python manage.py runserver'

