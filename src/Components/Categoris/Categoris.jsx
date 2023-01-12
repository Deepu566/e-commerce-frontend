import React from 'react'
import './Categories.scss'
import { Link } from 'react-router-dom'

const Categoris = () => {
    return (
        <div className='categories'>
            <div className="col">
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1588720657799-3e03ddf213e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                    <Link className="link" to='/products/1'>
                        <button>Sales</button>
                    </Link>
                </div>
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1593884935172-11a2670acfd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                    <Link className="link" to='/products/1'>
                        <button>Women</button>
                    </Link>
                </div>
            </div>
            <div className="col">
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1591287842467-2dea2992e1a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                    <Link className="link" to='/products/1'>
                        <button>new Season</button>
                    </Link>
                </div>
            </div>
            <div className="col col-l">
                <div className="row">
                    <div className="col">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1580713898273-15acaf8c3143?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                            <Link className="link" to='/products/1'>
                                <button>New fasion</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col">
                        <div className="row">
                            <img src="https://images.unsplash.com/photo-1591304990819-138eb98a3a6b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=412&q=80" alt="" />
                            <Link className="link" to='/products/1'>
                                <button>Accesories</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <img src="https://images.unsplash.com/photo-1609042758996-7f1e20ec4e24?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=891&q=80" alt="" />
                    <Link className="link" to='/products/1'>
                        <button>Couple fashion</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Categoris
