import React, {useCallback} from 'react';

const CreateButton = ({
                          onClick,
                      }) => {
    const handleClick = useCallback(() => onClick('create'), [onClick]);

    return (
        <div className='create-button'>
            <div className='plus' onClick={handleClick}>
                <h2>+</h2>
            </div>
        </div>
    );
};

export default CreateButton;
