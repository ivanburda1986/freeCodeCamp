function truncateString(str, num) {
  const inputStringLength = str.length;
  const allowedLength = num;
  if (inputStringLength > allowedLength) {
    return `${str.slice(0, allowedLength)}...`;
  }
  return str;
}
truncateString('A-tisket a-tasket A green and yellow basket', 8);
truncateString('Peter Piper picked a peck of pickled peppers', 11);
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length);
truncateString('A-tisket a-tasket A green and yellow basket', 'A-tisket a-tasket A green and yellow basket'.length + 2);
truncateString('A-', 1);
truncateString('Absolutely Longer', 2);
