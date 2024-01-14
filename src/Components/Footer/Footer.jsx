import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className='footer'>
        <div className="footer-content">
            <p> Scufify </p>
        </div>
        <div className="footer-content">
            <h4>Compamy</h4>
            <li><a href='#'> About us</a></li>
            <li><a href='#'> Safety</a></li>
            <li><a href='#'> Support</a></li>
            <li><a href='#'> Cooperation</a></li>
        </div>
        <div className="footer-content">
            <h4>Movement</h4>
            <li><a href='#'> Movement</a></li>
            <li><a href='#'> Subscribes</a></li>
            <li><a href='#'> Pricing</a></li>
            <li><a href='#'> Add order</a></li>
        </div>
        <div className="footer-content">
            <h4>Help</h4>
            <li><a href='#'> Privacy</a></li>
            <li><a href='#'> Condition</a></li>
            <li><a href='#'> Blog</a></li>
            <li><a href='#'> FAQs</a></li>
        </div>
    </section>
  )
}

export default Footer
