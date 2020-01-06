let val = 1;

function counter(state = 0, action) {
  switch (action.type) {
    case "INCREMENT":
      return state < 100 ? state + action.payload : alert("limit exceeded");

    case "DECREMENT":
      return state > 0 ? state - action.payload : alert("limit exceeded");
    case "five":
      return state + val;

    case "eight":
      return state + val;
    case "ten":
      return state + val;
    case "fifteen":
      return state + val;
    case "twenty":
      return state + val;
    default:
      return state;
  }
}

// function incrementByNumber(state, action) {
//   if (typeof state === "undefined") {
//     return 0;
//   }

//   switch (action.type) {
//     case "five":
//       return state + 5;
//     // case "decrementbyfive":
//     //   return state - 5;
//     case "eight":
//       return state + 8;
//     case "ten":
//       return state + 10;
//     case "fifteen":
//       return state + 15;
//     case "twenty":
//       return state + 20;
//     default:
//       return;
//   }
// }

var store = Redux.createStore(counter);
// var storee = Redux.createStore(incrementByNumber);
// console.log(storee.getState());

var valueEl = document.getElementById("value");
// console.log(valueEl);

function render() {
  valueEl.innerHTML = store.getState();
}

render();
store.subscribe(render);

document.getElementById("increment").addEventListener("click", function() {
  store.dispatch({ type: "INCREMENT", payload: val });
});

document.getElementById("decrement").addEventListener("click", function() {
  store.dispatch({ type: "DECREMENT", payload: val });
});
document.getElementById("five").addEventListener("click", function() {
  return (val = 5);
});
document.getElementById("eight").addEventListener("click", function() {
  return (val = 8);
});
document.getElementById("ten").addEventListener("click", function() {
  return (val = 10);
});
document.getElementById("fifteen").addEventListener("click", function() {
  return (val = 15);
});
document.getElementById("twenty").addEventListener("click", function() {
  return (val = 20);
});
// document.getElementById("decrement").addEventListener("click", function() {
//   storee.dispatch({ type: "decrementbyfive" });
// });
