import React from 'react';

import { MenuItem } from "./MenuItem";

export const Menu = props => {
    const items = props.items;

    return <ul>
        {items.map(
            (item, idx) =>
                <MenuItem key={idx} item={item} />
        )}
    </ul>;
};