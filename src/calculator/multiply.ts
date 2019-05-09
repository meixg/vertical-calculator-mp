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
        this.width = Math.max(((numa * numb) + '').length, this.numaLength, this.numbLength) + 2;
    }

    calculateMultiply(numa: number, numb: number) {

        this.init(numa, numb);

        let res: trNode[] = [];

        const noPointNumb = +(numb + '').split('.').join('');
        const noPointNumbArr = (noPointNumb + '').split('');
        if (noPointNumbArr.length > 1 && this.numb !== 0 && this.numa !== 0) {
            const noPointNuma = +(numa + '').split('.').join('');
            let diff = 0;

            for (let i = noPointNumbArr.length - 1; i > -1; i --) {
                const currentB = +noPointNumbArr[i];

                const num = noPointNuma * currentB;
                res.push(this.generateProcessRow(num, diff, i === 0));
                diff++;
            }
        }

        res.push(this.generateResultRow(numa * numb));

        res = [
            this.generateQuestionRow(numa, false),
            this.generateQuestionRow(numb, true)
        ].concat(res);

        return {
            nodes: res,
            result: (numa * numb) + ''
        };
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

        const decimals = countDecimal(this.numaArr) + countDecimal(this.numbArr);
        const resDec = countDecimal(resultArr);

        if (decimals - resDec > 0) {
            if (resDec === 0) {
                resultArr.push('.');
            }
            for (let i = 0; i < decimals - resDec; i ++) {
                resultArr.push('0');
            }
        }

        const diff = this.width - resultArr.length;
        for (let i = this.width - 1; i > -1; i--) {
            const text = resultArr[i - diff] || '';
            const borderType = BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text);
        }

        return this.makeTrNode(row);

        function countDecimal(numArr: string[]) {
            const pos = numArr.indexOf('.');
            if (pos !== -1) {
                return numArr.length - pos - 1;
            }
            return 0;
        }
    }

    private generateQuestionRow(num: number, isSecond: boolean) {
        const numArr = (num + '').split('');
        const numLength = (num + '').length;
        const row: tdNode[] = new Array(this.width);
        for (let i = this.width - 1; i > -1; i--) {
            const text = numArr[i - (this.width - numLength)] || ((isSecond && i === 0) ? '×' : '');
            const borderType = isSecond ? BORDER_TYPES.BOTTOM : BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text)
        }
        return this.makeTrNode(row);
    }
}
