var password = "b2thesis";
    (function passcodeprotect() {
        var passcode = prompt("Enter Password");
            while (passcode !== password) {
            alert("Incorrect PassCode");
            return passcodeprotect();
        }
    }());
alert('Welcome');

