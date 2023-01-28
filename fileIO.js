const { dialog } = require('electron');

let activeFilepath = null;

async function onSaveAsMenuClick() {
    try {
        const { filePath, canceled } = await dialog.showSaveDialog({
            filters: [
                { name: 'JSON Documents', extensions: ['json'] }
            ]
        });
        if (filePath && !canceled) {
            activeFilepath = filePath;
            console.log(`Saving file at path ${activeFilepath}`);
        }
    } catch(err) {
        console.error('An error occurred displaying the Save dialog.');
    }
}

function onSaveMenuClick() {
    if (activeFilepath) {
        console.log(`Saving to already open filepath: ${activeFilepath}`);
    } else {
        onSaveAsMenuClick();
    }
}

async function onOpenMenuClick() {
    try {
        const { filePath, canceled } = await dialog.showOpenDialog({
            properties: [
                'openFile'
            ],
            filters: [
                { name: 'JSON Documents', extensions: ['json'] }
            ]
        });
        if (filePath && !canceled) {
            activeFilepath = filePath;
            console.log(`Opening file at path ${activeFilepath}`);
        }
    } catch(err) {
        console.error(err);
    }
}

module.exports = {
    onOpenMenuClick,
    onSaveMenuClick,
    onSaveAsMenuClick
};
