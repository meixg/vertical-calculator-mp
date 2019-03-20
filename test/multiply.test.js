/**
 * @file test
 * @author meixuguang
 */

const assert = require('assert');
const {VerticalCalculator} = require('../dist/index.js');

const cal = new VerticalCalculator();



describe('Multiply', function () {
    it('25 * 16', function () {
        const res = cal.generate(25, '*', 16);
        const result = [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"5"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"X"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"6"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]}]}]; // eslint-disable-line
        assert.equal(res.code, 0);
        assert.deepEqual(res.nodes, result);
    });
});
