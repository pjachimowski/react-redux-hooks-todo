import React from 'react';

function TodoInput() {
    return(
        <div>
            <div className="row m-2">
                <input type="text" className="form-control" />
                <button className="btn btn-primary mx-2">Add</button>
            </div>
        </div>
    )
}

export default TodoInput;