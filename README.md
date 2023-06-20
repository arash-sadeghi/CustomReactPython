# RUN
- 
```
git clone 
cd
npm install
npm start
```
- before clicking on the button wait for ``` Loaded distutils ``` in the console.
# What is happening?
- in this application, a simple python script ``` print('hi from python')` ``` is executed every time you click the button on the center of the webpage. You can see how this is coded inside ```App.js``` file. The component that enables us to run python in webpage is ```pyodide```. Its a minimalist version of python interpeter with some primal libararies such as matplotlib and numpy and etc. This approach is different the setting frontend backend structure since python scripts are directly execute in the webpage rather than being executed in the backend. 