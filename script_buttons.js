// create a button element
var button = document.querySelector(".like");
button.innerHTML = "Save Value";

// add a click event listener to the button
button.addEventListener("click", function() {
  // create a new file
  var file = new File(["true"], "value.txt", {type: "text/plain"});

  // write the file to disk
  var a = document.createElement("a");
  a.href = URL.createObjectURL(file);
  a.download = file.name;
  a.click();
});

// add the button to the document
document.body.appendChild(button);