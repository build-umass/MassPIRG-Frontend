import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from "react-router-dom";
import CommonImage from "../components/CommonImage";
import Member from "../components/Member";
import { useIsAuthenticated, useAuthHeader, useAuthUser } from 'react-auth-kit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';

// import DynamicMember from "../components/DynamicMember";
// import image1 from "../assets/image1.png";
// import image2 from "../assets/image2.png";
// import image3 from "../assets/image3.png";
// import image4 from "../assets/image4.png";

// const members = [
//     {
//         _id: 1,
//         name: "Ashley Agostinelli",
//         role: "Chapter Chair",
//         classYear: "Class of 2023",
//         major: "Psychology and Linguistics Major",
//         email: "amagostinell@umass.edu",
//         description: "Ashley is the Chair of MASSPIRG Students. She is a Senior at the University of Massachusetts Amherst majoring in Psychology and Linguistics. She first started during Fall 2020 to help register students to vote in the 2020 election. Since then, she has gone from the Secretary to Chapter Chair at UMass Amherst. Outside of MASSPIRG, Ashley likes to knit, read and play board games with friends. After graduation, Ashley plans to attend law school and apply all that she has learned in her future career.",
//         image: image1,
//     },
//     {
//         _id: 2,
//         name: "Caitlyn Egan",
//         role: "Chapter Vice Chair",
//         classYear: "Class of 2023",
//         major: "Environmental Science and Public Policy Major",
//         email: "cegan@umass.edu",
//         description: "Caitlyn Egan is the current Vice Chair of MASSPIRG at UMass Amherst. She started volunteering with MASSPIRG when she was a freshman and has continued to take on leadership with the organization ever since. Her passion for the environment got her interested in the organization, and her experience with MASSPIRG has sparked an interest in pursuing Environmental Policy at the federal level. She is excited to have met so many amazing people through working with MASSPIRG, and will remember her experience forever!",
//         image: image2,
//     },
//     {
//         _id: 3,
//         name: "Catherine Sales",
//         role: "Chapter Treasurer",
//         classYear: "Class of 2023",
//         major: "Psychology Major",
//         email: "csales@umass.edu",
//         description: "Catherine Sales is the current Treasurer of MASSPIRG at UMass Amherst. She originally joined MASSPIRG in fall of 2020, quickly becoming a lead intern of the New Voters Project, helping mobilize students to vote in the presidential election. Civic engagement is something I have always been passionate about and being able to help students to vote and get their voices heard",
//         image: image3,
//     },
//     {
//         _id: 4,
//         name: "Zeina Zahoori",
//         role: "Chapter Secretary",
//         classYear: "Class of 2025",
//         major: "Computer Science and Mathematics Major",
//         email: "zzahoori@umass.edu",
//         description: "Zeina Zahoori is the current Secretary of MASSPIRG at UMass Amherst. She is a sophomore studying Computer Science and Mathematics, who initially joined MASSPIRG to get involved in the Affordable Textbooks Campaign. Her passion for giving back to the community stems from her involvement in Girl Scouts growing up. She enjoys hiking, shopping, and dancing.",
//         image: image4,
//     }
// ]

const EBoardMembers = () => {
    const [members, setMembers] = useState([]);
    const navigate = useNavigate();
    // const [isLoggedIn, setIsLoggedIn] = useState(true);
    const isAuthenticated = useIsAuthenticated()
    // const auth = useAuthUser();
    const authHeader = useAuthHeader();
    const isLoggedIn = isAuthenticated();
    const headers = {
        "Authorization": authHeader(),
    };
    const handleAddMember = () => {
        // console.log("AddMember");
        navigate("/our-team/new");
    }

    const fetchData = () => {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        axios.get(`${baseUrl}/eboard`).then(res => {
            const { data } = res;
            // localStorage.setItem('token', data.token);
            console.log(data);
            setMembers(data.data);
        }).catch(err => {
            if (err && err instanceof AxiosError)
            {
                console.log(err.response?.data.message);
            } else if (err && err instanceof Error)
            {
                console.log(err.message);
            }
        })
    }

    const deleteMember = (memberId) => {
        const baseUrl = process.env.REACT_APP_BASE_URL;
        axios.delete(`${baseUrl}/eboard/${memberId}`, { headers }).then(res => {
            const { data } = res;
            console.log(data);
            toast.success(data.message);
        }).catch(err => {
            if (err && err instanceof AxiosError)
            {
                toast.error(err.response?.data.message);
            } else if (err && err instanceof Error)
            {
                toast.error(err.message);
            }
        })
        setMembers(prevMembers => prevMembers.filter(member => member._id !== memberId));
    }

    useEffect(() => { 
        fetchData();
    }, [])

    return <>
        <CommonImage />
        <div className="container mb-3">
            <h1 className="d-flex justify-content-center">Chapter Leadership</h1>
            {members.map(member =>
                <Member key={member._id} id={member._id} name={member.name} role={member.role}  classYear={member.classYear} major={member.major} email={member.email} description={member.description} image={member.image} isLoggedIn={isLoggedIn} onDelete={deleteMember} />
            )}
            {isLoggedIn && (
                <div className="d-flex justify-content-center">
                    <button className="btn btn-success" onClick={handleAddMember}>
                        Add member
                    </button>
                </div>
            )}
        </div>
    </>
}

// const EBoardMembers = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);
//     return (
//         <>
//             <CommonImage />
//             <div className="container">
//                 <h1 className="d-flex justify-content-center">Chapter Leadership</h1>
//                 {members.map(member => (
//                     isLoggedIn ? (
//                         <Fragment key={member.id}>
//                             <DynamicMember
//                                 name={member.name}
//                                 classAndMajor={member.classAndMajor}
//                                 email={member.email}
//                                 description={member.description}
//                                 image={member.image}
//                             />
//                         </Fragment>
//                     ) : (
//                         <Fragment key={member.id}>
//                             <Member
//                                 name={member.name}
//                                 classAndMajor={member.classAndMajor}
//                                 email={member.email}
//                                 description={member.description}
//                                 image={member.image}
//                             />
//                         </Fragment>
//                     ))
//                 )}
//             </div>
//         </>
//     );
// }


export default EBoardMembers;