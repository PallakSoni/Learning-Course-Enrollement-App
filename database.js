var db;

function errorHandler(tx, error){
    console.error("SQL error: " + tx + " (" + error.code + ") : " + error.message)
}

var DB = {
    createDatabase: function () {
        var shortName = "CourseRegistrationDB";
        var version = "1.0";
        var displayName = "DB for CourseRegistrationDB app";
        var dbSize = 2 * 1024 * 1024;
        function successcallback(){
            console.info("success: Database created successfully");
        }

        db = openDatabase(shortName, version, displayName, dbSize,successcallback);

    },
    createTables: function () {


        function txFunction1(tx) {

            var sql = "CREATE TABLE IF NOT EXISTS registered(" +
                "id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT," +
                "fullName VARCHAR(20)," +
                "dob DATE," +
                "course_id NOT NULL,"+
                "FOREIGN KEY(course_id) REFERENCES Courses(course_id)";
            console.info("Registered rows created and inserted");

            var options = [];

            function successCreate() {
                console.info("Success: Creating Tables execution");
            }

            tx.executeSql(sql, options, successCreate, errorHandler);
        }


        function successHandler(){
            console.info("Success, Creating Tables transaction");
        }
        db.transaction(txFunction1, errorHandler, successHandler);
    },
    dropTables: function(){

        function txFunction(tx){
            var sql = "DROP TABLE IF EXISTS registered;";
            var options = [];

            function successDrop() {
                console.info("Success: Registered table dropped successfully");
            }
            tx.executeSql(sql, options, successDrop, errorHandler );
        }

        function successTransaction(){
            console.info("Success: Drop tables transaction successful");
        }

        db.transaction(txFunction, errorHandler, successTransaction);
    }

};