/**
 * @file test
 * @author meixuguang
 */

const assert = require('assert');
const {VerticalCalculator} = require('../dist/index.js');

const cal = new VerticalCalculator();



describe('Subtraction', function () {
    it('999 - 123', function () {
        const res = cal.generate(999, '-', 123);
        const result = [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"9"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"-"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"3"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"8"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"7"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]}]}]; // eslint-disable-line
        assert.equal(res.code, 0);
        assert.deepEqual(res.result, result);
    });

    it('1000 - 199', function () {
        const res = cal.generate(1000, '-', 199);
        const result = [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"-"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"8"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]}]}]; // eslint-disable-line
        assert.equal(res.code, 0);
        assert.deepEqual(res.result, result);
    });

    it('1000.123 - 199.456', function () {
        const res = cal.generate(1000.123, '-', 199.456);
        const result = [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"-"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"6"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"8"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"7"}]}]}]; // eslint-disable-line
        assert.equal(res.code, 0);
        assert.deepEqual(res.result, result);
    });

    it('1000.123123123 - 199.456', function () {
        const res = cal.generate(1000.123123123, '-', 199.456);
        const result = [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"-"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"0"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"8"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"7"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]}]}]; // eslint-disable-line
        assert.equal(res.code, 0);
        assert.deepEqual(res.result, result);
    });

    it('1000.123 - 199.456456456', function () {
        const res = cal.generate(1000.123, '-', 199.456456456);
        // console.log(JSON.stringify(res.result));
        const result = [{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;color: red;"},"children":[{"type":"text","text":""}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"2"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"-"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"1"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"9"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;border-bottom-color: #000;width: 10px;"},"children":[{"type":"text","text":"6"}]}]},{"name":"tr","attrs":{"class":""},"children":[{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":""}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"8"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"0"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"."}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"6"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"3"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"5"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"4"}]},{"name":"td","attrs":{"class":"","style":"border: 1px solid transparent;width: 10px;"},"children":[{"type":"text","text":"4"}]}]}]; // eslint-disable-line
        assert.equal(res.code, 0);
        assert.deepEqual(res.result, result);
    });
});
