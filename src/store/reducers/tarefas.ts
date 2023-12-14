import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'

import * as enums from '../../utils/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      titulo: 'Estudar JavaScript',
      descricao: '',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Starus.PENDENTE
    },
    {
      id: 2,
      titulo: 'Estudar TypeScript',
      descricao: 'Reveraula 2 do módulo',
      prioridade: enums.Prioridade.NORMAL,
      status: enums.Starus.CONCLUIDA
    },
    {
      id: 3,
      titulo: 'Estudar React',
      descricao: 'Praticar o useEffect',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Starus.PENDENTE
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id != action.payload)
    }
  }
})

export const { remover } = tarefasSlice.actions

export default tarefasSlice.reducer
