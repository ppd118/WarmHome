# GoodLive

https://www.bilibili.com/video/BV1jg411N7Rm



react细节知识

## 技术栈

React + ReactHook + ReactRouter + Redux + Axios + Less + 第三方

## 功能实现

1. 首页
2. 城市管理
3. 搜索
4. 上拉加载
5. 详情
6. 收藏
7. 订单

## 环境构建

### ==项目环境搭建==

使用React脚手架

```
npx create-react-app my-app
cd my-app
```

### 配置Less支持

React脚手架默认支持CSS和Sass和Scss，需要自己执行

#### 1. 拉取配置文件

完成项目创建后，推荐直接在项目根目录执行

``` sh
npm run eject
```

**操作解释**：[参考](https://blog.csdn.net/qq_30841657/article/details/91872302)

项目采用Webpack进行构建，需要增加配置文件进行修改，脚手架创建的项目在根目录的`package.json`文件中，默认支持以下4种命令：

``` json
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
```

- start 以开发模式**启动**项目；
- build 将整个项目**构建**；
- test **测试**；
- eject 将原本脚手架对webpack、babel等包的配置文件的封装弹射出来，即**暴露配置文件**，然后就可以进行修改

eject命令执行之后会在项目根目录新增`config`和`scripts`两个子目录：

- config：webpack等的配置文件`webpack.config.js`
- scripts：start、build、test命令的配置文件

**问题及解决**：

如果修改文件后再执行了`eject`命令会报错，解决方案：

方案1：访问项目根目录，显示隐藏文件，删除`.git`文件夹，再次执行eject

方案2：git commit

```sh
git add .
git commit -m “init”
npm run eject
```

#### 2. 安装依赖

安装less 和less-loader

``` sh
npm install less less-loader --save-dev
```

淘宝镜像比较快，需要先全局安装cnpm[参考](https://zhuanlan.zhihu.com/p/120159632)

```sh
npm install -g cnpm --registry=https://registry.npm.taobao.org
```

使用cnpm安装

```sh
cnpm install less less-loader --save-dev
```

#### 3. 修改配置文件

仿照根目录下`config -> webpack.config.js`文件种Sass的配置方式：

- 先修改样式文件正则表达式，仿照css和sass配置，本质上是后缀匹配，sass有两个后缀所以比较复杂

  ``` js
  // style files regexes
  const cssRegex = /\.css$/;
  const cssModuleRegex = /\.module\.css$/;
  const sassRegex = /\.(scss|sass)$/;
  const sassModuleRegex = /\.module\.(scss|sass)$/; 
  const lessRegex = /\.less$/;
  const lessModuleRegex = /\.module\.less$/; 
  ```

- 再仿照SASS进行配置，复制一份sass配置源码，改成less就行

  ```js
  // Opt-in support for LESS
              // By default we support LESS Modules with the
              // extensions .module.less
              {
                test: lessRegex,
                exclude: lessModuleRegex,
                use: getStyleLoaders(
                  {
                    importLoaders: 3,
                    sourceMap: isEnvProduction
                      ? shouldUseSourceMap
                      : isEnvDevelopment,
                    modules: {
                      mode: 'icss',
                    },
                  },
                  'less-loader'
                ),
                // Don't consider CSS imports dead code even if the
                // containing package claims to have no side effects.
                // Remove this when webpack adds a warning or an error for this.
                // See https://github.com/webpack/webpack/issues/6571
                sideEffects: true,
              },
              // Adds support for CSS Modules, but using LESS
              // using the extension .module.less
              {
                test: lessModuleRegex,
                use: getStyleLoaders(
                  {
                    importLoaders: 3,
                    sourceMap: isEnvProduction
                      ? shouldUseSourceMap
                      : isEnvDevelopment,
                    modules: {
                      mode: 'local',
                      getLocalIdent: getCSSModuleLocalIdent,
                    },
                  },
                  'less-loader'
                ),
              },
  ```

#### 4. 测试配置

测试less文件是否生效，删除`src`目录下其他脚手架生成的`js`、`css`文件，只保留`index.js`

``` js
import React from 'react';
import ReactDOM from 'react-dom';
import './style.less';


ReactDOM.render(
  <React.StrictMode>
    Hello
  </React.StrictMode>,
  document.getElementById('root')
);
```

增加一个`style.less`文件观察效果

``` less
*{
    margin: 0;
    padding: 0;
}
```

启动后样式生效就是配置成功

![](./img/1.png)

### 配置Axios网络请求

#### 1. 安装依赖

安装Axios

``` sh
cnpm install --save axios
```

#### 2. 修改配置文件

见utils -> request.js

## 实现首页展示

需求：Home(默认展示) LifeService Shop User 4个页面

### ==配置路由 v6新增！==

https://zhuanlan.zhihu.com/p/431389907

#### 1. 安装依赖

react-router-dom

``` sh
npm install --save react-router-dom
```

#### 2. 设置路由

问题，主要产生于react-router-dom 5 -> 6.2.2版本

可以手动降级到@5，也可以按照新规范修改：

1. Switch -> Routes
2. component -> element
3. {...} -> {<... />} http://betheme.net/news/txtlist_i158788v.html
3. exact="true"

``` jsx
import {HashRouter as Router, Route, Routes} from "react-router-dom"

const AppRouter= ()=>{
    return (
        <Router>
            <BottomNav />
            <Routes>
                <Route exact="true" path="/" element={ <Home /> } />
                <Route path="/life" element={ <LifeService /> } />
                <Route path="/shop" element={ <Shop /> } />
                <Route path="/user" element={ <User /> } />
            </Routes>
        </Router>
    )
}
```

#### 3. 路由嵌套

react-router-dom v6中的路由嵌套写法与v5有较大差异

需求：实现二级路由

- City，访问/city
- Layer，包裹底部导航和4个页面
  - Home，访问/
  - LifeService，访问/life
  - Shop，访问/shop
  - User，访问/user

**v5的写法**

``` jsx
<Router>
    <Switch>
        <Route path="/city" component={City}></Route>
        <Layout path="/">
            <BottomNav />
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/life" component={LifeService}></Route>
                <Route path="/shop" component={Shop}></Route>
                <Route path="/user" component={User}></Route>
            </Switch>
        </Layout>
    </Switch>
</Router>
```

**v6的写法**

v6的组件嵌套要求：

> All component children of <Routes> must be a <Route> or <React.Fragment>

Routes组件的孩子必须是<Route>或是<React.Fragment>，所以需要通过 element 属性将被嵌套的组件传进去

path推荐写成"*"

``` jsx
<Router>
    <Routes>
        <Route path="/city" element={ <City /> } />
        <Route path="*"
            element={
                <Layout exact="true">
                    <BottomNav />
                    <Routes>
                        <Route path="*" element={ <Home /> } />
                        <Route path="/life" element={ <LifeService /> } />
                        <Route path="/shop" element={ <Shop /> } />
                        <Route path="/user" element={ <User /> } />
                    </Routes>
                </Layout>
            }>
        </Route>
    </Routes>
</Router>
```

https://blog.csdn.net/HL477/article/details/122509415

#### 4. history.push

页面转跳，直接window.history.push

v5中可以使用withRouter，已弃用

``` jsx
import { withRouter } from "react-router-dom"

const CityList = (props) => {

    function clickCityHandle(){
        props.history.push("/")
    }
    return (
        <div onClick={ () => clickCityHandle() }></div>
    )
}
export default withRouter(CityList)
```

v6中替代：useNavigate

``` jsx
import { useNavigate } from "react-router-dom"

const CityList = (props) => {
	const navigate=useNavigate()
    function clickCityHandle(){
        navigate("/")
    }
    return (
        <div onClick={ () => clickCityHandle() }></div>
    )
}
export default CityList
```



### 配置样式

#### 1. iconfont

iconfont使用方法https://www.iconfont.cn/

下载icon代码后解压查看font-class 引用方法：

使用步骤如下：

1） 解压将相关文件并加入项目目录

  ![](img/fonticon.png)

有用的文件标红了，其他都是示例代码。
- 在src -> assets -> css 目录下放css文件
- 在src -> assets -> fonticon 目录下放其他
- 注意改css文件中引用其他文件的相对路径

2）项目index.js中引用css文件

``` jsx
<link rel="stylesheet" href="./iconfont.css">
// or
import "./iconfont.css"
```

3）挑选相应图标并获取类名，应用于页面：

```html
<span class="iconfont icon-xxx"></span>
<i class="iconfont icon-xxx"></i>
```

> " iconfont" 是你项目下的 font-family。可以通过编辑项目查看，默认是 "iconfont"。

#### 2. less

在每个组件的文件夹中创建index.jsx和style.less，写对应格式就行

public -> common.less 中是共享的css属性

### 底部导航

使用react-router-dom中的NavLink进行页面转跳

注意：exact="true"，不然会报错

``` JSX
import { NavLink } from "react-router-dom"
const BottomNav = () =>{
    return(
        <div className="nav-footer">
            <ul className="clear-fix">
                <li>
                    <NavLink exact="true" to="/">
                        <i className="iconfont icon-home"></i>
                        首页
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/life">
                        <i className="iconfont icon-trophy"></i>
                        生活服务
                    </NavLink>
                </li>
                ...
            </ul>
        </div>
    )
}
```

### 顶部导航

rem自适应方法

见public->index.html

\* @deprecated Legacy

### 首页轮播

https://react-swipeable-views.com/getting-started/installation/

安装依赖：

    ``` js
    npm install --save react-swipeable-views
    npm install --save react-swipeable-views-utils
    ```

### 服务器提供数据

安装依赖：

``` js
npm install --save experss
npm install --save cors
```

## ==Redux==

### 1. 添加依赖

``` sh
npm install --save redux
npm install --save react-redux
npm install --save-dev redux-devtools-extension
```

chrome插件：Redux DevTools

### 2. 核心概念

http://cn.redux.js.org/tutorials/essentials/part-1-overview-concepts/

- **state**：驱动应用的真实数据源头
- **view**：基于当前状态的 UI 声明性描述
- **actions**：根据用户输入在应用程序中发生的事件，并触发状态更新

#### store action reducer

store：状态树

- state：store的一个快照
- state改变会引起view的变化

action：事件派发

- view接收到事件，派发action

reducer：接收state和action

- 类似于事件监听器

- 根据以前的state和接收到的action，改变state

#### Redux数据流

具体来说，对于 Redux，我们可以将这些步骤分解为更详细的内容：

- 初始启动：
  - 使用最顶层的 root reducer 函数创建 Redux store
  - store 调用一次 root reducer，并将返回值保存为它的初始 `state`
  - 当 UI 首次渲染时，UI 组件访问 Redux store 的当前 state，并使用该数据来决定要呈现的内容。同时监听 store 的更新，以便他们可以知道 state 是否已更改。
- 更新环节：
  - 应用程序中发生了某些事情，例如用户单击按钮
  - dispatch 一个 action 到 Redux store，例如 `dispatch({type: 'counter/increment'})`
  - store 用之前的 `state` 和当前的 `action` 再次运行 reducer 函数，并将返回值保存为新的 `state`
  - store 通知所有订阅过的 UI，通知它们 store 发生更新
  - 每个订阅过 store 数据的 UI 组件都会检查它们需要的 state 部分是否被更新。
  - 发现数据被更新的每个组件都强制使用新数据重新渲染，紧接着更新网页

##### reducer

创建reducer，传入的参数是state和action

- state要有默认值
- 根据action.type判断怎样修改state

``` jsx
const defaultState= {
    cityName: "北京"
}

const city= (state=defaultState,action)=>{
    switch(action.type){
        case INIT_CITY:
            return {
                cityName: action.cityName
            }
        case CHANGE_CITY:
            return {
                cityName: action.cityName
            }
        default:
            return state
    }
}

export default city
```

用 [`combineReducers`](http://cn.redux.js.org/api/combinereducers) 来把多个 reducer 创建成一个rootReducer

``` js
import { combineReducers } from "redux";
import city from "./city";

const rootReducer= combineReducers({
    city
})

export default rootReducer
```

##### store

创建store，应用中只创建一个 store！接收rootReducer

``` js
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension"
import rootReducer from "../reducers";

const store= createStore(rootReducer, composeWithDevTools())

export default store
```

用Provider传递store

``` jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

ReactDOM.render(
  // Render a `<Provider>` around the entire `<App>`,
  // and pass the Redux store to as a prop
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
```

##### action

创建action creator函数，每次调用会返回一个action对象

``` js
function changeCity(cityName){
    return{
        type: INIT_CITY,
        cityName
    }
}
```

派发action，在DOM中useDispatch派发action对象

``` jsx
import { useSelector, useDispatch } from "react-redux";

const City=()=>{

    const city=useSelector(state => state.city)
    const dispatch=useDispatch()
    console.log(city);

    function onCityEvent(city){       
        dispatch(changeCity(city))
    }
    
    return (
        <div onClick={()=>onCityEvent(city)}></div>
    )
}
```

### ==问题：reducer互相影响==

https://segmentfault.com/q/1010000012062981

注意default应该返回传入的state快照

## ==内存泄漏==

原因：

state，事件监听，计时器，请求，在组件卸载的时候没有销毁

请求的问题可能不是问题：[React18对Hook带来的影响](https://mp.weixin.qq.com/s/fgT7Kxs_0feRx4TkBe6G5Q)

解决方案

### state

需要在每次setState操作前判断，因为组件卸载之后setState函数也不存在

``` jsx
useEffect(()=>{
        let isMount=true
        loadImageAsync(ele.img).then((url)=>{
            isMount && setImg(url)
        }).catch((reason)=>{
            console.log(reason);
        })
        return ()=>{
            isMount=false
        }
    },[])
```

### 清除事件绑定

``` js
useEffect(()=>{
    function scrollHandle(){
        if (more.current){
            setLoadTop(more.current.getBoundingClientRect().top)
        }
    }

    window.addEventListener("scroll", scrollHandle)

    return ()=>{
        console.log("clear");
        // clearTimeout(timer)
        window.removeEventListener("scroll", scrollHandle)
    }
},[])
```

### 清除定时器

防抖的时候有定时器，其实应该清除掉，当时没写

https://www.jianshu.com/p/1ca0fa40e58b

``` js
import { useRef } from "react";
function useDebounceFn(func, wait, immediate) {
    let timeout = useRef(), context, result;
    console.log(timeout, "timeout");
    function resDebounced(...args) {
        // 这个函数里面的this就是要防抖函数要的this
        //args就是事件对象event
        context = this;

        // 一直触发一直清除上一个打开的延时器
        if (timeout.current) clearTimeout(timeout.current);

        if (immediate) {
            // 第一次触发，timeout===undefined恰好可以利用timeout的值
            const callNow = !timeout.current;
            timeout.current = setTimeout(function() {
                timeout.current = null;
            }, wait);
            if (callNow) result = func.apply(context, args);

        } else {
            // 停止触发，只有最后一个延时器被保留
            timeout.current = setTimeout(function() {
                timeout.current = null;
                // func绑定this和事件对象event，还差一个函数返回值
                result = func.apply(context, args);
            }, wait);
        };
        return result;
    };
    resDebounced.cancal = function(){
        clearTimeout(timeout.current);
        timeout.current = null;
    };
    return resDebounced;
};
export default useDebounceFn;
```

在useEffect的return里面加上`resDebounced.cancal()`，就能清掉定时器

### 取消请求

AbortController钩子，当时也没写，不知道怎么封装

https://www.axios-http.cn/docs/cancellation

``` js
const controller = new AbortController();

axios.get('/foo/bar', {
   signal: controller.signal
}).then(function(response) {
   //...
});
// 取消请求
controller.abort()
```

