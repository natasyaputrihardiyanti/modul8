import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from './Home';
import User from './User';
import Form from './Form';
import Product from './Product';
import AddProduct from './AddProduct';

const Utama = () => (
    <switch>
        <Route path="/Home" component={Home} />
        <Route path="/User" component={User} />
        <Route path="/Form" component={Form} />
        <Route path="/Product" component={Product} />
        <Route path="/AddProduct" component={AddProduct} />

    </switch>
)

export default Utama;
