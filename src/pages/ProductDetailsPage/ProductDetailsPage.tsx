import React, { useState, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Heading } from '../../components/Heading/Heading';
import { FavoriteBtn } from '../../components/Buttons/FavoriteBtn';
import { PRICE_TEXT_SIZES, SHOWCASE_HEADINGS, LOCATIONS } from '../../common/constants';
import { ProductPrice } from '../../components/ProductCard/ProductPrice';
import { AddProductBtn } from '../../components/Buttons/AddProductBtn';
import { getDetails, getProducts, loadDetails } from '../../redux';
import { ShowcaseBlock } from '../../components/ShowcaseBlock/ShowcaseBlock';
import { Breadcrumbs } from '../../components/Breadcrumbs/Breadcrumbs';
import { BackBtn } from '../../components/Buttons/BackBtn';
import { ProductGallery } from '../../components/ProductGallery/ProductGallery';
import { ProductTechSpecs } from './ProductTechSpecs';
import { ProductDescription } from './ProductDescription';
import { ProductShortSpecs } from './ProductShortSpecs';
import { useParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import { ErrorPage } from '../ErrorPage';

export const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { productType, productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const productDetails: ProductDetails = useSelector(getDetails);
  const products: Product[] = useSelector(getProducts);

  const currentProduct = useMemo(() => (
    products.find(
      p => (p.id === productId),
    )
  ), [products, productId]);

  useEffect(() => {
    if (products.length) {
      setProduct(currentProduct);
    }
  }, [dispatch, products, productId, currentProduct]);

  useEffect(() => {
    dispatch(loadDetails(productId));
  }, [productId, dispatch]);

  if (!LOCATIONS.hasOwnProperty(productType)) {
    return <ErrorPage />
  }

  if (!product) {
    return <Loader />
  }

  return (
    <div className="container">
      <article className="product">
        <section className="section product__section">
          <Breadcrumbs />
          <BackBtn />
          <Heading title={productDetails.name} />
          <div className="product__grid">
            <div className="product__column">
              <div className="product__gallery">
                <ProductGallery
                  images={productDetails.images}
                  title={productDetails.name}
                />
              </div>
            </div>
            <div className="product__column">
              <div className="product__flex-wrap">
                <ProductPrice
                  price={product.price}
                  discount={product.discount}
                  styleSize={PRICE_TEXT_SIZES.large}
                />
                <span className="product__id">
                  {`ID: ${product.id}`}
                </span>
              </div>
              <div className="product__flex-wrap product__buttons">
                <AddProductBtn
                  productId={product.id}
                  styleSize="button-to-cart--lg"
                  productPrice={product.price}
                />
                <FavoriteBtn
                  productId={product.id}
                  styleSize="button-favorite--lg"
                />
              </div>
              <ProductShortSpecs {...productDetails} />
            </div>
            <div className="product__column">
              <ProductDescription {...productDetails} />
            </div>
            <div className="product__column">
              <h3 className="product__heading">Tech specs</h3>
              <ProductTechSpecs {...productDetails} />
            </div>
          </div>
        </section>
        <section className="section">
          <ShowcaseBlock
            title={SHOWCASE_HEADINGS.alsoLike}
            selectedProduct={product}
          />
        </section>
      </article>
    </div>
  );
};
