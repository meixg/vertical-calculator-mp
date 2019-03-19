import {RowGenerator} from '../RowGenerator';
import {
    tdNode,
    BORDER_TYPES,
    trNode
} from '../types';

export class MultiplyCalculator extends RowGenerator {

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
        this.width = ((numa * numb) + '').length;
    }

    calculateMultiply(numa: number, numb: number) {

        this.init(numa, numb);

        const res: trNode[] = [];
        for (let i = this.numbLength - 1; i > -1; i --) {
            const num = numa * (+this.numbArr[i]);
            const diff = this.numbLength - 1 - i;

            res.push(this.generateProcessRow(num, diff, i === 0));
        }

        res.push(this.generateResultRow(numa * numb));

        return [
            this.generateQuestionRow(numa, false),
            this.generateQuestionRow(numb, true)
        ].concat(res);
    }

    private generateProcessRow(num: number, diff: number, isLast: boolean) {
        const numLength = (num + '').length;
        const numArr = (num + '').split('');
        const row: tdNode[] = new Array(this.width);
        for (let i = this.width - 1; i > -1; i --) {
            const text = numArr[i - (this.width - numLength) + diff] || '';
            const borderType = isLast ? BORDER_TYPES.BOTTOM : BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text);
        }

        return this.makeTrNode(row);
    }

    private generateResultRow(result: number) {
        const row: tdNode[] = new Array(this.width);
        const resultArr = (result + '').split('');

        for (let i = this.width - 1; i > -1; i --) {
            const text = resultArr[i];
            const borderType = BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text);
        }

        return this.makeTrNode(row);
    }

    private generateQuestionRow(num: number, isSecond: boolean) {
        const numArr = (num + '').split('');
        const numLength = (num + '').length;
        const row: tdNode[] = new Array(this.width);
        for (let i = this.width - 1; i > -1; i--) {
            const text = numArr[i - (this.width - numLength)] || ((isSecond && i === 0) ? 'X' : '');
            const borderType = isSecond ? BORDER_TYPES.BOTTOM : BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text)
        }
        return this.makeTrNode(row);
    }
}
