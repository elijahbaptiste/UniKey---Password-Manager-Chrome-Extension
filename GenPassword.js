//Code to generate a random 20 character Password. Uses a mix of lowercase, uppercase, numbers and symbols.
//The password is generated using a for loop that runs 20 times and each time it picks a random character from the allChars array.

function generatePassword() {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '';
    const numberChars = includeNumbers ? '0123456789' : '';
    const symbolChars = includeSymbols ? '!@#$%^&*()-_=+[]{}|;:,.<>?' : '';
    const allChars = lowercaseChars + uppercaseChars + numberChars + symbolChars;

    let password = '';

    for (let i = 0; i < 20; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }
    return password;
}

