import * as React from 'react';

export function Header(props: { children?: React.ReactNode }) {
    return (
        <header>
            <div>LOGO</div>
            {props.children}
        </header>
    )
}