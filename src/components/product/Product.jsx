import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import Showproducts from './Showproducts';
import Loading from './Loading';


const Product = ({ onAddCart, onRemoveCart }) => {
    const [data, setData] = useState([]);
    const [Filter, setFilter] = useState(data);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getproduct = async () => {
            setLoading(true);
            const res = await fetch("https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products");
            if (componentMounted) {
                setData(await res.clone().json());
                setFilter(await res.json());
                setLoading(false);
            }
            return () => {
                componentMounted = false;
            }
        }
        getproduct();
    }, []);

    const addProduct = (product) => {
        onAddCart(product);
    };
    const removeProduct = (product) => {
        onRemoveCart(product);
    };

    return (
        <>
            <div className='container my-5 py-5'>
                {/* <div className="row">
                    <div className="col-12 mg-5">
                        <h1 className='display-6 fw-bolder text-center'>Latest Products</h1>
                        <hr />
                    </div>
                </div> */}
                <div className='row justify-content-center' style={{ marginTop: '-80px' }}>
                    {
                        loading ? (<Loading />) : (<Showproducts data={Filter} onAddCart={addProduct} onRemoveCart={removeProduct} />)
                    }

                    {/* {<Showproducts />}
                    {<Loading />} */}
                </div>
            </div>
        </>
    )
}
export default Product;
