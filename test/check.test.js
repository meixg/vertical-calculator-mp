/**
 * @file test
 * @author meixuguang
 */

const assert = require('assert');
const {VerticalCalculator} = require('../dist/index.js');

const cal = new VerticalCalculator();

describe('Check Input', function () {
    describe('common', function () {
        it('input should be number', function () {
            const res = cal.generate('123', '+', '456');
            assert.equal(res.code, 1);
            assert(res.text);
        });
        it('not supported operator', function () {
            const res = cal.generate(12, '&', 456);
            assert.equal(res.code, 3);
            assert(res.text);
        });
        it('input must larger than zero', function () {
            const res = cal.generate(-12, '+', 456);
            assert.equal(res.code, 7);
            assert(res.text);
        });
    });

    describe('division', function () {
        it('numa should larger than numb', function () {
            const res = cal.generate(10, '/', 100);
            assert.equal(res.code, 4);
            assert(res.text);
        });
        it('numb should not be zero', function () {
            const res = cal.generate(10, '/', 0);
            assert.equal(res.code, 5);
            assert(res.text);
        });
    });
});
