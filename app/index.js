import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Theme from './contexts/theme'
import Nav from './components/Nav'
import Loading from './components/Loading'
import './index.css'

/*
此代码将会在组件首次渲染时，自动导入包含 OtherComponent 组件的包。
React.lazy 接受一个函数，这个函数需要动态调用 import()。它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件 
*/
const Posts = React.lazy(() => import('./components/Posts'))
const Post = React.lazy(() => import('./components/Post'))
const User = React.lazy(() => import('./components/User'))

function App() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => setTheme(x => x === 'light' ? 'dark' : 'light')

    return (
        <Router>
            <Theme.Provider value={theme}>
                <div className={theme}>
                    <div className='container'>
                        <Nav toggleTheme={toggleTheme} />
                        {/* fallback 属性接受任何在组件加载过程中你想展示的 React 元素 */}
                        <React.Suspense fallback={<Loading />}>
                            <Switch>
                                <Route 
                                    exact
                                    path='/'
                                    render={() => <Posts type='top' />}
                                />
                                <Route 
                                    path='/new'
                                    render={() => <Posts type='new' />}
                                />
                                <Route path='/post' component={Post} />
                                <Route path='/user' component={User} />
                                <Route render={() => <h1>404</h1>} />
                            </Switch>
                        </React.Suspense>
                    </div>
                </div>
            </Theme.Provider>            
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))