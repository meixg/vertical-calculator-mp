export enum BORDER_TYPES {
    NONE = 0,
    TOP = 1,
    RIGHT = 2,
    BOTTOM = 4,
    LEFT = 8
}

export enum OPERATOR {
    div = '/',
    mul = '*',
    add = '+',
    sub = '-'
}

export interface trNode {
    name: string;
    attrs: {
        style?: string;
        class?: string;
    }
    children: tdNode[];
}

export interface tdNode {
    name: string;
    attrs: {
        style?: string;
        class?: string;
    },
    children: textNode[];
}

export interface textNode {
    type: string;
    text: string;
}


export enum RESULT_CODE {
    success,
    inputMustBeNumber, // 输入必须为数字
    numCantBeDecimal, // 输入值不能为小数
    operatorIsNotSupport, // 不支持的运算符
    divNumaSmallerThanNumb, // 除法时，被除数不能小于除数
    divNumbCantBeZero, // 除法时，被除数不能为0
    subNumbCantSmaller, // 减法时，numa 不能比 numb 小
    inputMustLargerThanZero, // 输入不能为小数
    exceedPrecision // 超出精度
}

export interface result {
    code: RESULT_CODE;
    result?: string;
    nodes?: trNode[];
    text?: string;
}