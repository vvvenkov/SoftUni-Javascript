function matchPhoneNumber(input) {
    let pattern = /\+359([ |-])2\1[0-9]{3}\1[0-9]{4}/g
    let phoneNumberList = input[0];

    let match = pattern.exec(phoneNumberList);
    let res = [];
    while(match !== null){
        res.push(match[0]);

        match = pattern.exec(phoneNumberList)
    }
    console.log(res.join(", "));
}
matchPhoneNumber(["+359 2 222 2222",
    "+ 359 - 2 - 222 - 2222"])
