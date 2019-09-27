

function fromMilitary(timeInput) {

    timeInput = timeInput.split(':'); // convert to array

    if (!timeInput.length || timeInput.length !== 2)
        return ''

    // fetch
    const hours = Number(timeInput[0]);
    const minutes = Number(timeInput[1]);

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

export default fromMilitary