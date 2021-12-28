import React from 'react';

function TimeBlocks() {
    return(
        <div class="input-group mb-3 Timeblock" id="9" data-hour="9">
            <div class="input-group-prepend">
                <span class="input-group-text">9</span>
            </div>
            <input type="text" class="form-control TaskInput"/>
            <div class="input-group-append" id="SaveBtn">
                <button class="input-group-text">add</button>
            </div>
        </div>
    );
};

export default TimeBlocks;