// This function returns the current time in the Indian system
function getCurrentTimeInIndianSystem() {
    const now = new Date();
    const options = { timeZone: 'Asia/Kolkata' };
    return now.toLocaleString('en-US', options);
}

module.exports = { getCurrentTimeInIndianSystem };
