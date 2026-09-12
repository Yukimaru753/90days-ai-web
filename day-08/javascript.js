const username = "Yukimaruu";
const isLoggedIn = true;
const age = 18;

//usernameはtruthyなので実行される
if(username && isLoggedIn) {
    //username, isLoggedInがtrue
    console.log(`Welcome, ${username}`);
    const message = age < 18 ? "You are under 18." : "All right";
    console.log(message);
} else {
    if(username){
        //usernameがtrue
        console.log("Please log in.");
    } else {
        //usernameがfalse
        console.log("Please enter your name.");
    }
}