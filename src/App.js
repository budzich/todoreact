import React, {useCallback, useState} from 'react';
import Board from './components/body/board.js';
import Head from './components/body/head.js';
import CreateButton from './components/body/createbutton.js';
import Add from './components/functions/add.js';
import Change from './components/functions/change.js';
import store from './store/store';
import {connect} from 'react-redux';


const formatTime = (date) =>
    `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;

const App = () => {
    const [creating, setCreating] = useState(false);
    const [changing, setChanging] = useState(false);
    const [value, setValue] = useState('');
    const [isChanging, setIsChanging] = useState(null);
    const storeState = store.getState();
    
    const handleToolbarClick = useCallback((i, noteIndex) => {
        if (i === 'create') {
            setCreating(true);
            setValue('');
        }

        if ((i === 'created') && value && !storeState.some(todo => todo.value === value)) {
            setCreating(false);
            store.dispatch({type: 'ADD_TODO', value: value, date: formatTime(new Date())});
            localStorage.setItem('main', JSON.stringify(storeState));
        }

        if (i === 'change') {
            setChanging(true);
            setValue(storeState[noteIndex].value);
            setIsChanging(noteIndex);
        }

        if ((i === 'changed') && value) {
            setChanging(false);
            store.dispatch({type: 'CHANGE_TODO', value: value, id: isChanging});
            localStorage.setItem('main', JSON.stringify(storeState));
        }
    }, [isChanging, storeState, value]);

    const handleChange = (event) => (
        setValue(event.target.value)
    );

    return (
        <div className='all-todo'>
            <Head/>
            <div className='list'>
                <Add
                    creating={creating}
                    value={value}
                    handleChange={handleChange}
                    onClick={handleToolbarClick}
                />
                <Change
                    changing={changing}
                    value={value}
                    handleChange={handleChange}
                    onClick={handleToolbarClick}
                />
                <Board
                    toolbarClick={handleToolbarClick}
                />
            </div>
            <CreateButton
                onClick={handleToolbarClick}
            />
        </div>
    );
};

export default connect(
    state => ({
        store: state,
    })
)(App);
