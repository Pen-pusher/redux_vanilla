function counter(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function incrementByNumber(state, action) {
  if (typeof state === "undefined") {
    return 0;
  }

  switch (action.type) {
    case "five":
      return state + 5;
    case "eight":
      return state + 8;
    case "ten":
      return state + 10;
    case "fifteen":
      return state + 15;
    case "twenty":
      return state + 20;
    default:
      return state;
  }
}

var store = Redux.createStore(counter);
var storee = Redux.createStore(incrementByNumber);

var valueEl = document.getElementById("value");
// console.log(valueEl);

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

function renderr() {
  valueEl.innerHTML = storee.getState().toString();
}

renderr();
storee.subscribe(renderr);

document.getElementById("increment").addEventListener("click", function() {
  store.dispatch({ type: "INCREMENT" });
});

document.getElementById("decrement").addEventListener("click", function() {
  store.dispatch({ type: "DECREMENT" });
});
document.getElementById("five").addEventListener("click", function() {
  storee.dispatch({ type: "five" });
});
document.getElementById("eight").addEventListener("click", function() {
  storee.dispatch({ type: "eight" });
});
document.getElementById("ten").addEventListener("click", function() {
  storee.dispatch({ type: "ten" });
});
document.getElementById("fifteen").addEventListener("click", function() {
  storee.dispatch({ type: "fifteen" });
});
document.getElementById("twenty").addEventListener("click", function() {
  storee.dispatch({ type: "twenty" });
});
