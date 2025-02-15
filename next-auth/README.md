# NEXT JS AUTH

. Create Application 
. Install 
    - Axios 
    - bcryptjs (to encrypt decrypt password)
    - jsonwebtoken 
    - nodemailer
    - react-hot-toast
    - mongoose (to talk to db)
. We don't need express in Next Js. 

- create models, helpers at the same level as app. 
- create login folder - in app - inside login - page.tsx (Frontend)
    Ex: app 📁 -> api 📁 -> users 📁 -> login 📁 -> route.ts file 📄
- the fron end files can be put in the respective folders 📁 in app 📁 directly 
    Ex: singUp 📁 -> page.tsx (respective UI frontend)

- Next Js : edge run 
    . It won't stay connected to the Db, every single time we make a call, we should talk to the Db and must connect it. 

. Fill up .env with required fields. 
. Create a dbConfig 📁 (To configure database)

. We need the db connect method inside the  for every api call
. In recent version of Next js - everything is a server component 
    - To make  use of the front end part (CLIENT PART) - We explictly make use of "use client" (Turns this into client component)


. we createa login page, sign in page and a profile page.
. Inside the profile we create a user [id] 📁 dynamic 
    - {params} : type
    - we use the params to access the id of it. 