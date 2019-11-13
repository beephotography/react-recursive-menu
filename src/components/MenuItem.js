import React from 'react';

import { Menu } from "./Menu";

export const MenuItem = props => {
    const { item } = props;

    return <li>
        {item.title}
        {
            item.children !== undefined && item.children.length > 0 &&
            <Menu items={item.children} />
        }
    </li>;
};