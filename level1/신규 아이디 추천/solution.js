function solution(new_id) {
  let string = new_id;
  string = string.toLowerCase();
  string = string.replace(/[^a-z0-9-_.]/g, '');
  string = string.replace(/\.+/g, '.');
  string = string.replace(/^\.|\.$/g, '');
  if (string === '') string = 'a';
  if (string.length >= 16) string = string.slice(0, 15).replace(/\.$/g, '');
  while (2 >= string.length) string = string + string.slice(-1);
  return string;
}
