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

    constructor(options) {
        super(options);
    }

    private init(numa: number, numb: number) {
        this.numaLength = (numa + '').length;
        this.numbLength = (numb + '').length;
        this.numaArr = (numa + '').split('');
        this.numbArr = (numb + '').split('');
        this.numa = numa;
        this.numb = numb;
        this.width = this.numaLength + this.numbLength;
    }

    calculateDivision(numa: number, numb: number) {

        this.init(numa, numb);

        let res = [];
        const zheng = parseInt(numa / numb + '', 10);
        const zhengLength = (zheng + '').length;
        const zhengArr = (zheng + '').split('');

        let leftNum = numa;
        for (let i = 0; i < zhengLength; i++) {
            const num = +zhengArr[i];
            if (num === 0) {
                continue;
            }

            const countNum = num * numb;
            const nextLeftNum = leftNum - (countNum * ((zhengLength - i - 1) === 0 ? 1 : (zhengLength - i - 1) * 10));
            res = res.concat(this.generateProcessRow(leftNum, countNum, nextLeftNum));
            leftNum = nextLeftNum;
        }

        res = [
            this.generateResultRow(zheng),
            this.generateQuestionRow()
        ].concat(res);

        return {
            nodes: res,
            result: zheng + '余' + (numa - numb * zheng)
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
            const borderType = (this.width - 1 - i) < this.numaLength ? BORDER_TYPES.BOTTOM : BORDER_TYPES.NONE;
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

    private generateProcessRow(topNum: number, countNum: number, leftNum: number) {
        // 第一行
        const rowCount: tdNode[] = new Array(this.width);
        const diff = this.width - (topNum + '').length;
        const countNumLength = (countNum + '').length;
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
        const rowLeft: tdNode[] = new Array(this.width);
        const leftNumLength = (leftNum + '').length;
        const leftNumArr = (leftNum + '').split('');
        for (let i = 0; i < this.width; i++) {
            const j = leftNumLength - (this.width - i);
            const text = leftNumArr[j] || '';
            rowLeft[i] = this.makeTdNode(BORDER_TYPES.NONE, text);
        }

        return [
            this.makeTrNode(rowCount),
            this.makeTrNode(rowLeft)
        ];
    }
}