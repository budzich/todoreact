import React, {useCallback} from 'react';
import cn from 'classnames';

const Change = ({
                    onClick,
                    value,
                    handleChange,
                    changing,
                }) => {
    const handleClick = useCallback(() => onClick('changed'), [onClick]);

    return (
        <div className={cn('create-change', {'hidden': !changing})}>
            <input type='text' className='create-change-text' value={value} onChange={handleChange}/>
            <p className='create-change-text-button' onClick={handleClick}>Change</p>
        </div>
    );
};

export default Change;
