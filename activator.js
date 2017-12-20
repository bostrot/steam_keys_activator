var obj = [
"first-key-here",
"second-key-here", 
"you-know-what-i-mean" ];

// Timeouts in milliseconds. 8 sec timeout is for steam to activate the key and get ready to go back to activate another one
var timeout0 = 0;
var timeout1 = 1000;
var timeout2 = 8000;

for (var i = 0; i < obj.length; i++) {
    inp(i);
}

function inp(i) {
    setTimeout(function() {
        document.getElementById("product_key").value = obj[i]; // key
        console.log(obj[i]);
        document.getElementById("accept_ssa").click(); // accept
        setTimeout(function() {
            document.getElementById("register_btn").click(); // activate
        }, timeout1);
        setTimeout(function() {
            DisplayPage('code'); // go back
        }, timeout2);
    }, 9500 * i); // the 9,5 sec timeout needs to be ~0.5 sec higher than timeout1+timeout2
}
