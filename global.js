function btnRegister_click()
{
    showValidation();
    addRegistration();
}

function btnUpdate_click()
{
    updateRegistration();
}

function btnDelete_click()
{
    deleteRegistration();
}
function reviewPage_Show()
{
    showReviewList();
}
function reviewModify_Show()
{
    showModifyReviewList();
}
function defaultEmail(){
    saveDefault();
}

function init(){
   $("#btnRegister").on("click",btnRegister_click);
   $("#btnUpdate").on("click",btnUpdate_click);
   $("#btnDelete").on("click",btnDelete_click);
   $("#btnDEmail").on("click",defaultEmail);
 //  $("#reviewPage").on("pageshow",reviewPage_Show);
   $("#reviewModifyPage").on("pageshow",reviewModify_Show);
}
function initdb(){
    try{
        DB.createDatabase();
        if (db) {
            console.info("Creating Tables...");
            DB.createTables();
        }
        else{
            console.error("Error: Cannot create tables: Database does not exist!");
        }
    } catch(e){
        console.error("Error: (Fatal) Error in initDB(). Can not proceed.");
    }
}
 $(document).ready(function (){
    init();
    initdb();
 });