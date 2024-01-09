import React from 'react'
import "./footer.css"
import FacebookImg from '../../assets/fb.svg'
import InstagramImg from '../../assets/inst.svg'
import TwitterImg from '../../assets/tw.svg'
import InImg from '../../assets/in.svg'
const Footer = () => {
  return (
    <section className='footer'>
        <div className='container'>
            <div className="footer_content">
                    <div className="footer_first_column">
                        <div className="footer_fashion">
                            Scufify
                        </div>
                        <div className="footer_description">
                            Best music platform
                        </div>
                        
                        <div className="footer_icons">
                            <img src={FacebookImg} alt="Facebook"></img>
                            <img src={InstagramImg} alt="Intagram"></img>
                            <img src={TwitterImg} alt="Twitter"></img>
                            <img src={InImg} alt="In"></img>
                        </div>
                    </div>
                    <div className="footer_links">
                        <div className="footer_company">
                            Company
                            <div className="company_links">
                                <a href="#!">About</a>
                            <br />
                                <a href="#!">Contact us</a> 
                            <br />
                                <a href="#!">Support</a>
                            <br /> 
                                <a href="#!">Careers</a> 
                            </div>
                        </div>
                        
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Footer
