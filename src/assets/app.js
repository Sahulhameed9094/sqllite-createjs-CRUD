var db = null;
document.addEventListener('deviceready', function () {
    db = window.sqlitePlugin.openDatabase({
        name: 'sample.db',
        location: 'default',
    });

    db.transaction(function (tx) {
        tx.executeSql('select name from Files', [], function (tx, rs) {
            console.log(tx, rs);
            console.log(rs.rows.item(0));
        }, function (tx, error) {
            console.log('SELECT error: ' + error.message);
        });
    });
});