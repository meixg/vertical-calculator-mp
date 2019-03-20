# 竖式计算器

[![Build Status](https://travis-ci.com/meixg/vertical-calculator-mp.svg?branch=master)](https://travis-ci.com/meixg/vertical-calculator-mp)

竖式计算器，可产出适用于小程序 rich-text 组件的 node 树。

## quick start

```javascript
const cal = new VerticalCalculator({
    tdClass: '',
    trClass: ''
});
const res = cal.generate(266, OPERATOR.div, 25);

// res = {
//     code: 0, // 状态码
//     result: [], // 产生的 node 树
//     text: '' // 如果有异常，信息显示在这里
// }
```

## API

### .generate(numberA, operator, numberB)

- Arguments
    - {number} numberA
    - {string} operator
    - {number} numberB

- Return

    ````javascript
    {
        code: 0, // 状态码
        result: [], // 产生的 node 树
        text: '' // 如果有异常，信息显示在这里
    }
    ````

- Usage

    产生 node 树。operator 支持以下四种：

    - `+`
    - `-`
    - `*`
    - `\`

### .checkInput(numberA, operator, numberB)

- Arguments
    - {number} numberA
    - {string} operator
    - {number} numberB

- Return
    
    ````javascript
    {
        code: 0, // 状态码
        result: [], // 产生的 node 树
        text: '' // 如果有异常，信息显示在这里
    }
    ````

- Usage

    在转换前对输入进行检查，code === 0 时，表示可以生成对应的 node 树。一般用于对不支持的输入进行过滤。

## 状态码

返回结果中 code 为状态码，为一下几种：

- `0`：成功
- `1`：输入必须为数字
- `2`：输入值不能为小数
- `3`：不支持的运算符
- `4`：除法时，被除数不能小于除数
- `5`：除法时，被除数不能为0
- `6`：减法时，numa 不能比 numb 小
- `7`：输入不能为小数
