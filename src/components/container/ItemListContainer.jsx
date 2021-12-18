import React, { Fragment, useEffect, useState } from 'react'
import MockedItems from '../Mock/ItemsMocked';
import { ItemList } from './ItemList'


export const ItemListContainer = (props) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                    resolve(MockedItems);
                }, 2000);
            } catch (error) {
                console.log(error);
            }
        });
        promise.then(items => setItems(items));
    },[items])

    return (
        <Fragment>
           <ItemList items={items} />
        </Fragment>
    )
}
