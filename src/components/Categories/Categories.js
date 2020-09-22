import React from 'react';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const Categories = (props) => {
    const {count} = props;
    return (
        <div>
            <h2>Select your Categories</h2>
            <CategoryDetail count={count}></CategoryDetail>
        </div>
    );
};

export default Categories;