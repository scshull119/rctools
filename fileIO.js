const { writeFile } = require('fs/promises');
const { ipcMain } = require('electron');

let activeFilepath = null;

function createIpcHandlers() {
    ipcMain.handle('save-report-state', saveReportState);
}

function getActiveFilepath() {
    return activeFilepath;
}

function setActiveFilepath(filepath) {
    activeFilepath = filepath;
}

async function saveReportState(_, reportState) {
    if (!activeFilepath) {
        throw new Error('Cannot save without a specified filepath.');
    }
    const fileContents = JSON.stringify(reportState);
    await writeFile(activeFilepath, fileContents);
    return 'Handled it.';
}

module.exports = {
    createIpcHandlers,
    getActiveFilepath,
    setActiveFilepath
};
