let pageStatus = "signup";

$("#button_signup").click(function() {
    pageStatus = "signup";

    $("#header").text("Sign Up");
    $("#userName_container").css({"display": "block"});

});

$("#button_login").click(function() {
    pageStatus = "login";

    $("#header").text("Log In");
    $("#userName_container").css({"display": "none"});

});

$("#button_logout").click(function() {
    pageStatus = "logout";

    $("#header").text("Log Out");
    $("#userName_container").css({"display": "none"});
    
});


$("#button_submit").click(function() {
    // TODO - Jacque: Validate first name (must be all letters)
    const name = $("#userName").val().trim();

    // TODO - Jacque: Validate email (must have format of ***@***.com)
    const email = $("#userEmail").val().trim();

    // TODO - Jacque: Validate password (8-64 characters, 1 letter, 1 number, 1 special character)
    const password = $("#userPassword").val();


    if (pageStatus === "signup") {
        // TODO - Isaac: Create an account on Firebase

    } else if (pageStatus === "login") {
        // TODO - Isaac: Log in to an existing account

    } else if (pageStatus === "logout") {
        // TODO - Isaac: Log out of an existing account

    }
});