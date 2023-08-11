import React from 'react';

export interface ITodoItemProps {
    key: number
}

export function TodoItem(props: ITodoItemProps) {
    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <input type="checkbox" name="" id="" />
            <div>Contact Elmer</div>
        </div>
    );
}
