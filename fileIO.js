let activeFilepath = null;

function getActiveFilepath() {
    return activeFilepath;
}

function setActiveFilepath(filepath) {
    activeFilepath = filepath;
}

module.exports = {
    getActiveFilepath,
    setActiveFilepath
};
