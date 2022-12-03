// import svgDir from "src/assets";
import classes from './Member.module.css';
const Member = (props) => {
    return (
        <div className={`row ${classes.bgGray} my-4`}>
            <div className="col-4">
                <img src={props.image} className="img-fluid" alt="Responsive image"></img>
                {/* <img src={Image} className="img-fluid" alt="Responsive image"></img> */}
            </div>
            <div className="col-8">
                <h3>{props.name}</h3>
                <p>{props.classAndMajor}</p>
                <p>{props.email}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Member;