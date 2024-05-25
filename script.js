var submit = document.getElementById("submit");
var error = document.querySelectorAll(".error");
var msg = document.getElementById("msg");
var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var mail = document.getElementById("mail");
var tab =[fname,lname,msg];
document.forms[0].addEventListener("submit" , function(e){
    let all_valid=false;
    if (all_valid===false){
        console.log("ok");
        e.preventDefault();
        
    }
});
// function empty() {
//     // this is to check the (first name/last name / msg) are not empty.
//     for (let i = 0;i<tab.length;i++){
//         if (tab[i].value===""){
//             console.error("empty: " , tab[i].value);
//             error[i].style.visibility = "visible";
//             document.querySelectorAll(".easy-inpt")[i].style.borderColor = "var(--red)";
//             document.querySelectorAll(".easy-span")[i].style.color = "var(--red)";
//         }
//         else{
//             console.log("first name is : ", fname.value, " last name is : ", lname.value ,"msg is: ", msg.value);
//             continue;
//         }
//     }
//     // this is to check if the email is in the correct form.
//     let regex_mail =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (regex_mail.test(mail.value) === false || mail.value === ""){
//         document.querySelector(".error-mail").style.visibility = "visible";
//         document.querySelectorAll("input")[2].style.borderColor = "var(--red)";
//         document.querySelectorAll("span")[2].style.color = "var(--red)";
        
//     }
//     else{
//     console.log("email is : ", mail.value);
// }
// // this part to check if the radio and checkbutton are checked

//     // if (fname.value == ""){
//     //     console.error("1 is empty");
//     //     error[0].style.visibility = "visible";
//     //     document.querySelectorAll("input")[0].style.borderColor = "var(--red)";
//     // }
//     // else{
//     //     console.log("ok1: " , fname.value);
//     // }
//     // if (lname.value == ""){
//     //     console.error("2 is empty");
//     //     error[1].style.visibility = "visible";
//     //     return false;
//     // }
//     // else{
//     //     console.log("ok2" , lname.value);
//     //     return false;
//     // }
// }
// // resett is a function to reset to the default while typing somethin , using the event (oninput)
// var resett = function(){
//     for (i=0; i<3;i++){
//         error[i].style.visibility = "hidden";
//         document.querySelector(".error-mail").style.visibility = "hidden";
//         document.querySelectorAll("input")[i].style.borderColor = "var(--grey)";
//         document.querySelectorAll("span")[i].style.color = "var(--green)";
//      }
//     }
        
