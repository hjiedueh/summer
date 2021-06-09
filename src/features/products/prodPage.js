import React from 'react'
import model from '../../img/model.webp'
// import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'

const Product = () => {
    return (
        <div className="product-image-wrapper">
            <Image src={model} alt='poduct image' className="product-image" />
        </div>
    )
}

const ProdThumbs = () => {
    return (
        <ul className='prod-thumbs'>
            <li className="prod-thumb">
                <Image src={model} className="thumb-img" />
            </li>
            <li className="prod-thumb">
                <Image src={model} className="thumb-img" />
            </li>
            <li className="prod-thumb">
                <Image src={model} className="thumb-img" />
            </li>
            <li className="prod-thumb">
                <Image src={model} className="thumb-img" />
            </li>
        </ul>
    )
}

const ProdDetails = () => {
    return (
        <div className='prod-info text-center'>
            <div className='info-col'>
                <div className='title-wrapper'>
                    <p className='prod-title'>
                        AMBUSH SSENSE Exclusive Black XL Logo T-Shirt
                    </p>
                </div>
                <div className='price-wrapper'>
                    <p className='prod-price'>
                        $132
                    </p>
                </div>
                <div className="size-wrapper">
                    <select className="size-select" aria-label="SELECT A SIZE">
                        <option selected>SIZE</option>
                        <option value="s">S</option>
                        <option value="m">M</option>
                        <option value="l">L</option>
                        <option value="xl">XL</option>
                        <option value="xxl">XXL</option>
                    </select>
                </div>
                <div className="bag-wrapper">
                    <div className="d-grid gap-2 add-to">
                        <button className="btn btn-dark add-to-btn" type="button">ADD TO BAG</button>
                    </div>
                </div>
            </div>
            <div className="info-col mt-2">
                <div className="size-guide-wrapper">
                    <Link to="#">SIZE GUIDE</Link>
                </div>
                <div className="item-info-wrapper">
                    <Link to="#">ITEM INFO</Link>
                </div>
                <div className="shipping-info-wrapper">
                    <p className="us-shipping">United States: Free shipping and returns on all orders.</p>
                </div>
            </div>
            <div className="other-prod-wrapepr">
                <div className="other-prod">
                    <Image className="other-prid-img" src={model} />
                </div>
            </div>
        </div>
    )
}

export const ProdPage = () => {
    return (
        <Container fluid>
            <div className='prod'>
                <Product />
                <ProdThumbs />
            </div>
            <ProdDetails />
        </Container>
    )
}