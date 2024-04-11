//app.js
const heading = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I'm a h1 tag"), React.createElement("h2", {}, "I'm a h2 tag")])
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root.render(heading));
root.render(heading);
