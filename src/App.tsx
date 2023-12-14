import { Provider } from 'react-redux'
import BarraLateral from './conteiners/BarraLateral'
import ListaDeTarefas from './conteiners/ListaDeTarefas'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaDeTarefas />
      </Container>
    </Provider>
  )
}

export default App
