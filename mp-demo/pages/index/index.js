/**
 * @file index.js
 * @author swan
 */

import {VerticalCalculator} from '../../../dist';

const app = getApp()
const cal = new VerticalCalculator({
    tdClass: '',
    trClass: ''
});

Page({
    data: {
        numa: 123.456,
        numb: 456.123,
        operator: '*',
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo'),
        nodes: [{ "name": "tr", "attrs": { "class": "" }, "children": [{ "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "." }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "." }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "." }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;color: red;" }, "children": [{ "type": "text", "text": "" }] }] }, { "name": "tr", "attrs": { "class": "" }, "children": [{ "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "1" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "2" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "2" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "2" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "." }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }] }, { "name": "tr", "attrs": { "class": "" }, "children": [{ "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "-" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "." }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "0" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;border-bottom-color: #000;width: 10px;" }, "children": [{ "type": "text", "text": "0" }] }] }, { "name": "tr", "attrs": { "class": "" }, "children": [{ "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "2" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "2" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "3" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "." }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }, { "name": "td", "attrs": { "class": "", "style": "border: 1px solid transparent;width: 10px;" }, "children": [{ "type": "text", "text": "9" }] }] }]
    },
    onLoad() {
        global.aaa = this;
    },
    tapHandler() {
        const res = cal.generate(
            +this.getData('numa'),
            this.getData('operator'),
            +this.getData('numb')
        );
        console.log('result', res);
        this.setData('nodes', res.nodes);
    },
    changeHandler(val) {
        console.log(val);
        const name = val.target.dataset.name;
        this.setData(name, val.detail.value);
    }
})
