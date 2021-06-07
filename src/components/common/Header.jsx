import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__logo">
                <Link to="/">
                    <img src="/images/icon.png" alt="spyfall" className="header__logo-img" />
                </Link>
            </div>
            <div className="header__menu">
                <ul className="header__ul">
                    <li className="header__li"><Link className="header__link" to="/">صفحه اصلی</Link></li>
                    <li className="header__li"><Link className="header__link" to="/">چگونه بازی کنیم؟</Link></li>
                    <li className="header__li"><Link className="header__link" to="/">ارسال نظر</Link></li>
                    <li className="header__li"><Link className="header__link" to="/">خروج</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Header