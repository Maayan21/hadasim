הפרויקט נכתב בטכנולוגיות:
PostgreSQL, Node js, Angular.
technologies: data edo, sequlize, postman,
למידת ארכיטקטורת הפרויקט וnodejs נרכשה בלמידה מקוונת באופן עצמאי.

מאגר נתונים:
לצורך התחברות למאגר נתונים, השתמשתי בספרייה sequlize
תרשים uml של הטבלאות התקבל מdataedo.

![Uploading image.png…]()


צד שרת:
נבנה לפי טכנולוגית מודל 3 השכבות.
Config  Configuration files and db config)
    Dal ———
        SequlizeDal- (query DB)
        Sequlize models
        Sequlize migration
        Sequlize seeders
Service  (Buisness logic)
API ———
        Controller
        Routes
App          (Express- middleware’s(cors…))
Server.      (Create the server
Env (environment variables)

Api
נבנה בצורת מיקרוסרביסים
כל הcrud operation רצים באמצעות פוסטמן

צד לקוח:
