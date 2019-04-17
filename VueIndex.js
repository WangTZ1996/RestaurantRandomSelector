new Vue({
  el: '#app1',
  data: {
    restaurantName: '吃点啥呢?',
    isAction: false,
    items: [
      { name: '阿达西' },
      { name: '南城香' },
      { name: '大同刀削面' },
      { name: '护国寺小吃' },
      { name: '鱼你在一起' },
      { name: '春饼' },
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
      let value = document.querySelector("#input1").value;
      let name = {name : value};
      this.items.unshift(name);
      // alert(value);
      document.querySelector("#input1").value = '';
    }
  },
});





// 1.命名修改。
// 2.把class逻辑写到vue实例的methods方法。
// 3.html标签语意化。
// 4.尾逗号不要省略。


// 完善需求： input的功能实现。

