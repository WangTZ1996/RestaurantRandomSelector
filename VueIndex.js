new Vue({
  el: '#app1',
  data: {
    restaurantName: '点击告你吃啥',
    isAction: false,
    abled: [],
    // isAvailable: false,
    inputMsg: '',
    M: 1,
    items: items,
  },
  methods: {
    filter: function () {
      this.disabled = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].seats >= this.M) {
          document.querySelectorAll("li")[i].className = "available";
        } else if (items[i].seats < this.M) {
          document.querySelectorAll("li")[i].className = "";
        }
      }
      this.abled = document.querySelectorAll(".available");
    },
    roll: function () {
      if (document.querySelectorAll(".available").length === 0) {
        this.isAction = true;
        setTimeout(() => this.restaurantName = "没有可选的", 800);
        setTimeout(() => this.isAction = false, 1000);
      } else {
        this.abled = document.querySelectorAll(".available");
        let j = Math.floor(Math.random() * (this.abled.length));
        this.isAction = true;
        setTimeout(() => this.restaurantName = this.abled[j].innerText.split(" ")[0], 800);
        console.log(this.abled)
        setTimeout(() => this.isAction = false, 1000);
      }
    },
    write: function () {
      if (this.inputMsg.replace(/\s*/g, "") === "") {
        document.querySelector("#input1").className = "warning shake";
        this.inputMsg = '';
        setTimeout(() => document.querySelector("#input1").className = "warning", 1000);
      } else {
        this.items.unshift({ name: this.inputMsg.split(" ")[0], seats: this.inputMsg.split(" ")[1] });
        document.querySelector("#input1").className = "";
        this.inputMsg = '';
      }
      this.filter();
    },
    remove: function (index) {
      this.items.splice(index, 1);
      this.filter();
    },
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


//用户提交重复的餐厅名称，不报错，将餐厅提前到第一项。