var submit = document.getElementById("submit");
var error = document.querySelectorAll(".error");
var msg = document.getElementById("msg");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mail = document.getElementById("mail");
var tab =[fname,lname,msg];
document.forms[0].addEventListener("submit" , function(e){
    let all_valid=false;
    let fname_valid=false;
    let lname_valid=false;
    let msg_valid=false;
    let val_tab = [fname_valid,lname_valid,msg_valid]
    // check if first name , last name , msg are not empty .
    for (let i = 0;i<tab.length;i++){
        if (tab[i].value===""){
            console.error("empty: " , tab[i].value);
            error[i].style.visibility = "visible";
            // with .easy-input i only choose 3 (fname,lname,msg)
            document.querySelectorAll(".easy-inpt")[i].style.borderColor = "var(--red)";
            document.querySelectorAll(".easy-span")[i].style.color = "var(--red)";
        }
        else{
            console.log("first name is : ", fname.value, " last name is : ", lname.value ,"msg is: ", msg.value);
            val_tab[i]=true;
            // this is very important to check the next input , otherwise it will stop directly.
            continue;
        }
    }
    console.log("etap1:" ,val_tab);
    // this is to check if the email is in the correct form.
    let mail_valid = false;
    let regex_mail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (regex_mail.test(mail.value) === false || mail.value === ""){
        document.querySelector(".error-mail").style.visibility = "visible";
        document.querySelectorAll("input")[2].style.borderColor = "var(--red)";
        document.querySelectorAll("span")[2].style.color = "var(--red)";
    }
    else{
        mail_valid = true;
        console.log("email is : ", mail.value)};
        val_tab.push(mail_valid);
        console.log("etape2: " ,val_tab);
    // this part to check if the radio is checked
let radio_valid = false;
let raddio = document.querySelectorAll(".raddio");
if(raddio[0].checked === false && raddio[1].checked === false){
    document.querySelector(".error-radio").style.visibility = "visible";
    document.querySelectorAll("span")[2].style.color = "var(--red)";
}
else{
    radio_valid = true;
}
val_tab.push(radio_valid);
console.log("etape2: " ,val_tab);
// this part to check the checkbutton 

//this part is to prevent the form to submit until all the inputs are valid
    if (all_valid===false){
        console.log("ok");
        e.preventDefault();
    }
});     

    // if (fname.value == ""){
    //     console.error("1 is empty");
    //     error[0].style.visibility = "visible";
    //     document.querySelectorAll("input")[0].style.borderColor = "var(--red)";
    // }
    // else{
    //     console.log("ok1: " , fname.value);
    // }
    // if (lname.value == ""){
    //     console.error("2 is empty");
    //     error[1].style.visibility = "visible";
    //     return false;
    // }
    // else{
    //     console.log("ok2" , lname.value);
    //     return false;
    // }
// resett is a function to reset to the default while typing somethin , using the event (oninput)
// var resett = function(){
//     for (i=0; i<4;i++){
//         error[i].style.visibility = "hidden";
//         document.querySelector(".error-mail").style.visibility = "hidden";
//         document.querySelectorAll("input")[i].style.borderColor = "var(--grey)";
//         document.querySelectorAll("span")[i].style.color = "var(--green)";
//      }
//     }
        
