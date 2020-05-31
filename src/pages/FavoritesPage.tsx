import React, { useMemo } from 'react';
import cn from 'classnames';
import { useProductsList } from '../components/_hooks/useProductsList';
import { Heading } from '../components/Heading/Heading';
import { ProductsAmount } from '../components/ProductsAmount/ProductsAmount';
import { Breadcrumbs } from '../components/Breadcrumbs/Breadcrumbs';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { PRODUCT_PATHS, SECTION_HEADINGS, SHOWCASE_HEADINGS } from '../common/constants';
import { useSearch } from '../components/_hooks/useSearch';
import { ShowcaseBlock } from '../components/ShowcaseBlock/ShowcaseBlock';

export const FavoritesPage = () => {
  const {
    search,
    location,
  } = useProductsList();

  const { searchedProducts } = useSearch();
  const areFavoritesExist = useMemo(() => searchedProducts.length > 0, [searchedProducts]);

  return (
    <div className="container">
      <section className={cn({
        section: true,
        pt24: location.pathname !== '/',
      })}
      >
        {areFavoritesExist
          ? (
            <>
              {!search.get('query') && (
                <>
                  <Breadcrumbs />
                  <Heading title={SECTION_HEADINGS.favorites} />
                </>
              )}
              {areFavoritesExist && (
                <ProductsAmount title={PRODUCT_PATHS.favorites} />
              )}
              <div className="products section__products">
                {searchedProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            </>
          )
          : (
            <>
              <p className="section__no-favorites-info">
                Favorites list is empty.
                <br />
                Please, take a look at our new models.
              </p>
              <ShowcaseBlock title={SHOWCASE_HEADINGS.newModels} />
            </>
          )}
      </section>
    </div>
  );
};
