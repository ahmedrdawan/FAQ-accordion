// Selecting all card contents
const cardContents = document.querySelectorAll(".card-content");
console.log(cardContents)
// Iterating over each card content
cardContents.forEach(cardContent => {
  // Selecting images and paragraphs within this card content
  const images = cardContent.querySelectorAll("#click img");
  const paragraphs = cardContent.querySelectorAll("p");

  // Adding click event listener to each image
  images.forEach(image => {
    image.addEventListener("click", () => {
      // Toggling the "open" class for each paragraph within this card content
      paragraphs.forEach(paragraph => {
        paragraph.classList.toggle("open");
      });
    });
  });
});


