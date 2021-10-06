var Courses={
        selectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM Courses;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
}

var Registered={
    insert: function (options, callback) {
        function txFunction(tx) {
            var sql = "INSERT INTO registered(fullName, dob, course_id) VALUES(?,?,?);";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Insert transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    update: function (options, callback) {
        function txFunction(tx) {
            var sql = "UPDATE registered SET fullName=?, dob=?, course_id=? WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Update transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    delete: function (options, callback) {
        function txFunction(tx) {
            var sql = "DELETE FROM registered WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    select: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM registered WHERE id=?;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    },
    selectAll: function (options, callback) {
        function txFunction(tx) {
            var sql = "SELECT * FROM registered;";
            tx.executeSql(sql, options, callback, errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select All transaction successful");
        }
        db.transaction(txFunction, errorHandler, successTransaction);
    }
};
