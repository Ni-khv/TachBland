import './header_page.css'
import logo from './Logo/Logo.png'
import Button from '../../Button/button'

const HeaderPage = () => {

    return(
        <div className="header_block">
                <img className='header_page_logo' src={logo} alt="logo" />
                <Button/>
                
            </div>
    )
}

export default HeaderPage;