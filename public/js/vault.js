// (function () {
//     const deleteButton = document.querySelector('.delete-button')

//     ddeleteButton.
// })()

function main() {
  const deleteButton = document.getElementById("delete-button");

  deleteButton.addEventListener("submit", function (e) {
    e.preventDefault();

    console.log(deleteButton.getAttribute("aria-label"));
  });
}

main();

function deleteIdea(id) {
  console.log(id);
}
