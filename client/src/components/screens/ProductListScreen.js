import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts, deleteProduct, createProduct } from '../../actions/productActions.js';
import { NavLink } from 'react-router-dom';
import { PRODUCT_CREATE_RESET } from '../../constants/productConstants.js';

const ProductListScreen = ({ match, history }) => {
    const dispatch = useDispatch();

    const productList = useSelector(state => state.productList);
    // eslint-disable-next-line no-unused-vars
    const { loading, error, products } = productList

    const productDelete = useSelector(state => state.productDelete);
    // eslint-disable-next-line no-unused-vars
    const { loading: loadingDelete, error: errorDelete, success: successDelete } = productDelete

    const productCreate = useSelector(state => state.productCreate);
    // eslint-disable-next-line no-unused-vars
    const { loading: loadingCreate, error: errorCreate, success: successCreate, product: createdProduct } = productCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin;

    const deleteHandler = (id) => {
        if (window.confirm('Emin misiniz?')) {
            dispatch(deleteProduct(id))
        }
    }

    const createProductHandler = () => {
        dispatch(createProduct())
    }

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })
        if (!userInfo.isAdmin) {
            history.push('/login')
        }
        if (successCreate) {
            history.push(`/admin/productlist/${createdProduct._id}/edit`)
        } else {
            dispatch(listProducts())
        }
    }, [dispatch, history, userInfo, successDelete, successCreate, createdProduct])


    return (
        <div>
            <h1>Ürünler</h1>
            <div>
                <button onClick={() => createProductHandler()}>
                    Ürün Ekle
                </button>
            </div>
            <div>

                <div>
                    <div>
                        <p>ID</p>
                        <p>Ürün İsmi</p>
                        <p>Fiyat</p>
                        <p>Marka</p>
                        <p>Kategori</p>
                        <p>Açıklama</p>
                    </div>
                    <div>
                        {products.map((product) => (
                            <li key={product._id}>
                                {/* table things here */}
                                <div>
                                    <p>{product._id}</p>
                                    <p>{product.name}</p>
                                    <p>{product.price}</p>
                                    <p>{product.brand}</p>
                                    <p>{product.category}</p>
                                    <p>{product.description}</p>
                                </div>

                                <div>
                                    <NavLink to={`/admin/product/${product._id}/edit`}>Düzenle</NavLink>
                                </div>
                                <div>
                                    <button onClick={() => { deleteHandler(product._id) }}>Sil</button>
                                </div>
                            </li>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListScreen
