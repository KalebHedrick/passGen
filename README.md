# PasswordGenerator
Password generator full stack web application using React and SpringBoot REST api. 
NOTE:
-This was a test project to learn coding skills with ReactJS, working with APis, simple database table structure, and creating a JSX UI. Java backend is not the most efficient way to make a simple password generator as API's already exist for this purpose, but I wanted to understand the process of mapping my own api and connecting the code with a different language.

## Authors

- [@KalebHedrick](https://www.github.com/octokatherine)


## Demo
User can enter a password length, and the program makes a post and get fetch request to the spring boot app, then renders the password on the screen.
![](https://github.com/KalebHedrick/passGen/blob/main/demoPass.gif)



## Deployment

To deploy this project run the following command with your chrome.exr path to disable CORS in your browser. For testing, the API and react app will run on two separate localhost ports. To allow them to communicate, CORS must be disabled.
```cmd
"C:\Program Files\Google\Chrome\Application\chrome.exe" --disable-web-security --disable-gpu --user-data-dir=%LOCALAPPDATA%\Google\chromeTemp
```
Next run this command to start the react app (should default to port 3000)
```cmd
  npm start
```
To run the Spring Boot java application, run the main method in PasswordGeneratorApplication.java (made for java JDK 1.8)



