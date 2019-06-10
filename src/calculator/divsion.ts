import {RowGenerator} from '../RowGenerator';
import {
    tdNode,
    BORDER_TYPES
} from '../types';

export class DivsionCalculator extends RowGenerator {

    private width: number; // 总体宽度
    private numa: number;
    private numb: number;
    private numaArr: string[];
    private numbArr: string[];
    private numaLength: number;
    private numbLength: number;
    private isDecimal: boolean;
    private result: number;
    private resultLength: number;
    private resultArr: string[];
    private addedZerosLength: number;

    constructor(options) {
        super(options);
    }

    private init(numa: number, numb: number, len: number) {
        this.numaLength = (numa + '').length;
        this.numbLength = (numb + '').length;
        this.numaArr = (numa + '').split('');
        this.numbArr = (numb + '').split('');
        this.numa = numa;
        this.numb = numb;
        
        this.isDecimal = this.isDecimal || this.numaArr.indexOf('.') !== -1 || this.numbArr.indexOf('.') !== -1;
        
        this.result = this.isDecimal ? parseFloat((numa / numb).toPrecision(7)) : parseInt(numa / numb + '', 10);
        this.resultLength = (this.result + '').length;
        this.resultArr = (this.result + '').split('');

        this.addedZerosLength = (this.resultLength - this.resultArr.indexOf('.'))
            - (this.numaArr.indexOf('.') !== -1 ? this.numaLength - this.numaArr.indexOf('.') : 0);
        this.width = (this.isDecimal ? this.addedZerosLength : 0) + this.numaLength + this.numbLength;
    }

    calculateDivision(numa: number, numb: number) {
        const pos = (numb + '').indexOf('.');
        let len = 0;
        if (pos !== -1) {
            this.isDecimal = true;
            len = (numb + '').length - pos - 1;
            numa *= Math.pow(10, len);
            numb *= Math.pow(10, len);
        }

        this.init(numa, numb, len);

        let res = [];

        let leftNum = numa;

        let resultZhengLength = this.resultArr.indexOf('.');
        if (resultZhengLength === -1) {
            resultZhengLength = this.resultLength;
        }
        const pointPos = this.resultArr.indexOf('.');
        for (let i = 0; i < this.resultLength; i++) {
            const num = +this.resultArr[i];
            if (num === 0) {
                if (this.isDecimal && i > pointPos - 2 && i !== this.resultLength - 1) {
                    leftNum *= 10;
                }
                continue;
            }

            if (isNaN(num)) {
                continue;
            }

            const countNum = num * numb;
            let nextLeftNum = +parseFloat(leftNum - (countNum * Math.pow(10, Math.max((resultZhengLength - i - 1), 0))) + '').toPrecision(7);
            if (this.isDecimal && i > pointPos - 2 && i !== this.resultLength - 1) {
                nextLeftNum *= 10;
            }
            const countDiff = this.resultLength - i - 1;
            res = res.concat(this.generateProcessRow(leftNum, countNum, nextLeftNum, countDiff));
            leftNum = nextLeftNum;
        }

        res = [
            this.generateResultRow(this.result),
            this.generateQuestionRow()
        ].concat(res);

        return {
            nodes: res,
            result: this.isDecimal ? this.result + '' : this.result + '余' + (numa - numb * this.result)
        }
    }

    /**
     * 生成除法第一行的结果行
     * @param res 
     */
    private generateResultRow(res: number) {
        const resArr = (res + '').split('');
        const diff = this.width - resArr.length;

        const row: tdNode[] = new Array(this.width);
        for (let i = this.width - 1; i > -1; i--) {
            const text = resArr[i - diff] || '';
            const borderType = i > this.numbLength - 1 ? BORDER_TYPES.BOTTOM : BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text);
        }

        return this.makeTrNode(row);
    }

    private generateQuestionRow() {
        const rowb: tdNode[] = new Array(this.numbLength);
        for (let i = 0; i < this.numbLength; i++) {
            const text = this.numbArr[i];
            const borderType = (i === (this.numbLength - 1)) ? BORDER_TYPES.RIGHT : BORDER_TYPES.NONE;
            rowb[i] = this.makeTdNode(borderType, text);
        }

        const rowa: tdNode[] = new Array(this.numaLength);
        for (let i = 0; i < this.numaLength; i++) {
            const text = this.numaArr[i];
            rowa[i] = this.makeTdNode(BORDER_TYPES.NONE, text);
        }

        return this.makeTrNode(rowb.concat(rowa));
    }

    private generateProcessRow(topNum: number, countNum: number, leftNum: number, countDiff:number) {
        // 第一行
        const rowCount: tdNode[] = new Array(this.width);
        const countNumLength = (countNum + '').length;
        const diff = this.width - countNumLength - countDiff;
        const countNumArr = (countNum + '').split('');
        let i = 0
        for (;i < diff; i++) {
            const text = i === diff - 1 ? '-' : '';
            rowCount[i] = this.makeTdNode(BORDER_TYPES.NONE, text);
        }
        for (; i < diff + countNumLength; i++) {
            const text = countNumArr[i - diff];
            rowCount[i] = this.makeTdNode(BORDER_TYPES.BOTTOM, text);
        }
        for (; i < this.width; i++) {
            rowCount[i] = this.makeTdNode(BORDER_TYPES.NONE, '');
        }
        
        // 第二行
        leftNum = +(leftNum + '').split('.').join('');
        let addedZerosLength = this.addedZerosLength;
        while (this.isDecimal && countDiff > 0 && leftNum < this.numb) {
            leftNum *= 10;
            countDiff--;
            addedZerosLength > 0 && addedZerosLength--;
        }
        const rowLeft: tdNode[] = new Array(this.width);
        const leftNumLength = (leftNum + '').length;
        const leftNumArr = (leftNum + '').split('');

        for (let i = 0; i < this.width; i++) {
            const j = leftNumLength - (this.width - i - (this.isDecimal ? Math.min(addedZerosLength, Math.max(countDiff - 1, 0)) : 0));
            const text = leftNumArr[j] || '';
            rowLeft[i] = this.makeTdNode(BORDER_TYPES.NONE, text);
        }

        return [
            this.makeTrNode(rowCount),
            this.makeTrNode(rowLeft)
        ];
    }
}