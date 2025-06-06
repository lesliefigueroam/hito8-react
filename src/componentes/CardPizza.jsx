import React from 'react'
import { formatearPrecio } from '../utils/helpers';

function CardPizza(props) {
    return (
        <div className='container'>
            <div className="card" style={{width: '18rem;'}}>
                <img src={props.imagen} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><h6>Ingredientes:</h6>
                    <p>🍕 {props.ingredients.join(', ')}</p></li>
                </ul>
                <div className="card-body">
                    <div className="row ">
                    <h4>Precio</h4>
                    <p>${formatearPrecio(props.price)}</p>
                    
                    <div className='col d-flex justify-content-center align-items-center '><button type="button" className="btn btn-light px-4">Ver mas </button></div>
                    <div className='col d-flex justify-content-center align-items-center'><button type="button" className="btn btn-success px-4">Añadir</button></div>
                    
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CardPizza
