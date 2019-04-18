new Vue({
  el: '#app1',
  data: {
    restaurantName: '点击告你吃啥',
    isAction: false,
    inputMsg: '',
    M: 1,
    items: items,
    // switch: 0,
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
        setTimeout(() => document.querySelector("#input1").className = "warning", 1000);
      } else {
        this.items.unshift({ name:  this.inputMsg.split(" ")[0],seats: this.inputMsg.split(" ")[1]});
        document.querySelector("#input1").className = "";
        this.inputMsg = '';
      }
    },
    remove: function (index) {
      this.items.splice(index, 1);
    },
    filter: function () {

    }
  },
});

//3.1显示总餐馆数
//3.2实现显示删除按钮的动态显
//display:none和visibility: hidden区别。
//输入校验 ，空和空格，检测到非法值并提示（震动，边框变红）并在输入修正后恢复正常样式。

//新需求输入每天吃饭的人数，并且评估每一家餐厅的接待能力排除坐不下的餐厅。
//进阶需求，摇到餐厅并确认以后自动在网上预定座位。





// this.items.unshift({ name: this.inputMsg });
//         document.querySelector("#input1").className = "";
//         this.inputMsg = '';