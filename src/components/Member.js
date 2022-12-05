// import svgDir from "src/assets";
import classes from './Member.module.css';
const Member = (props) => {
    return (
        <div className={`row ${classes.bgGray} my-4`}>
            <div className="col-4 my-2">
                <img src={props.image} className="img-thumbnail" alt="Responsive image"></img>
                {/* <img src={Image} className="img-fluid" alt="Responsive image"></img> */}
            </div>
            <div className="col-8 my-3">
                <h3 className={`${classes.textNameTitle}`}>{props.name}</h3>
                <p>{props.classAndMajor}</p>
                <p className={`${classes.textEmail}`}>{props.email}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Member;