import { createContext, useReducer } from 'react';
import { UserType, userInitialState, userReducer } from '../reducers/userReducer';
import { reducerActionType } from '../types/reducerActionType';

type InitialStateType = {
    user: UserType;
}

type ContextType = {
    state: InitialStateType;
    dispatch: React.Dispatch<any>;
}

type Props = {
    children?: React.ReactNode;
}

const InitialState = {
    user: userInitialState
}

export const Context = createContext<ContextType>({
    state: InitialState,
    dispatch: () => null
});

// Reducer que vai englobar os demais
const mainReducer = ( state: InitialStateType, action: reducerActionType ) => ({
    user: userReducer( state.user, action)
})


export const ContextProvider = ({ children }:Props) => {
    const [state, dispatch] = useReducer(mainReducer, InitialState);

    return (
        <Context.Provider value={{ state, dispatch }}>
            { children }
        </Context.Provider>
    );
}
