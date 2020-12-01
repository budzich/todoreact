import React, {useCallback} from 'react';
import cn from 'classnames';

const Add = ({
                 creating,
                 value,
                 handleChange,
                 onClick,
             }) => {
    const handleClick = useCallback(() => onClick('created'), [onClick]);

    return (
        <div className={cn('create', {'hidden': !creating})}>
            <input type='text' className='create-text' value={value} onChange={handleChange}/>
            <p className='create-text-button' onClick={handleClick}>Add</p>
        </div>
    );
};

export default Add;
