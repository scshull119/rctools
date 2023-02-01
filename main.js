const {
    app,
    BrowserWindow
} = require('electron');
const { createMainWindow } = require('./mainWindow');
const { createIpcHandlers } = require('./fileIO');

app.whenReady().then(() => {
    createIpcHandlers();
    createMainWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createMainWindow();
        }
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
