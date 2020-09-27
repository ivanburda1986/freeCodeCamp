function convertHTML(str) {
  const replacementPairs = [
    [/&/g, '&amp;'],
    [/</g, '&lt;'],
    [/>/g, '&gt;'],
    [/"/g, '&quot;'],
    [/'/g, '&apos;'],
    [/<>/g, '&lt;&gt;'],
  ];
  replacementPairs.forEach(pair => {
    if (pair[0].test(str)) {
      str = str.replace(pair[0], pair[1]);
    }
  })
  return str;
}

convertHTML("Dolce & Gabbana");
convertHTML("Hamburgers < Pizza < Tacos");
convertHTML("Sixty > twelve");
convertHTML('Stuff in "quotation marks"');
convertHTML("Schindler's List");
convertHTML("<>");
convertHTML("abc");