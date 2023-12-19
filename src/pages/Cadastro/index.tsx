import BarraLateral from '../../conteiners/BarraLateral'
import Formulario from '../../conteiners/Formulario'

const Cadastro = () => (
  <>
    {/* barra lateral */}
    <BarraLateral mostrarFiltros={false} />
    <Formulario />
  </>
)

export default Cadastro
