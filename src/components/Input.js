import React from 'react';

function Input({
    placeholder,
    value,
    onChange,
    type,
    name,
    label,
    required
}) {
    return (
        <div className="col-xxs-12 col-xs-6 mt">
            <div className="input-field">
                <label>{label}</label>
                <input type={type}
                    className="form-control"
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                />
            </div>
        </div>
    );

}

export default Input;