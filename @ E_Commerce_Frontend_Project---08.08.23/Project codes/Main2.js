<div class="box">
  <div class="box-contents">
    <p>Boat Wired earphones</p>
    <div
      class="box-img"
      style="background-image: url('Images/box3_image.jpg')"
    ></div>
  </div>
</div>;
for (let i = 0; i < 5; i++) {
  const box = createElement("div");
  const boxContent = createElement("div");
  const boxImg = createElement("div");
  boxContent.className = "box-contents";
  box.className = "box";
  boxImg.className = "box-img";
  boxImg.style.backgroundImage = "url('Images/box1_image.jpg')";

  const shop = document.querySelector(".shop-section");
}