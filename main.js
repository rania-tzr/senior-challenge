const electron = require("electron");
const url = require("url");
const path = require("path");
const {app,Menu, BrowserWindow} = electron;

let mainwin;
app.on ('ready',function() {
    mainwin=new BrowserWindow({ width: 1050, height: 800 });
    
    mainwin.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html',),
        protocol: 'file:',
        slashes:true
      }));
    
});
const template = [
  {
     label: '',
     submenu: [
        {
           role: ''
        }
     ]
  }]
  
  
const menu = Menu.buildFromTemplate(template)
Menu.setApplicationMenu(menu)
