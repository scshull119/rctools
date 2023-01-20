export const parseForm = (formText) => {
    const formPattern = /^Name$(.*)^Pronoun\(s\)$(.*)^Email$(.*)^Date\sof\sRun$(.*)^Distance$(.*)^Other\sRaces$(.*)^Finish\sTime$(.*)^Name\sof\sRace\s\/\sLocation\sof\sRun$(.*)^Anything\sNoteworthy.*etc\.\)$(.*)^Birthday$(.*)^Gender\sDesignation$(.*)^Do\syou\swant.*race\sreport\?$.*(Yes|No)/gms;
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
        finishTime: result[7].trim(),
        raceName: result[8].trim(),
        noteworthy: result[9].trim(),
        dateOfBirth: result[10].trim(),
        gender: result[11].trim(),
        shouldInclude: result[12].trim() === 'Yes'
    };
};
