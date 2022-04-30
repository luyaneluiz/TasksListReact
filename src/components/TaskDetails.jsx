import React from 'react';
import { useHistory, useParams } from 'react-router-dom/cjs/react-router-dom.min';

import './TaskDetails.css'
import Button from './Button';

const TaskDetails = () => {
    const params = useParams();
    const history = useHistory();

    const handleBakcButton = () => {
        history.goBack();
    }
    return ( 
        <>
            <div className='back-button-container'>
                <Button onClick={handleBakcButton}>Voltar</Button>
            </div>

            <div className='task-details-container'>
                <h2>{params.taskTitle}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam ab sint beatae nostrum commodi labore consequatur voluptates unde fuga, assumenda adipisci delectus impedit amet, officiis temporibus? Accusamus quibusdam deleniti totam?
                </p>
            </div>
        </>
     );
}
 
export default TaskDetails;