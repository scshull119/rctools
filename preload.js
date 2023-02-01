const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('rctools', {
    onSaveAsMenuClick: (callback) => ipcRenderer.on('save-as-menu-click', callback),
    saveReportState: (reportState) => ipcRenderer.invoke('save-report-state', reportState)
});
