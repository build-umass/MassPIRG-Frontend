// import svgDir from "src/assets";
import classes from './Member.module.css';
import { useNavigate } from 'react-router-dom';

const Member = (props) => {
    const navigate = useNavigate();
    const editRedirect = (id) => {
        navigate(`/our-team/edit/${id}`);
    }

    const extractId = (url) => {
        const id = url.split("/").pop();
        return id;
    }

    return (
        <div className={`row ${classes.bgGray} my-4`}>
            <div className="col-4 my-2">
                <img src={props.image} className="img-thumbnail" alt="Responsive image"></img>
                {/* <img src={Image} className="img-fluid" alt="Responsive image"></img> */}
            </div>
            <div className="col-8 my-3">
                <h3 className={`${classes.textNameTitle}`}>{props.name} // {props.role}</h3>
                <p>Class of {props.classYear} | {props.major}</p>
                <p className={`${classes.textEmail}`}>{props.email}</p>
                <p>{props.description}</p>
                {props.isLoggedIn && <button className="btn btn-info mx-2" onClick={() => editRedirect(props.id)}>Edit</button>}
                {props.isLoggedIn && <button className="btn btn-danger" onClick={() => props.onDelete(props.id, extractId(props.image))}>Delete</button>}
            </div>
        </div>
    )
}

export default Member;