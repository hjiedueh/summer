import React, {useState} from 'react'
import model from '../../img/model.webp'
// import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

let ItemExcerpt = ({ item }) => {
    console.log(item.img)
    return (
        <article className="recent col-4" key={item.id}>
            <Link to='/prod'>
                <Image src={model} className="recent-img" />
            </Link>
        </article>
    )
}

export const ProdList = () => {
    const [prod, setProd] = useState([
        {
            id: 1,
            title: 'Test',
            img: model
        },
        {
            id: 2,
            title: 'Test',
            img: model
        },
        {
            id: 3,
            title: 'Test',
            img: model
        },
        {
            id: 4,
            title: 'Test',
            img: model
        },
        {
            id: 5,
            title: 'Test',
            img: model
        },
        {
            id: 6,
            title: 'Test',
            img: model
        }
    ])

    return (
        <div className='most-recent'>
            <Row className='recent-header-wrapper'>
                <h3 className='recent-header'>Collection</h3>
            </Row>
            <Row className='recent-wrapper'>
                {prod.map(item => (
                    <ItemExcerpt item = {item} />
                ))}
            </Row>
        </div>
        
    )
}