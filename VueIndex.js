class Dice{
  roll() {
    let i = Math.floor(Math.random()*(list.length));
    app1.isAction = true;
    setTimeout(function(){
      app1.msg = app1.items[i].name;
      console.log(app1.msg,i);
    },860);
    setTimeout(function(){app1.isAction = false;},1000);
  }
  addRestaurant() {
    let restaurant = {};
    restaurant.name = input.inputMsg;
    list.push(restaurant);
  }
}

let dice = new Dice();

// let list = [{name : '阿达西',
//             color : '#629e13'},
//             {name : '南城香',
//             color : '#a81f14'},
//             {name : '大同刀削面',
//             color : '#4364e9'},
//             {name : '护国寺小吃',
//             color : '#3182e7'},
//             {name : '鱼你在一起',
//             color : '#a8f07d'},
//             {name : '春饼',
//             color : '#f9cae7'},
//             {name : '外卖',
//             color : '#f9cae7'},
//             {name : '庆丰包子',
//             color : '#5f210b'},
//           ];



let app1 = new Vue({
  el: '#app1',
  data: {
      msg: '吃点啥呢?',
      btn: 'START!',
      isAction: false,
      items: [
        {name : '阿达西'},
        {name : '南城香'},
        {name : '大同刀削面'},
        {name : '护国寺小吃'},
        {name : '鱼你在一起'},
        {name : '春饼'},
        {name : '外卖'},
        {name : '庆丰包子'},
      ]
  }
});






