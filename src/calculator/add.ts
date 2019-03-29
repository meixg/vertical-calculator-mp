import {RowGenerator} from '../RowGenerator';
import {
    tdNode,
    BORDER_TYPES
} from '../types';

function getNumPreDiff(pointIndex, numLength, pointDiff, width) {
    const afterDiff = pointDiff > -1
        ? (pointIndex > -1
            ? pointDiff - (numLength - pointIndex)
            : pointDiff)
        : 0;
    return width - numLength - afterDiff;
}

export class AddCalculator extends RowGenerator {

    private width: number; // 总体宽度
    private numa: number;
    private numb: number;
    private numaArr: string[];
    private numbArr: string[];
    private numaLength: number;
    private numbLength: number;
    private pointDiff: number; // 小数点距离右边的距离
    private numaPointIndex: number;
    private numbPointIndex: number;
    private res: number;
    private numaPreDiff: number;
    private numbPreDiff: number;


    constructor(options) {
        super(options);
    }

    private init(numa: number, numb: number) {
        this.numaLength = (numa + '').length;
        this.numbLength = (numb + '').length;
        this.numa = numa;
        this.numb = numb;
        this.res = parseFloat((numa + numb).toPrecision(12));
        this.width = (this.res + '').length + 2; // 2 为加号的位置

        this.numaPointIndex = (numa + '').indexOf('.');
        this.numbPointIndex = (numb + '').indexOf('.');

        this.pointDiff = (this.numaPointIndex > -1 || this.numbPointIndex > -1)
            ? Math.max(this.numaLength - this.numaPointIndex, this.numbLength - this.numbPointIndex)
            : -1;
        
        if (this.pointDiff > -1) {
            this.numaArr = numa.toFixed(this.pointDiff - 1).split('');
            this.numbArr = numb.toFixed(this.pointDiff - 1).split('');
        }
        else {
            this.numaArr = (numa + '').split('');
            this.numbArr = (numb + '').split('');
        }

        this.numaPreDiff = getNumPreDiff(this.numaPointIndex, this.numaLength, this.pointDiff, this.width);
        this.numbPreDiff = getNumPreDiff(this.numbPointIndex, this.numbLength, this.pointDiff, this.width);
    }

    calculate(numa: number, numb: number) {

        this.init(numa, numb);

        let res = [];


        res = [
            this.generateMarkRow(),
            this.generateQuestionRow(0),
            this.generateQuestionRow(1),
            this.generateResultRow(this.res)
        ];

        return {
            nodes: res,
            result: this.res + ''
        }
    }

    private generateMarkRow() {
        const row: tdNode[] = new Array(this.width);

        let needMark = false;

        for (let i = this.width - 1; i > -1; i--) {
            let text = '';
            const numaText = this.numaArr[i - this.numaPreDiff];

            if (numaText !== '.') {
                const numbText = this.numbArr[i - this.numbPreDiff];
                text = needMark ? '1' : '';
                needMark = false;

                if (numaText && numbText && (+numaText + +numbText) > 9) {
                    needMark = true;
                }              
            }

            const type = BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(type, text, true);
        }

        return this.makeTrNode(row);
    }

    /**
     * 生成除法第一行的结果行
     * @param res 
     */
    private generateResultRow(res: number) {
        const resArr = (res + '').split('');
        const diff = this.width - resArr.length;

        const row: tdNode[] = new Array(this.width);
        for (let i = 0; i < this.width; i++) {
            const text = resArr[i - diff] || '';
            const borderType = BORDER_TYPES.NONE;
            row[i] = this.makeTdNode(borderType, text);
        }

        return this.makeTrNode(row);
    }

    private generateQuestionRow(line: number) {
        const row: tdNode[] = new Array(this.width);
        const numberArr = line === 0 ? this.numaArr : this.numbArr;
        const preDiff = line === 0 ? this.numaPreDiff : this.numbPreDiff;

        for (let i = 0; i < this.width; i++) {
            const text = (line === 1 && i === 0) ? '+' : numberArr[i - preDiff] || '';
            const borderType = line === 0 ? BORDER_TYPES.NONE : BORDER_TYPES.BOTTOM;
            row[i] = this.makeTdNode(borderType, text);
        }

        return this.makeTrNode(row);
    }

    private generateProcessRow(topNum: number, countNum: number, leftNum: number) {

    }
}