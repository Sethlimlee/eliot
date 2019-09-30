function fromMilitary(timeInput) {

    const timeInputArr = timeInput.split(':'); // convert to array

    if (timeInput === 'sunrise' || timeInput === 'sunset')
        return firstCapital(timeInput)

    if (!timeInputArr.length || timeInputArr.length !== 2)
        return ''

    // fetch
    const hours = Number(timeInputArr[0]);
    const minutes = Number(timeInputArr[1]);

    // calculate
    let timeValue;

    if (hours > 0 && hours <= 12) {
        timeValue = "" + hours;
    } else if (hours > 12) {
        timeValue = "" + (hours - 12);
    } else if (hours === 0) {
        timeValue = "12";
    }

    timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
    timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

    return timeValue
}

function numDayToString(...days) {

    if (!days.length)
        return ''

    const daysCopy = [...days].sort()

    const stringDays = {
        1: 'M',
        2: 'T',
        3: 'W',
        4: 'Th',
        5: 'F',
        6: 'S',
        7: 'Su'
    }

    let parsedDays = stringDays[daysCopy[0]]

    for (let i = 1; i < daysCopy.length; i++) {
        parsedDays += `,${stringDays[daysCopy[i]]}`
    }

    return parsedDays
}

function firstCapital(str) {
    if (!str)
        return ''

    if (str.length === 1)
        return str.toUpperCase()

    return str[0].toUpperCase() + str.substring(1)
}

export { fromMilitary, numDayToString, firstCapital }