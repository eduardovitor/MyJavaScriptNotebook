const map = new Map()
  .set(false, 'no')
  .set(true, 'yes')
;

for (const entry of map.entries()) {
  console.log(entry);
}
// Output:
// [false, 'no']
// [true, 'yes']
