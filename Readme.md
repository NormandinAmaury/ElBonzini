# EL BONZINI
## REACT NATIVE MOBILE APPLICATION TO MANAGE TABLES FOOTBALL

### PROJECT'S PRUPOSE 

Create an application to put in contact foosball players and find the nearest table football .

### FUNCTIONALITIES

- Account creation
- Foosball creation
- Profile management
- Edit and delete a foosball
- Delete an account

### RUN THE PROJECT

clone the repository : 
```
git clone https://github.com/NormandinAmaury/ElBonzini.git
```
Place yourself in the server side:
```
cd ElBonzini/Server
```
Install the dependencies :
```
npm install
```
Run the server : 
```
node server.js
```

Place yourself in the client side:
```
cd ElBonzini/Client
```
Install the dependencies :
```
npm install
```

On MacOS: 
```
react-native run-ios
```

On Windows/ Linux: 
- Tape this command to have a bundle packaged correctly:
```
curl "http://localhost:8081/index.android.bundle?platform=android" -o "android/app/src/main/assets/index.android.bundle"
```
- Follow this tutorial to have an android emulator : http://facebook.github.io/react-native/releases/0.23/docs/android-setup.html
- Run your emulator
- Tape this command (to see if your emulator is running): 
```
adb devices
```
You must have only ONE device connected at time. 
- Tape the command below: 
```
react-native run-android
```

### TROUBLES

- Troubles with the sdk ? <br/>
Go to Client > android > app > local.properties and change the sdk path with yours.

- Troubles with the server ? <br/>
Go to Client > src > assets > constants > Constants.js and enter your IP address.

### AUTHORS

Guillaume DUBOIS <br/>
Margot LE ROUZIC <br/>
Amaury NORMANDIN

