$(document).ready(function() {
  const gallery = $("#gallery");
  const modal = $("<div>").addClass("modal");

  $("body").append(modal);

  const captionTexts = [
    "Floppy",
    "Binky",
    "Whiskers",
    "Hopper",
    "Cottontail",
    "Snickers",
    "Thumper",
    "Nibbles",
    "Bugsy",
    "Fluffy",
  ];

  const descTexts = [
    "A cute brown rabbit.",
    "A lovely gray bunny.",
    "A friendly gray rabbit.",
    "An energetic gray bunny.",
    "A fluffy brown bunny.",
    "A playful white rabbit.",
    "An adorable white bunny.",
    "A mischievous gray rabbit.",
    "A sweet brown bunny.",
    "A fluffy white rabbit.",
  ];

  const ul = $("<ul>").addClass("gallery-list");

  for (let i = 0; i < captionTexts.length; i++) {
    const listItem = createGalleryItem(i);
    ul.append(listItem);

    if ((i + 1) % 3 === 0) {
      ul.append("<br>");
    }
  }

  gallery.append(ul);

  function createGalleryItem(index) {
    const listItem = $("<li>").addClass("photo");

    const image = $("<img>")
      .attr("src", `images/Rabbit_${index + 1}.jpg`)
      .attr("alt", `Rabbit ${index + 1}`)
      .attr("width", 300)
      .attr("height", 300);

    image.on("click", () => openModal(index));

    const caption = $("<div>").addClass("caption").text(captionTexts[index]);

    const description = $("<div>")
      .addClass("description")
      .text(descTexts[index]);

    listItem.append(image, caption, description);

    return listItem;
  }

  function openModal(index) {
    modal.html(`
      <div class="modal-content">
        <span class="close" onclick="closeModal()">&times;</span>
        <img src="images/Rabbit_${index + 1}.jpg" alt="Rabbit ${index + 1}" width="600" height="400">
        <div class="modal-caption">${captionTexts[index]}</div>
        <div class="modal-description">${descTexts[index]}</div>
      </div>
    `);
    modal.css("display", "block");
  }

  function closeModal() {
    modal.css("display", "none");
  }

  $(window).on("click", (event) => {
    if (event.target === modal[0]) {
      closeModal();
    }
  });
});
