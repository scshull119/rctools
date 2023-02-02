const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('rctools', {
    onSaveAsMenuClick: (callback) => ipcRenderer.on('save-as-menu-click', callback),
    onOpenMenuClick: (callback) => ipcRenderer.on('open-menu-click', callback),
    saveReportState: (reportState) => ipcRenderer.invoke('save-report-state', reportState),
    getOpenFileData: () => ipcRenderer.invoke('get-open-file-data')
});
