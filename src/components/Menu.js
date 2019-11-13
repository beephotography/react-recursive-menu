import React from 'react';


export const Menu = props => {
    const items = props.items;

    return <ul>
        {items.map(
            (item, idx) =>
                <li key={idx}>
                    {item.title}
                    {
                        item.children !== undefined && item.children.length > 0 &&
                        <Menu items={item.children} />
                    }
                </li>
        )}
    </ul>;
};