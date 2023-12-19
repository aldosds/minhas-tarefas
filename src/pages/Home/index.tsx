import BotaoAdicionar from '../../components/BotaoAdicionar'
import BarraLateral from '../../conteiners/BarraLateral'
import ListaDeTarefas from '../../conteiners/ListaDeTarefas'

const Home = () => (
  <>
    <BarraLateral mostrarFiltros />
    <ListaDeTarefas />
    <BotaoAdicionar />
  </>
)

export default Home
