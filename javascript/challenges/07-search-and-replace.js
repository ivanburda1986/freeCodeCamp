function myReplace(str, before, after) {
  const regexCap = new RegExp(`[${before.charAt(0).toUpperCase()}]${before.substring(1)}`);

  function modify(what, how) {
    return how === 'toUpperCase' ? what.charAt(0).toUpperCase() + what.slice(1) : what.charAt(0).toLowerCase() + what.slice(1);
  }
  return regexCap.test(str) ? str.replace(modify(before, 'toUpperCase'), modify(after, 'toUpperCase')) : str.replace(modify(before), modify(after));
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "Leaped");