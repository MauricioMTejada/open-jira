import { FC, useReducer, ReactNode  } from 'react';
const { v4: uuidv4 } = require('uuid');

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';
import { Description } from '@mui/icons-material';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [
        {
            _id: uuidv4(),
            description: 'Pendiente: Primera línea de prueba',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            _id: uuidv4(),
            description: 'En-Progreso: Segunda línea de prueba',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            _id: uuidv4(),
            description: 'Terminadas: Tercera línea de prueba',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ],
}

interface EntriesProviderProps {
    children: ReactNode;
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    return (
        <EntriesContext.Provider value={{
            ...state,
        }} >
            { children }
        </EntriesContext.Provider>
    )
}