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
        <div className="productlistscreen">
            <div className="productlistscreen__title">
                <h1>Ürünler</h1>
            </div>
            <div className="productlistscreen__add">
                <button onClick={() => createProductHandler()}>
                    Ürün Ekle
                </button>
            </div>

            <div className="productlistscreen__table">
                <table border="1" width="80%">
                    <tr>
                        <th>ID</th>
                        <th>Ürün İsmi</th>
                        <th>Fiyat</th>
                        <th>Marka</th>
                        <th>Kategori</th>
                        <th>Açıklama</th>
                    </tr>
                    {products.map((product) => (
                        <tr key={product._id}>
                            {/* table things here */}
                            <td>{product._id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                            <td>{product.brand}</td>
                            <td>{product.category}</td>
                            <td>{product.description}</td>

                            <td>
                                <NavLink to={`/admin/product/${product._id}/edit`}>Düzenle</NavLink>
                            </td>
                            <td>
                                <button onClick={() => { deleteHandler(product._id) }}>Sil</button>
                            </td>
                        </tr>
                    ))}
                </table>
            </div>

        </div>
    )
}

export default ProductListScreen
