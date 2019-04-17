new Vue({
  el: '#app1',
  data: {
    restaurantName: '吃点啥呢?',
    isAction: false,
    inputMsg: '',
    items: [
      { name: '阿达西' },
      { name: '南城香' },
      { name: '大同刀削面' },
      { name: '护国寺小吃' },
      { name: '鱼你在一起' },
      { name: '庆丰包子' },
    ],
  },
  methods: {
    roll: function () {
      let i = Math.floor(Math.random() * (this.items.length));
      this.isAction = true;
      setTimeout(() => this.restaurantName = this.items[i].name, 800);
      setTimeout(() => this.isAction = false, 1000);
    },
    write: function () {
      this.items.unshift({ name: this.inputMsg });
      this.inputMsg = '';
    },
    remove: function (index) {
      this.items.splice(index, 1);
    },
    hover: function () {
      let img = document.querySelectorAll("img");
      img[1].setAttribute("class : act");
    }
  },
});

//3.1显示总餐馆数
//3.2实现显示删除按钮的动态显
//display:none 和 visibility: hidden区别。
