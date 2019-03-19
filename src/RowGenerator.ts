import { 
    tdNode,
    trNode,
    textNode,
    BORDER_TYPES
} from './types';

interface options {
    trClass?: string;
    tdClass?: string;
    blockWidth?: string;
}

export class RowGenerator {
    private trClass: string;
    private tdClass: string;
    private blockWidth: string;

    constructor(options: options) {
        this.trClass = options.trClass || '';
        this.tdClass = options.tdClass || '';
        this.blockWidth = options.blockWidth || '10px';
    }

    protected makeTrNode(tdNodes: tdNode[]): trNode {
        return {
            name: 'tr',
            attrs: {
                class: this.trClass
            },
            children: tdNodes
        };
    }

    protected makeTdNode(borderType: number, text: string, isSpecial?: boolean): tdNode {
        const BorderStyle = this.generateBorderStyle(borderType);
        const sizeStyle = this.generateSizeStyle();
        return {
            name: 'td',
            attrs: {
                class: this.tdClass,
                style: BorderStyle + sizeStyle + (isSpecial ? this.generateSpecialTextStyle() : '')
            },
            children: [this.makeTextNode(text)]
        };
    }

    private makeTextNode(text: string): textNode {
        return {
            type: 'text',
            text
        };
    }

    private generateSizeStyle() {
        return `width: ${this.blockWidth};`
    }

    private generateSpecialTextStyle() {
        return 'color: red;';
    }

    private generateBorderStyle(type: number) {
        let content = '';
    
        if (type & BORDER_TYPES.TOP) {
            content += 'border-top-color: #000;';
        }
        if (type & BORDER_TYPES.RIGHT) {
            content += 'border-right-color: #000;';
        }
        if (type & BORDER_TYPES.BOTTOM) {
            content += 'border-bottom-color: #000;';
        }
        if (type & BORDER_TYPES.LEFT) {
            content += 'border-left-color: #000;';
        }
    
        return 'border: 1px solid transparent;' + content;
    }
}