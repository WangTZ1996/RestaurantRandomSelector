class Dice{
  roll() {
    let i = Math.floor(Math.random()*(list.length));
    app1.isAction = true;
    setTimeout(function(){
      app1.msg = list[i].name;
      console.log(app1.msg,i);
    },2375);
    setTimeout(function(){app1.isAction = false;},2500);
  }
}

let dice = new Dice();

let list = [{name : '阿达西',
                 color : '#629e13'},
                 {name : '南城香',
                 color : '#a81f14'},
                 {name : '大同刀削面',
                 color : '#4364e9'},
                 {name : '护国寺小吃',
                 color : '#3182e7'},
                 {name : '鱼你在一起',
                 color : '#a8f07d'},
                 {name : '南城香',
                 color : '#f9cae7'},
                 {name : '护国寺小吃',
                 color : '#3182e7'},
                 {name : '南城香',
                 color : '#f9cae7'},
                 {name : '春饼',
                 color : '#f9cae7'},
                 {name : '南城香',
                 color : '#f9cae7'},
                 {name : '外卖',
                 color : '#f9cae7'},
                 {name : '阿达西',
                 color : '#629e13'},
                 {name : '南城香',
                 color : '#a81f14'},
                 {name : '护国寺小吃',
                 color : '#3182e7'},
                 {name : '南城香',
                 color : '#4364e9'},
                 {name : '庆丰包子',
                 color : '#5f210b'},
                 {name : '鱼你在一起',
                 color : '#a8f07d'},
                 {name : '护国寺小吃',
                 color : '#3182e7'},
                 {name : '南城香',
                 color : '#f9cae7'},
                 {name : '外卖',
                 color : '#f9cae7'},
                ];

let app1 = new Vue({
  el: '#app1',
  data: {
    msg: '吃点啥呢？',
    isAction: false,
  }
})

let com = new Vue({
  el: '#component-demo',
  data: {
    text: 'START!',
  }
})








