//while 

let i = 0;
while (i < 3) {
    alert (i);
    i++;
}

// a shortervway to write this
 let i = 3;
 while (i) {
    console.log (i);
    i--;
 }

// do while loop
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);;

//for loop
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }

  function countSelected (selectObject) {
    let numberSelected = 0;
    for (let i = 0; i < selectObject.options.length; i++) {
        if (selectObject.options[i].selected) {
            numberSelected++;
        }
    }
    return numberSelected;
  }

  const btn = document