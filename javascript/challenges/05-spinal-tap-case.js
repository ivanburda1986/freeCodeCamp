function spinalCase(str) {
  return str.replace(/([A-Z])/g, ' $1') // this finds all upper-case chars and replaces them with themselves, however, with a space before
    .trim().split(/[\W_]/) // trim removes spaces from start and beginning of strings - this is used here to remove a space added before an upper-case letter at the beginnig of a string. The split is made everywhere where there is a non-alphanumerical character or/and an underscore
    .filter(item => item !== '') // filtering takes every items in the array returned by the split and then for all items which are not just empty string
    .map(item => item.toLowerCase()) // turns the items into lowercase
    .join('-'); // and joins all the items by a dash
};


console.log(spinalCase('This Is Spinal Tap'));
spinalCase('thisIsSpinalTap');
spinalCase('The_Andy_Griffith_Show');
spinalCase('Teletubbies say Eh-oh');
spinalCase('AllThe-small Things');