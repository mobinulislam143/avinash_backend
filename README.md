# BASE_URL= http://demoapi.abinashfoundation.com/

## AUTH
1. /api/v1/auth/signup   (signup) (post) </br>
2. /api/v1/auth/login (login)  (post) </br>

## UserApplication
1. /api/v1/userapplication/updatepersonalinformation/:phone  (patch)  </br>
2. /api/v1/updateuserapplication/:phone  (patch) </br>
3. /api/v1/userapplication/getuserapplication/:phone (get single) </br>
4. /api/v1/userapplication/getuserapplication (get all) </br>
5. /api/v1/userapplication/updatestatus/:id (patch) </br>
6. /api/v1/userapplication/delete/:id  (delete) </br>


## SERVICE
1. /api/v1/services/createservice/:role (create service by admin) (post) </br>
2. /api/v1/services/ (get all) </br>
