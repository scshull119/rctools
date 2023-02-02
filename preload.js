const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('rctools', {
    saveAsMenu: {
        setOnClick: (callback) => ipcRenderer.on('save-as-menu-click', callback),
        removeAllListeners: () => ipcRenderer.removeAllListeners('save-as-menu-click')
    },
    saveMenu: {
        setOnClick: (callback) => ipcRenderer.on('save-menu-click', callback),
        removeAllListeners: () => ipcRenderer.removeAllListeners('save-menu-click')
    },
    openMenu: {
        setOnClick: (callback) => ipcRenderer.on('open-menu-click', callback),
        removeAllListeners: () => ipcRenderer.removeAllListeners('open-menu-click')
    },
    saveReportState: (reportState) => ipcRenderer.invoke('save-report-state', reportState),
    getOpenFileData: () => ipcRenderer.invoke('get-open-file-data')
});
