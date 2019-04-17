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
      alert(index);
      this.items.splice(index,1);
    },
  },
});


//3.1显示总餐馆数
//3.2用hover实现显示删除按钮

