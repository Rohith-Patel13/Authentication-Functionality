import {Route} from 'react-router-dom'
import LoginForm from './components/Login/index'

const App = () => <Route exact path="/" component={LoginForm} />

export default App
