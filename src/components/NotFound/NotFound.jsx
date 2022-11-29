import './NotFound.css';
import { useNavigate } from 'react-router-dom';

export default function NotFound() {
    const navigate = useNavigate()
    return (
        <div className='background-image-404'>
            <div className='background-card-404'>
                <div className='card-404'>
                    <h1 className='card-title-404'>Oops... We found a 404 error.</h1>
                    <p className='card-text-404'>The page you are looking for does not exist.</p>
                    <a className='btn btn-primary-404' onClick={e => navigate('/')}>Go back to the homepage</a>
            </div>
        </div>
        </div >
    )
}