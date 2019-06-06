/**
 * @file 竖式计算器
 * @author meixugaung
 */

import {
    OPERATOR,
    result,
    RESULT_CODE,
    trNode
} from './types';
import {DivsionCalculator} from './calculator/divsion';
import {MultiplyCalculator} from './calculator/multiply';
import { AddCalculator } from './calculator/add';
import { SubCalculator } from './calculator/subtraction';

interface options {
    trClass?: string;
    tdClass?: string;
    blockWidth?: string;
}

export class VerticalCalculator {
    private trClass: string;
    private tdClass: string;
    private blockWidth: string;

    constructor(options: options = {}) {
        this.trClass = options.trClass || '';
        this.tdClass = options.tdClass || '';
        this.blockWidth = options.blockWidth || '10px';
    }

    private calculate(numa, operator: OPERATOR, numb): {nodes: trNode[], result: string} {
        switch (operator) {
            case OPERATOR.div:
                const divisionCalculator = new DivsionCalculator({
                    trClass: this.trClass,
                    tdClass: this.tdClass,
                    blockWidth: this.blockWidth
                });
                return divisionCalculator.calculateDivision(numa, numb);
            case OPERATOR.mul:
                const multiplyCalculator = new MultiplyCalculator({
                    trClass: this.trClass,
                    tdClass: this.tdClass,
                    blockWidth: this.blockWidth
                });
                return multiplyCalculator.calculateMultiply(numa, numb);
            case OPERATOR.add:
                const addCalculator = new AddCalculator({
                    trClass: this.trClass,
                    tdClass: this.tdClass,
                    blockWidth: this.blockWidth
                });
                return addCalculator.calculate(numa, numb);
            case OPERATOR.sub:
                const calculator = new SubCalculator({
                    trClass: this.trClass,
                    tdClass: this.tdClass,
                    blockWidth: this.blockWidth
                });
                return calculator.calculate(numa, numb);
        }
    }

    generate(numa: number, operator: OPERATOR, numb: number): result {
        const checkResult = checkInput(numa, operator, numb);
        if (checkResult && checkResult.code !== RESULT_CODE.success) {
            return checkResult;
        }

        const res = this.calculate(numa, operator, numb);

        if (!res) {
            return {
                code: RESULT_CODE.operatorIsNotSupport,
                text: '不支持的运算符'
            };
        };

        return {
            code: RESULT_CODE.success,
            result: res.result,
            nodes: res.nodes
        };
    }
}

export function checkInput(numa: number, operator: OPERATOR, numb: number): void | result {
    if (typeof numa !== 'number' || typeof numb !== 'number') {
        return {
            code: RESULT_CODE.inputMustBeNumber,
            text: '输入必须为数字'
        }
    }

    if (numa < 0 || numb < 0) {
        return {
            code: RESULT_CODE.inputMustLargerThanZero,
            text: '输入必须大于0'
        }
    }

    if (operator === OPERATOR.div && numa < numb) {
        return {
            code: RESULT_CODE.divNumaSmallerThanNumb,
            text: '除法时，被除数不能小于除数'
        };
    }

    if (operator === OPERATOR.div && (numa === 0 || numb === 0)) {
        return {
            code: RESULT_CODE.divNumbCantBeZero,
            text: '除法时，输入不能为 0'
        };
    }

    if (operator === OPERATOR.sub && numa < numb) {
        return {
            code: RESULT_CODE.subNumbCantSmaller,
            text: '减法时，numa 不能小于 numb'
        }
    }

    return {
        code: RESULT_CODE.success
    };
}

const cal = new VerticalCalculator({
    tdClass: '',
    trClass: ''
});

const res = cal.generate(123.123, OPERATOR.mul, 345.111);

console.log(JSON.stringify(res.result));