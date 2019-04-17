new Vue({
  el: '#app1',
  data: {
    restaurantName: '吃点啥呢?',
    isAction: false,
    inputMsg: '',
    items: [
      { name: '阿达西'},
      { name: '南城香'},
      { name: '大同刀削面'},
      { name: '护国寺小吃'},
      { name: '鱼你在一起'},
      { name: '庆丰包子'},
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
    remove: function (e) {
      this.items.splice(e.target.innerText.split(".")[0],1);
    },
  },
});
