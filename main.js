var coll = document.querySelectorAll(".collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      this.classList.remove('selected');
      this.querySelector('.arrow').classList.remove('rotate');
      content.style.margin = "0px 0px 0px 0px"
    } else {
      this.classList.add('selected');
      this.querySelector('.arrow').classList.add('rotate');
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.margin = "0px 0px 20px 0px"
    }
  });
}