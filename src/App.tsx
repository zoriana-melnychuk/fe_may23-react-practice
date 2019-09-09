import React from 'react';
import './App.scss';

import classNames from 'classnames';
import usersFromServer from './api/users';
import productsFromServer from './api/products';
import categoriesFromServer from './api/categories';

const products = productsFromServer.map(product => {
  const category = categoriesFromServer.find(c => c.id === product.categoryId);
  const user = usersFromServer.find(u => u.id === category?.ownerId);

  return { ...product, category, user };
});

export const App: React.FC = () => (
  <div className="section">
    <div className="container">
      <h1 className="title">People Page</h1>

      <div className="block">
        <nav className="panel">
          <p className="panel-heading">Filters</p>

          <p className="panel-tabs has-text-weight-bold">
            <a className="is-active" href="#/">All</a>

            {usersFromServer.map(user => (
              <a key={user.id} href="#/">{user.name}</a>
            ))}
          </p>

          <div className="panel-block">
            <p className="control has-icons-left">
              <input type="search" className="input" placeholder="Search" />

              <span className="icon is-left">
                <i className="fas fa-search" aria-hidden="true" />
              </span>
            </p>
          </div>

          <div className="panel-block is-flex-wrap-wrap">
            <a className="button is-success is-outlined mr-6" href="#/">All</a>

            {categoriesFromServer.map(category => (
              <a key={category.id} className="button mr-2 my-1" href="#/">
                {category.title}
              </a>
            ))}
          </div>

          <div className="panel-block">
            <a className="button is-link is-outlined is-fullwidth" href="#/">
              Reset all filters
            </a>
          </div>
        </nav>
      </div>

      <div className="box table-container">
        <table className="table is-striped is-hoverable is-narrow is-fullwidth">
          <thead>
            <tr>
              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  ID

                  <a href="#/">
                    <span className="icon">
                      <i className="fas fa-sort-up" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Product

                  <a href="#/">
                    <span className="icon">
                      <i className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  Category

                  <a href="#/">
                    <span className="icon">
                      <i className="fas fa-sort-down" />
                    </span>
                  </a>
                </span>
              </th>

              <th>
                <span className="is-flex is-flex-wrap-nowrap">
                  User

                  <a href="#/">
                    <span className="icon">
                      <i className="fas fa-sort" />
                    </span>
                  </a>
                </span>
              </th>
            </tr>
          </thead>

          <tbody>
            {products.map(product => (
              <tr key={product.id}>
                <td className="has-text-weight-bold">{product.id}</td>
                <td>{product.name}</td>

                <td>
                  {product.category?.icon}
                  {' - '}
                  {product.category?.title}
                </td>

                <td className={classNames({
                  'has-text-link': product.user?.sex === 'm',
                  'has-text-danger': product.user?.sex === 'f',
                })}
                >
                  {product.user?.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);
