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
      if (this.inputMsg.replace(/\s*/g, "") === "") {
        document.querySelector("#input1").className = "warning shake";
        this.inputMsg = '';
       setTimeout(() => document.querySelector("#input1").className = "warning",1000);
      } else {
        this.items.unshift({ name: this.inputMsg });
        document.querySelector("#input1").className = "";
        this.inputMsg = '';
      }
    },
    remove: function (index) {
      this.items.splice(index, 1);
    },
  },
});

//3.1显示总餐馆数
//3.2实现显示删除按钮的动态显
//display:none 和 visibility: hidden区别。
//输入校验 ，空和空格，检测到非法值并提示（震动，边框变红）并在输入修正后恢复正常样式。

//新需求输入每天吃饭的人数，并且评估每一家餐厅的接待能力排除坐不下的餐厅。

//进阶需求，摇到餐厅并确认以后自动在网上预定座位。
