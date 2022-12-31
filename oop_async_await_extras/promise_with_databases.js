let connection;
db.open()
.then((conn) => {
  connection = conn;
  return connection.select({ name: 'Jane' });
})
.then((result) => {
  // Process result
  // Use `connection` to make more queries
})
// ···
.catch((error) => {
  // handle errors
})
.finally(() => {
  connection.close();
});
