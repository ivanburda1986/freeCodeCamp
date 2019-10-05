function bouncer(arr) {
    let values = arr;
    const falsies = [false, null, 0, "", undefined, NaN];
    for (let i = 0; i < arr.length; i += 1){
        for (let j = 0; j < falsies.length; j += 1){
            if (!values[i]){
                values.splice(i, 1);
            }
        }
    }
    return (values);
  }
  
  bouncer([7, "ate", "", false, 9]); //should return [7, "ate", 9].
  bouncer(["a", "b", "c"]); // should return ["a", "b", "c"].
  bouncer([false, null, 0, NaN, undefined, ""]);// should return [].
  bouncer([1, null, NaN, 2, undefined]); // should return [1, 2].