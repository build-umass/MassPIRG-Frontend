import MainImage from '../assets/main_image.png';

const CommonImage = () => {
    return <div className='d-flex justify-content-center my-5'>
        <img src={MainImage} className="img-fluid" alt="Responsive image"></img>
    </div>
}

export default CommonImage;