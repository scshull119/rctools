const path = require('path');
const {
    app,
    dialog,
    BrowserWindow,
    Menu
} = require('electron');
const {
    getActiveFilepath,
    setActiveFilepath
} = require('./fileIO');

let mainWindow = null;
let isOpenWindow = false;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });
    isOpenWindow = true;
    createMenus();
    mainWindow.loadFile('index.html');

    mainWindow.on('close', () => {
        isOpenWindow = false;
        createMenus();
    });
}

function createMenus() {
    const isMac = process.platform === 'darwin';

    const template = [
        // { role: 'appMenu' }
        ...(isMac ? [{
            label: app.name,
            submenu: [
                { role: 'about' },
                { type: 'separator' },
                { role: 'services' },
                { type: 'separator' },
                { role: 'hide' },
                { role: 'hideOthers' },
                { role: 'unhide' },
                { type: 'separator' },
                { role: 'quit' }
            ]
        }] : []),
        // { role: 'fileMenu' }
        {
            label: 'File',
            submenu: [
                {
                    label: 'New',
                    click: () => console.log('New menu item clicked'),
                    accelerator: 'CommandOrControl+N'
                },
                {
                    label: 'Open...',
                    click: onOpenMenuClick,
                    accelerator: 'CommandOrControl+O',
                },
                { type: 'separator' },
                {
                    label: 'Save',
                    enabled: isOpenWindow,
                    click: onSaveMenuClick,
                    accelerator: 'CommandOrControl+S'
                },
                {
                    label: 'Save As...',
                    enabled: isOpenWindow,
                    click: onSaveAsMenuClick,
                    accelerator: 'Shift+CommandOrControl+S'
                },
                isMac ? { role: 'close' } : { role: 'quit' }
            ]
        },
        // { role: 'editMenu' }
        {
            label: 'Edit',
            submenu: [
                { role: 'undo' },
                { role: 'redo' },
                { type: 'separator' },
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' },
                ...(isMac ? [
                    { role: 'pasteAndMatchStyle' },
                    { role: 'delete' },
                    { role: 'selectAll' },
                    { type: 'separator' },
                    {
                        label: 'Speech',
                        submenu: [
                            { role: 'startSpeaking' },
                            { role: 'stopSpeaking' }
                        ]
                    }
                ] : [
                    { role: 'delete' },
                    { type: 'separator' },
                    { role: 'selectAll' }
                ])
            ]
        },
        // { role: 'viewMenu' }
        {
            label: 'View',
            submenu: [
                { role: 'reload' },
                { role: 'forceReload' },
                { role: 'toggleDevTools' },
                { type: 'separator' },
                { role: 'resetZoom' },
                { role: 'zoomIn' },
                { role: 'zoomOut' },
                { type: 'separator' },
                { role: 'togglefullscreen' }
            ]
        },
        // { role: 'windowMenu' }
        {
            label: 'Window',
            submenu: [
                { role: 'minimize' },
                { role: 'zoom' },
                ...(isMac ? [
                    { type: 'separator' },
                    { role: 'front' },
                    { type: 'separator' },
                    { role: 'window' }
                ] : [
                    { role: 'close' }
                ])
            ]
        },
        {
            role: 'help',
            submenu: [
                {
                    label: 'Learn More',
                    click: async () => {
                        const { shell } = require('electron');
                        await shell.openExternal('https://electronjs.org');
                    }
                }
            ]
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    Menu.setApplicationMenu(menu);
}

async function onSaveAsMenuClick() {
    try {
        const { filePath, canceled } = await dialog.showSaveDialog({
            filters: [
                { name: 'JSON Documents', extensions: ['json'] }
            ]
        });
        if (filePath && !canceled) {
            setActiveFilepath(filePath);
            mainWindow.webContents.send('save-as-menu-click', filePath);
        }
    } catch(err) {
        console.error('An error occurred displaying the Save dialog.');
    }
}

function onSaveMenuClick() {
    if (getActiveFilepath()) {
        console.log(`Saving to already open filepath: ${getActiveFilepath()}`);
    } else {
        onSaveAsMenuClick();
    }
}

async function onOpenMenuClick() {
    try {
        const { filePaths, canceled } = await dialog.showOpenDialog({
            properties: [
                'openFile'
            ],
            filters: [
                { name: 'JSON Documents', extensions: ['json'] }
            ]
        });
        if (filePaths && filePaths.length === 1 && !canceled) {
            if (!isOpenWindow) {
                createMainWindow();
            }
            setActiveFilepath(filePaths[0]);
            console.log(`Opening file at path ${getActiveFilepath()}`);
        }
    } catch(err) {
        console.error(err);
    }
}

module.exports = { createMainWindow };
