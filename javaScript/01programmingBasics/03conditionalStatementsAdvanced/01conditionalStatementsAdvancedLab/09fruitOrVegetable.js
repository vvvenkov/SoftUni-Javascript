function cinemaTicket(input) {
    day = input[0];

    if (day === "Monday" || day === "Tuesday" || day === "Friday") {
        console.log("12");
    } else if (day === "Wednesday" || day === "Thursday") {
        console.log("14");
    } else {
        (day === "Saturday" || day === "Sunday")
        console.log("16");
    }
}