import React from 'react'

const Toggle = () => {

    return (
        <div className="toggle-container">
            <label className="toggle-switch" >
                <input type="checkbox" id="toggleCheckbox"  />
                <span className="toggle-slider"></span>
            </label>
        </div>
    )
}

export default Toggle