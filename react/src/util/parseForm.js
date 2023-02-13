export const parseForm = (formText) => {
    const formPattern = /^Name$(.*)^Pronoun\(s\)$(.*)^Email$(.*)^Date\sof\sRun$(.*)^Distance$(.*)^Other\sRaces$(.*)^Finish\sTime$(.*)^Name\sof\sRace\s\/\sLocation\sof\sRun$(.*)^Anything\sNoteworthy.*etc\.\)$(.*)^Birthday$(.*)^Gender\sDesignation$(.*)^Do\syou\swant.*race\sreport\?$.*(Yes|No)(?:,\sbut\s)*(do\snot\sinclude)*/gms;
    const result = formPattern.exec(formText);
    if (!result) {
        return null;
    }
    return {
        name: result[1].trim(),
        pronouns: result[2].trim(),
        email: result[3].trim(),
        date: result[4].trim(),
        distance: result[5].trim(),
        otherRaces: result[6].trim(),
        timeString: result[7].trim(),
        timeSeconds: timeToSeconds(result[7].trim()),
        raceName: result[8].trim(),
        noteworthy: result[9].trim(),
        dateOfBirth: result[10].trim(),
        gender: result[11].trim(),
        includeInReport: result[12] === 'Yes',
        includeTimeInReport: result[12] === 'Yes' && result[13] !== 'do not include'
    };
};

const timeToSeconds = (stringTime) => stringTime.split(':').reduce((acc, part, i, timeParts) => (
    acc + (parseInt(part) * (60 ** (timeParts.length - i - 1)))
), 0);
