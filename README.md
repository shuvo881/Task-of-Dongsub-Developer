# How to run this project

## Create inviroment:
  clone repository
```bash  
    git clone https://github.com/shuvo881/Task-of-Dongsub-Developer
```

 Create virtual inviroment
```bash
    python3 -m venv venv
```
 Acitve the virual inviroment
    -> For windwos
```bash
    .\venv\Scripts\activate
```
 -> For linux or mac
```bash
    source venv/bin/activate
```
 Install dependenceis
 ```bash
    pip install -r requirements.txt
 ```

 change directory  
 ```bash
    cd Ecommerce
 ```
 migrate
 ```dash
    python manage.py migrate   
 ```
 collect static files
 ```dash
    python manage.py collectstatic
 ```
 run server
 ```dash
    python manage.py runserver
 ```

## User Authentication