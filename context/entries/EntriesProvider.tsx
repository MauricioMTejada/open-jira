import { FC, useReducer, ReactNode  } from 'react';
const { v4: uuidv4 } = require('uuid');

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';
import { Description } from '@mui/icons-material';

export interface EntriesState {
    entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}

interface EntriesProviderProps {
    children: ReactNode;
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {
        const newEntry: Entry = {
            _id: uuidv4(),
            description,
            createdAt: Date.now(),
            status: 'pending'
        }

        dispatch({ type: '[Entry] Add-Entry', payload: newEntry });

    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({ type: '[Entry] Entry-Updated', payload: entry });


    }

    return (
        <EntriesContext.Provider value={{
            ...state,

            // Methods
            addNewEntry,
            updateEntry,
        }} >
            { children }
        </EntriesContext.Provider>
    )
}