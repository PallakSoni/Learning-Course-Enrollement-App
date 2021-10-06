function validation_registerPage(){
var form=$("#registerForm");
form.validate({
    rules:{
        txtFullName:{
            required:true,
            minlength:4
        },
        txtDOB:{
            required: true,
        },
        txtEmail:{
            required: true,
            email: true,
        },
        txtPassword:{
            required: true,
            minlength: 8,
            passwordcheck: true
        },
        txtPasswordrep:{
            required: true,
            equalTo: "#txtPassword"
        }
    },
    message:{
        txtFullName:{
            required: "You must specify Name",
            minlength: "Name must be at least 4 characters long"
        },
        txtDOB:{
            required: "You must specify DOB",
        },
        txtEmail:{
            required: "You must provide an email",
            email: "Email must be valid",
        },
        txtPassword:{
            required: "You must enter password",
            minlength: "Password must be at least 8 characters long",
            passwordcheck: "Password must contain at least 1 cap and 1 number"
        },
        txtPasswordrep:{
            required: "Please re-enter password",
            equalTo: "Password is not same, re-enter"
        }
    }
});
return form.valid();
}

jQuery.validator.addMethod("passwordcheck",
    function(value, element){
        var regex = /([A-Za-z\d]*[A-Z]+[A-Za-z\d]*[\d]+[A-Za-z\d]*)|([A-Za-z\d]*[\d]+[A-Za-z\d]*[A-Z]+[A-Za-z\d]*)/;
        return this.optional(element) || regex.test(value);
    },
    "Password must contain at least 1 cap and 1 number");
function defaultEmail(){
    const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; //source: https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
    var email = $("#DtxtEmail").val();
    var value = regex.test(email);
    console.log(value);
    if(!value){
        if(email.length===0){
            $("#defaultEmailError").html(messages.txtEmail.required);
        }
        else{
            $("#defaultEmailError").html(messages.txtEmail.invalid);
        }
        return false
    }
    else{
        return true;
    }
}

function saveDefault(){
    if(!defaultEmail()){
        return false;
    }
    alert("Email Saved");
    localStorage.setItem("DefaultEmail",$("#DtxtEmail").val());
    return true;
}