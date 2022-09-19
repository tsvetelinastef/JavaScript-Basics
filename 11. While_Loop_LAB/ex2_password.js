function password(input) {
    let username = input[0];
    let password = input[1];

    let data = input[2];
    // we've already took first three elements, so counter = 3 
    let index = 3;
    // in the while loop until entering valid password, it reads new
    // and  the counter + 1
    while (data !== password) {
        data = input[index];
        index++;
    }

    console.log(`Welcome ${username}!`);

}

password(["Nakov", "1234", "Pass", "1324", "1234"]);
password(["Gosho", "secret", "secret"]);
