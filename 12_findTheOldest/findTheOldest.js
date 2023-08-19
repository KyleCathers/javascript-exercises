const findTheOldest = function(people) {
    return people.reduce((oldestPerson, currentPerson) => {
        let age = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
        let oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath);
        return (age > oldestAge) ? currentPerson: oldestPerson;
    });
};

function getAge(yearOfBirth, yearOfDeath) {
    if (yearOfDeath == undefined) {
        yearOfDeath = new Date().getFullYear();
    }
    return yearOfDeath - yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
