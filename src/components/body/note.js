import React, {useCallback} from 'react';
import cn from 'classnames';
import store from '../../store/store';

const Note = ({
                  noteInfo: {
                      complete,
                      favorite,
                      value,
                      date,
                  },
                  id,
                  OnChange,
              }) => {
    const handleOnDelete = useCallback(() => {
        store.dispatch({type: 'DELETE_TODO', id: id});
        localStorage.setItem('main', JSON.stringify(store.getState()));
    }, [id]);

    const handleOnFavorite = useCallback(() => {
        store.dispatch({type: 'FAVORITE_TODO', id: id});
        localStorage.setItem('main', JSON.stringify(store.getState()));
    }, [id]);

    const handleOnComplete = useCallback(() => {
        store.dispatch({type: 'COMPLETE_TODO', id: id});
        localStorage.setItem('main', JSON.stringify(store.getState()));
    }, [id]);

    const handleOnChange = useCallback(() => OnChange('change', id), [OnChange, id]);

    return (
        <div className={cn('note', {'complete': complete}, {'favorite': favorite})}>
            <div className='wrap'>
                <div>
                    <div className='star' onClick={handleOnFavorite}/>
                    <div className='change' onClick={handleOnChange}/>
                    <div className='delete' onClick={handleOnDelete}/>
                </div>
                <div><h3>{value}</h3></div>
                <p className='date'>{date}</p>
            </div>
            <div className='nowrap'>
                <div className='ok' onClick={handleOnComplete}/>
            </div>
        </div>
    );
};

export default Note;
