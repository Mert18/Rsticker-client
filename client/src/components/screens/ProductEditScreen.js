import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails, updateProduct } from '../../actions/productActions.js';
import { NavLink } from 'react-router-dom';
import { PRODUCT_UPDATE_RESET } from '../../constants/productConstants.js';
import axios from 'axios';

const ProductEditScreen = ({ match, history }) => {
    const productId = match.params.id

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState('');
    const [brand, setBrand] = useState('');
    const [category, setCategory] = useState('');
    const [countInStock, setCountInStock] = useState(0);
    const [description, setDescription] = useState('');
    /* const [uploading, setUploading] = useState(false); */

    const dispatch = useDispatch();

    const productDetails = useSelector((state) => state.productDetails)
    // eslint-disable-next-line no-unused-vars
    const { loading, error, product } = productDetails;

    const productUpdate = useSelector((state) => state.productUpdate)
    // eslint-disable-next-line no-unused-vars
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate;

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            history.push('/admin/productlist')
        } else {
            if (!product.name || product._id !== productId) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInSock)
                setDescription(product.description)
            }
        }

    }, [dispatch, history, productId, product, successUpdate])

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(updateProduct({
            _id: productId,
            name,
            price,
            image,
            brand,
            category,
            description,
            countInStock
        }))

    }

    /*     const uploadFileHandler = async (e) => {
            const file = e.target.files[0];
            const formData = new FormData();
            formData.append('image', file);
            setUploading(true);
            try {
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }
                const { data } = await axios.post('/api/upload', formData, config);
    
                setImage(data);
                setUploading(false);
            } catch (error) {
                console.error(error)
                setUploading(false)
            }
        } */

    return (
        <div className="producteditscreen">
            <div className="producteditscreen__back">
                <NavLink to='/admin/productlist'>Ürün Listesi</NavLink>
            </div>

            <div className="producteditscreen__title">
                <h2>Ürün Düzenle</h2>
            </div>

            <form onSubmit={submitHandler} className="producteditscreen__form">
                <div className="producteditscreen__form__element">
                    <label htmlFor="name">Ürün İsmi</label>
                    <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="producteditscreen__form__element">
                    <label htmlFor="price">Ürün Fiyatı</label>
                    <input id="price" type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>

                <div className="producteditscreen__form__element">
                    <label htmlFor="image">Resim</label>
                    <input id="image" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </div>
                <div className="producteditscreen__form__element">
                    <label htmlFor="brand">Marka</label>
                    <input id="brand" type="text" value={brand} onChange={(e) => setBrand(e.target.value)} />
                </div>

                <div className="producteditscreen__form__element">
                    <label htmlFor="countInStock">Stok</label>
                    <input id="countInStock" value={countInStock} type="number" onChange={(e) => setCountInStock(e.target.value)} />
                </div>

                <div className="producteditscreen__form__element">
                    <label htmlFor="category">Kategori</label>
                    <input id="category" type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
                </div>

                <div className="producteditscreen__form__element">
                    <label htmlFor="description">Açıklama</label>
                    <input id="description" value={description} type="text" onChange={(e) => setDescription(e.target.value)} />
                </div>
                {/* 
                        <div>
                            <label htmlFor="uploading">Ürün Resmi</label>
                            <input id="uploading" type="file" onChange={() => { uploadFileHandler() }} />
                        </div> */}

                <button type="submit" onClick={() => { submitHandler() }}>Onayla</button>
            </form>
        </div>

    )
}

export default ProductEditScreen
