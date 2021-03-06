import React, { useContext } from 'react';
import { CategoryContext } from '../../App';

const CategoryDetail = () => {
    const category = useContext(CategoryContext);

    return (
        <div>
            <h4>This is your category detail</h4>
            <h6>Selected Category: {category}</h6>
        </div>
    );
};

export default CategoryDetail;