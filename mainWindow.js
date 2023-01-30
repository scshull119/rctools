const path = require('path');
const { BrowserWindow } = require('electron');
const { createMenus } = require('./menus');
const {
    onOpenMenuClick,
    onSaveMenuClick,
    onSaveAsMenuClick
} = require('./fileIO');

function createMainWindow() {
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    createMenus({
        open: onOpenMenuClick,
        save: onSaveMenuClick,
        saveAs: onSaveAsMenuClick
    });
    mainWindow.loadFile('index.html');

    mainWindow.on('close', () => {
        createMenus({ open: onOpenMenuClick });
    });
}

module.exports = { createMainWindow };
