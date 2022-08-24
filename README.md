# 竹合制作-答题系统

## 如何启动项目

* 依赖于node.js开发环境
* 安装依赖

```bash
$ yarn
```
* 启动项目
```bash
$ yarn start
```
* 部署项目到github中可以访问
```bash
$ yarn deploy
```
* 访问地址：https://cz160.github.io/answer-app/

## 如何修改题目
* 找到src/pages/question/constants.ts文件
* 里面有个QuestionList表示题目列表数据
* 结构
```ts
const QuestionList = [
  {
    // 每一个对象表示一道题目拥有以下属性
    id: 表示题目的id(自增)
    title: 表示题目的问题是什么
    // 表示题目的选择项目
    options:[ 
      // 每一个对象表示表示当前题目的选项拥有以下属性
      {
        id: 表示选项的id(自增),
        title: 表示选项的内容
        scope: 表示选择这个选项后可以得多少分
      }
    ]
  }
]
```
### 结果计算规则
* 找到src/pages/result/constants.ts文件
* 里面有个ResultList表示结果展示列表,没一个对象表示一个结果，拥有以下属性
```ts
{
  // 分数开始区间
  start: number,
  // 分数结束区间
  end: number,
  // 最终展示的结果
  text: string,
}
```
* 答完所有题目后，会根据每一道题所得的分数，作出一个总分计算
```
会在结果列表中，找到当前总分所处于对应[start,end]区间的结果作为最终展示
```
