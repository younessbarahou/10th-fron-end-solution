var sub = document.getElementById("sub");
var error = document.querySelectorAll(".error");
var msg = document.getElementById("msg");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mail = document.getElementById("mail");
var tab =[fname,lname,msg];
document.forms[0].addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting
    let fname_valid = false;
    let lname_valid = false;
    let msg_valid = false;
    let val_tab = [fname_valid, lname_valid, msg_valid];
    // Check if first name, last name, and message are not empty.
    for (let i = 0; i < tab.length; i++) {
        if (tab[i].value === "") {
            console.error("empty: ", tab[i].value);
            error[i].style.visibility = "visible";
            document.querySelectorAll(".easy-inpt")[i].style.borderColor = "var(--red)";
            document.querySelectorAll(".easy-span")[i].style.color = "var(--red)";
        } else {
            console.log("first name is: ", fname.value, " last name is: ", lname.value, "msg is: ", msg.value);
            val_tab[i] = true;
        }
    }
    // Check if the email is in the correct form using regular expression.
    let mail_valid = false;
    let regex_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex_mail.test(mail.value) === false || mail.value === "") {
        document.querySelector(".error-mail").style.visibility = "visible";
        document.querySelectorAll("input")[2].style.borderColor = "var(--red)";
        document.querySelectorAll("span")[2].style.color = "var(--red)";
    } else {
        mail_valid = true;
        console.log("email is: ", mail.value);
    }
    val_tab.push(mail_valid);
    // Check if the radio is checked
    let radio_valid = false;
    let radios = document.querySelectorAll(".raddio");
    if (radios[0].checked === false && radios[1].checked === false) {
        document.querySelector(".error-radio").style.visibility = "visible";
        document.querySelectorAll("span")[3].style.color = "var(--red)";
    } else {
        radio_valid = true;
    }
    val_tab.push(radio_valid);

    // Check the checkbox
    let check_valid = false;
    let check = document.getElementById('check');
    if (check.checked === false) {
        document.querySelector(".error-check").style.visibility = "visible";
        document.querySelectorAll("span")[5].style.color = "var(--red)";
    } else {
        check_valid = true;
    }
    val_tab.push(check_valid);

    // Final step: submit the form or prevent submission
    if (val_tab.length === 6 && val_tab.every(Boolean) === true) {
        console.log("ready to submit");

        // Show SweetAlert and submit the form if confirmed
        Swal.fire({
            title: 'Success!',
            text: 'Form is valid and ready to submit.',
            icon: 'success',
            confirmButtonText: 'OK',
            timer: 1000
        }).then((result) => {
            if (result.isConfirmed || result.dismiss === Swal.DismissReason.timer) {
                document.forms[0].submit();
            }
        });
    } else {
        event.preventDefault();
    }
});
   
//end :)
