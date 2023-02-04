const { writeFile, readFile } = require('fs/promises');
const { ipcMain } = require('electron');

let activeFilepath = null;

function createIpcHandlers() {
    ipcMain.handle('save-report-state', saveReportState);
    ipcMain.handle('get-open-file-data', getOpenFileData);
}

function getActiveFilepath() {
    return activeFilepath;
}

function setActiveFilepath(filepath) {
    activeFilepath = filepath;
}

function clearActiveFilepath() {
    activeFilepath = null;
}

async function saveReportState(_, reportState) {
    if (!activeFilepath) {
        throw new Error('Cannot save without a specified filepath.');
    }
    const fileContents = JSON.stringify(reportState);
    await writeFile(activeFilepath, fileContents);
    return 'Handled it.';
}

function getOpenFileData() {
    if (!activeFilepath) {
        return null;
    }
    return readFile(activeFilepath, { encoding: 'utf8' });
}

module.exports = {
    createIpcHandlers,
    getActiveFilepath,
    setActiveFilepath,
    clearActiveFilepath
};
