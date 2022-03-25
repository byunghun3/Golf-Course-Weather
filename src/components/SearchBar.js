import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        const { className, name, placeHolder, value, onChange, autoFocus } = this.props;
        return (
            <div>
                <input
                    className={className}
                    name={name}
                    placeHolder={placeHolder}
                    value={value}
                    onChange={onChange}
                    ref={autoFocus}
                    required
                />
            </div>
        )
    }
}

export default SearchBar;
