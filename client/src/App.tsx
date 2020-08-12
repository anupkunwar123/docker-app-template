import ReactDOM from 'react-dom'
import React, { useState, FunctionComponent } from 'react'

type MetaData = {
    title: string,
    desc: string
}

const App: React.FunctionComponent = ({ }) => {
    let [userName, setUserName] = useState<string>('')
    let [password, setPassword] = useState<string>('')



    return (
        <div>
            <h1>Login form</h1>
            <form action="/login"  method="post">
                <div>
                    <label>Username</label>
                    <input name="username" type="text" value={userName} onChange={(e) => { setUserName(e.target.value) }} />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </div>
                <div>
                    <input type="submit" value="Submit" />
                </div>
            </form>
        </div>
    )
}
export default App


