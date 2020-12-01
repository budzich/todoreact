import React from 'react';
import Note from './note.js';
import store from '../../store/store';

const Board = ({
                   toolbarClick,
               }) =>
    (
        <div>
            {store.getState().map((number, i) =>
                <Note
                    key={i}
                    id={i}
                    noteInfo={store.getState()[i]}
                    OnChange={toolbarClick}
                />)
            }
        </div>
    );

export default Board;
