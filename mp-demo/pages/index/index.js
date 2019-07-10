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
        numa: 3585,
        numb: 6,
        operator: '/',
        userInfo: {},
        hasUserInfo: false,
        canIUse: swan.canIUse('button.open-type.getUserInfo'),
        nodes: '<table><tbody><tr><td>The table body</td><td>with two columns</td></tr><tr><td>The table body</td><td>with two columns</td></tr></tbody></table>'
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
