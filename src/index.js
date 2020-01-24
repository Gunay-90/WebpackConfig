import $ from "jquery";
import Header from './components/header'


// const moment = require("moment");
// require("./style.css");
 require("./style.scss");

// class Button {
//     constructor(name) {
//         this.name = name;

//     }

//     create() {
//         $('body').append("<button type='button'>" + this.name + "</button>")
//     }
// }
// let btn = new Button('hello')
// btn.create();

// let date = 1589548719000;
// console.log("momentlenmis tarix", moment(date).format("LLLL"));

// console.log($);


let header = new Header();
header.render();