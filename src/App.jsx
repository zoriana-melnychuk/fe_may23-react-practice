import React, { useState } from 'react';
import './App.scss';
import cn from 'classnames';

import usersFromServer from './api/users';
import categoriesFromServer from './api/categories';
import productsFromServer from './api/products';

const products = productsFromServer.map((product) => {
  const category = categoriesFromServer.find(
    productCategory => productCategory.id === product.categoryId,
  );
  const user = usersFromServer.find(
    productOwner => productOwner.id === category.ownerId,
  );

  return {
    id: product.id,
    name: product.name,
    category,
    user,
  };
});

export const findProduct = (productId) => {
  const product = products.find(product1 => product1.id === productId);

  return product.name;
};

export const filterProducts = (products1, query) => {
  let visibleProducts = [...products1];

  if (query.length) {
    visibleProducts = visibleProducts.filter((product) => {
      const normalizedProductName = product.name.trim().toLowerCase();
      const normalizedQuery = query.trim().toLowerCase();

      return normalizedProductName.includes(normalizedQuery);
    });
  }

  return visibleProducts;
};

export const App = () => {
  const [activeUserId, setActiveUserId] = useState('');
  const [selectedCategoryId, setSelectedCategoryId] = useState([]);

  const [query, setQuery] = useState('');

  const visibleProducts = filterProducts(products, query);

  // const visibleProducts = [...products].filter(
  //   product => product.user && product.user.id === activeUserId,
  // );

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Product Categories</h1>

        <div className="block">
          <nav className="panel">
            <p className="panel-heading">Filters</p>

            <p className="panel-tabs has-text-weight-bold">
              <a
                data-cy="FilterAllUsers"
                href="#/"
                className={cn({ 'is-active': activeUserId === '' })}
                onClick={() => setActiveUserId('')}
              >
                All
              </a>

              {usersFromServer.map(
                user => (
                  <a
                    data-cy="FilterUser"
                    href="#/"
                    key={user.id}
                    className={cn({ 'is-active': activeUserId === user.id })}
                    onClick={() => setActiveUserId(user.id)}
                  >
                    {user.name}
                  </a>
                ),
              )}
            </p>

            <div className="panel-block">
              <p className="control has-icons-left has-icons-right">
                <input
                  data-cy="SearchField"
                  type="text"
                  className="input"
                  placeholder="Search"
                  onChange={(event) => {
                    setQuery(event.target.value);
                  }}
                />

                <span className="icon is-left">
                  <i className="fas fa-search" aria-hidden="true" />
                </span>

                <span className="icon is-right">
                  {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
                  <button
                    data-cy="ClearButton"
                    type="button"
                    className="delete"
                  />
                </span>
              </p>
            </div>

            <div className="panel-block is-flex-wrap-wrap">
              <a
                href="#/"
                data-cy="AllCategories"
                className="button is-success mr-6 is-outlined"
                onClick={
                  () => selectedCategoryId([])
                }
              >
                All
              </a>

              {categoriesFromServer.map(
                category => (
                  <a
                    data-cy="Category"
                    href="#/"
                    key={category.id}
                    className={
                      cn({
                        'button mr-2 my-1': true,
                        'is-info': selectedCategoryId.includes(category.id),
                      })
                    }
                    onClick={
                      () => setSelectedCategoryId(
                        selectedCategoryId.includes(category.id)
                          ? selectedCategoryId.filter(
                            categoryToCheck => categoryToCheck !== category.id,
                          )
                          : [...selectedCategoryId, category.id],
                      )
                    }
                  >
                    {category.title}
                  </a>
                ),
              )}
            </div>

            <div className="panel-block">
              <a
                data-cy="ResetAllButton"
                href="#/"
                className="button is-link is-outlined is-fullwidth"
              >
                Reset all filters
              </a>
            </div>
          </nav>
        </div>

        <div className="box table-container">
          <p data-cy="NoMatchingMessage">
            No products matching selected criteria
          </p>

          <table
            data-cy="ProductTable"
            className="table is-striped is-narrow is-fullwidth"
          >
            <thead>
              <tr>
                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    ID

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Product

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-down" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    Category

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort-up" />
                      </span>
                    </a>
                  </span>
                </th>

                <th>
                  <span className="is-flex is-flex-wrap-nowrap">
                    User

                    <a href="#/">
                      <span className="icon">
                        <i data-cy="SortIcon" className="fas fa-sort" />
                      </span>
                    </a>
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {/* products */}
              {visibleProducts.map((product) => {
                const category = categoriesFromServer.find(
                  categoryToCheck => categoryToCheck === product.category,
                );
                const owner = product
                  ? usersFromServer.find(user => user === product.user)
                  : null;

                return (
                  <tr data-cy="Product" key={product.id}>
                    <td className="has-text-weight-bold" data-cy="ProductId">
                      {product.id}
                    </td>

                    <td data-cy="ProductName">
                      {product.name}
                    </td>

                    <td data-cy="ProductCategory">
                      {category ? `${category.icon} - ${category.title}` : ''}
                    </td>

                    <td
                      data-cy="ProductUser"
                      className={cn({
                        'has-text-link': owner && owner.sex === 'm',
                        'has-text-danger': owner && owner.sex === 'f',
                      })}
                    >
                      {owner ? owner.name : ''}
                    </td>

                  </tr>
                );
              })}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
};
