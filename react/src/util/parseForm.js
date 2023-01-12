export const parseForm = (formText) => {
    const formPattern = /Name\s*(.*)[\r\n]+Pronoun\(s\)\s*(.*)[\r\n]+Email\s*(.*)[\r\n]+Date\sof\sRun\s*(.*)[\r\n]+Distance\s*(.*)[\r\n]+Other\sRaces\s*(.*)[\r\n]+Finish\sTime\s*(.*)[\r\n]+Name\sof\sRace\s\/\sLocation\sof\sRun\s*(.*)[\r\n]+Anything\sNoteworthy.*etc\.\)\s*(.*)[\r\n]+Birthday\s*(.*)[\r\n]+Gender\sDesignation\s*(.*)[\r\n]+Do\syou\swant.*race\sreport\?\s*(.*)/gm;
    const result = formPattern.exec(formText);
    if (!result) {
        alert('Invalid input!');
        return null;
    }
    return {
        name: result[1],
        pronouns: result[2],
        email: result[3],
        date: result[4],
        distance: result[5],
        otherRaces: result[6],
        finishTime: result[7],
        raceName: result[8],
        noteworthy: result[9],
        dateOfBirth: result[10],
        gender: result[11],
        shouldInclude: result[12]
    };
};
