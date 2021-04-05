# 评论列表

## 说明

本组件部分引用uniapp评论列表的样式，封装为插件，增加了回复评论的内容，还有点击头像/用户名称，点击评论的事件。


## 基本用法

在template中使用组件
```html
<qizai9527-commentList :list="commentList" @clickComment="clickComment"  @clickUser="clickUser"></qizai9527-commentList>
```  


```javascript
export default {
    data() {
        return {
            commentList:[
            	{
            		id:1,
            		userId:3,
            		avatar:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976832114,2993359804&fm=26&gp=0.jpg',
            		name:'小心',
            		time:1617086756,
            		content:'中国外交官这样讽加拿大总理',
            		pContent:'跟着我一起姚',
            		pName:'宝宝',
            		replyNumber:20,
            	},
            	{
            		id:2,
            		userId:3,
            		avatar:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976832114,2993359804&fm=26&gp=0.jpg',
            		name:'小心',
            		time:1617086756,
            		content:'中国外交官这样讽加拿大总理',
            		
            	},
            	{
            		id:3,
            		userId:4,
            		avatar:'https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1976832114,2993359804&fm=26&gp=0.jpg',
            		name:'小心',
            		time:1617086756,
            		content:'中国外交官这样讽加拿大总理',
            		
            	}
            ]
        }
    },
    methods:{
		// 点击评论事件
        clickComment(e){
        	console.log(e);
        },
		// 点击头像/用户名称事件
        clickUser(e){
        	console.log(e);
        }
    }
}
```

## API

**属性说明**

|属性名|类型|默认值|说明|
:---:|:----:|:---:|:--:|
|id|String|null|评论ID|
| userId | String |  null  |     用户ID     |
| avatar | Number |  null  | 用户头像 |
| name | Boolean |  null  | 用户名称。 |
| content | String |  null  | 评论内容 |
| time | Array |  null  | 发表评论时间 |
| pName | Boolean |  null  | 父级评论者 |
| pContent | Boolean |  null  | 父级评论内容 |
| replyNumber | Boolean |  null  | 回复评论个数 |

**事件说明**  

|   事件名   |  说明  |返回值 |
| :--- : | :--: | :----: |
|  @clickComment   | 点击评论触发 | 返回评论ID |
| @clickUser | 点击用户信息触发。包括头像，名称|  返回用户ID    |


补充：有任何问题联系wx：chwlzgz 。在线求打扰~