const palindromes = function (string) {

    let arrayInput = string.toLowerCase().split("");

    console.log(arrayInput);
    let lettersOnly = arrayInput.filter((character) => {
        switch(character){
            case 'a':
            case 'b':
            case 'c':
            case 'd':
            case 'e':
            case 'f':
            case 'g':
            case 'h':
            case 'i':
            case 'j':
            case 'k':
            case 'l':
            case 'm':
            case 'n':
            case 'o':
            case 'p':
            case 'q':
            case 'r':
            case 's':
            case 't':
            case 'u':
            case 'v':
            case 'w':
            case 'x':
            case 'y':
            case 'z':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                return true;
            default:
                return false;
        }

    });

    let reversed = [];
    for (let i = lettersOnly.length - 1; i >= 0; i--) {
        reversed.push(lettersOnly[i]);
    }

    return (reversed.join("") === lettersOnly.join("")) ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
