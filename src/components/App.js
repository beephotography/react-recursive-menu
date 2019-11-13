import React from "react";

import { Menu } from "./Menu";

const items = [
    {
        title: "foo1",
        children: [
            {
                title: "foo1.1",
                children: [
                    {
                        title: "foo1.1.1"
                    },
                    {
                        title: "foo1.1.2"
                    }
                ]
            },
            {
                title: "foo1.2"
            },
            {
                title: "foo1.3"
            }
        ]
    },
    {
        title: "foo2"
    },
    {
        title: "foo3"
    }
];

export const App = () =>
    <div>
        <h1>Menu with react:</h1>
        <Menu items={items} />
    </div>;