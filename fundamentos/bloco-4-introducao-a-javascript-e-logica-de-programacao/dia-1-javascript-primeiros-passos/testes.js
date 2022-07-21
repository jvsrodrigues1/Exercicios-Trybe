const q = 12;
const w = 1;
const e = 5;

if (q > w && q > e) {
  return q;
} else if (w > q && w > e) {
  return w;
} else if (e > q && e > w) {
  return e;
} else {
  return 0;
}
