const path = require('path');
const { BrowserWindow } = require('electron');

let mainWindow = null;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.loadFile('index.html');
}

function getMainWindow() {
    return mainWindow;
}

module.exports = { createMainWindow, getMainWindow };
