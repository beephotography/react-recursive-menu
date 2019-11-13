import React from 'react';

export const Item = props => {
    const items = props.items;

    return <div>{items.map(
            (val, idx) =>
                <li>
                    1
                </li>
    )}</div>
};