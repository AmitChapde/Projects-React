import React from 'react';
import { Link ,Outlet } from 'react-router-dom';

function Products() {
  return (
    <>
    <div>
      <input placeholder='Search Products'></input>
    </div>
    <nav>
        <Link to="featured">Featured</Link>
        <Link to="new">New</Link>
    </nav>
    <Outlet/>
    </>
  );
}

export default Products;