function  addRegistration(){
    if (validation_registerPage()){
    var fullName=$("#txtFullName").val();
    var dob=$("#txtDOB").val();
    var course_id=$("#PSCourseCombobox").attr("data-row-id");

    var options=[fullName,dob,course_id];

    function callback(){
        console.info("success:Record Inserted successfully");
    }
    Registered.insert(options,callback);
    }
    else {
        console.info("Form is not Valid");
    }
}
function updateRegistration(){

    var id=localStorage.getItem("id");
    var fullName=$("#rMtxtFullName").val();
    var dob=$("#rMtxtDOB").val();
    var course_id=$("#rMCourseCombobox").attr("data-role-id");

    var options=[fullName,dob,course_id];

    function callback(){
        console.info("Success: Record Updated Successfully");
    }
    Registered.update(options,callback);
}
function deleteRegistration(){
    var id=localStorage.getItem("id");
    var options=[id];

    function callback() {
        console.info("Success: Record deleted successfully");
        $(location).prop('href', '#reviewPage');

    }

    Registered.delete(options, callback);
}
function showCourse(){
    var options=[];

    function callback(tx,results){
        for (var i=0;i<results.rows.length;i++){
            var row = results.rows[i];

            console.info("id: "+row['course_id']+
            "name: "+ row['course_name']);
        }
    }
    console.log("show course function");
    $("#homePage").on("pageshow",showHandler);
    function showHandler(){
        localStorage.setItem("id",$(this).attr("data-row-id"));
    }
    Courses.selectAll(options,callback);
}

function  showReviewList(){
    var options=[];

    function callback(tx,results){
        var htmlCode="";

        for (var i=0;i<results.rows.length;i++){

            var row=results.rows[i];

            console.info("ID: "+row['id']+
            "Full Name: "+row['fullName']+
            "Course ID: "+row['course_id']);

            htmlCode+="<li><a data-role='button' data-row-id=" +row['id'] + "href='#'>" +
            "<h1>Full Name: " + row['fullName'] + "</h1>" +
           "<h1>DOB: " + row['dob'] + "</h1>" +
           "<h1>Course: " + row['course_name'] + "</h1>" +
            "</a></li>";
        }
        var reviewalist=$("#reviewlist");
        reviewalist=reviewalist.html(htmlCode);
        reviewalist.listview("refresh");

        $("#reviewlist a").on("click",clickHandler);

        function clickHandler(){
            localStorage.setItem("id",$(this).attr("data-role-id"));

            $(location).prop('href','##reviewModifyPage');
        }
    }
    Registered.selectAll(options,callback);
}

function showModifyReviewList(){
    var id= localStorage.getItem("id");

    var options=[id];

    function callback(tx,results){
        var row=results.rows[0];

        console.info("ID: "+row['id']+
            "Full Name: "+row['fullName']+
            "Course ID: "+row['course_id']);

        $("#rMtxtFullName").val(row['fullName']);
        $("#rMtxtDOB").val(row['dob']);
        if (row['course_id']=='true'){
            $("#rMCourseCombobox").attr("data-role-id", true);
        }
        else {
            $("#rMCourseCombobox").attr("data-role-id", false);
        }
        Registered.select(options,callback);
    }

}
function ShowRegistration(){
    $("#txtEmail").val(localStorage.getItem("DefaultEmail"));
}

function showValidation(){
    if (validation_registerPage()){
        console.info("Validation Successful");
    }
    else{
        console.error("validation Failed");
    }
}