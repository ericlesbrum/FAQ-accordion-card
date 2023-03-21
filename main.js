const Main = {
  init: function () {
    this.cacheSelectors();
    this.bindEvents();
  },
  cacheSelectors: function () {
    this.$coll = document.querySelectorAll('.collapsible');
    this.$content = document.querySelector('.content');
  },
  bindEvents: function () {
    const self = this;
    self.$coll.forEach((element, index) => {
      element.addEventListener("click", function () {
        self.Events.Click(index);
      }, false);
    });
  },
  Events: {
    Click: function (index) {
      let content = Main.$coll[index].nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
        Main.$coll[index].classList.remove('selected');
        Main.$coll[index].querySelector('.arrow').classList.remove('rotate');
        content.style.margin = "0"
      } else {
        Main.$coll.forEach((item) => {
          if (item == Main.$coll[index]) {
            return;
          }
          else {
            item.nextElementSibling.style.maxHeight = null;
            item.classList.remove('selected');
            item.querySelector('.arrow').classList.remove('rotate');
            item.nextElementSibling.style.margin = "0"
          }
        })
        Main.$coll[index].classList.add('selected');
        Main.$coll[index].querySelector('.arrow').classList.add('rotate');
        content.style.maxHeight = content.scrollHeight + "px";
        content.style.margin = "0px 0px 20px 0px";
      }
    }
  }
}

Main.init();