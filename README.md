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
 For signup
 ```dash
    http://127.0.0.1:8000/accounts/signup/
 ```
 Signup using API

 ```dash
    http://127.0.0.1:8000/api/auth/registration/
 ```
For login
 ```dash
    http://127.0.0.1:8000/accounts/login/
 ```
Login using API
 
 ```dash
    http://127.0.0.1:8000/api/auth/login/
 ```

## REST API endpoints/routers
```dash
    http://127.0.0.1:8000/api/
```

## Dashboard
```dash
    http://127.0.0.1:8000/dashboard/
```


-
-
-

# Live Test

## User Authentication
 For signup
    http://shuvo001.pythonanywhere.com/accounts/signup/
 
 Signup using API
    http://shuvo001.pythonanywhere.com/api/auth/registration/
 
For login
    http://shuvo001.pythonanywhere.com/accounts/login/

Login using API
    http://shuvo001.pythonanywhere.com/api/auth/login/
 

## REST API endpoints/routers
  http://shuvo001.pythonanywhere.com/api/

## Dashboard
  http://shuvo001.pythonanywhere.com/dashboard/



  # Thank you #
