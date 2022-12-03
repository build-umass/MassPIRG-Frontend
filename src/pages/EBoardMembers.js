import CommonImage from "../components/CommonImage";
import Member from "../components/Member";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";

const members = [
    {
        name: "Ashley Agostinelli // Chapter Chair",
        classAndMajor: "Class of 2023 | Psychology and Linguistics Major",
        email: "amagostinell@umass.edu",
        description: "Ashley is the Chair of MASSPIRG Students. She is a Senior at the University of Massachusetts Amherst majoring in Psychology and Linguistics. She first started during Fall 2020 to help register students to vote in the 2020 election. Since then, she has gone from the Secretary to Chapter Chair at UMass Amherst. Outside of MASSPIRG, Ashley likes to knit, read and play board games with friends. After graduation, Ashley plans to attend law school and apply all that she has learned in her future career.",
        image: image1,
    },
    {
        name: "Caitlyn Egan // Chapter Vice Chair",
        classAndMajor: "Class of 2023 | Environmental Science and Public Policy Major",
        email: "cegan@umass.edu",
        description: "Caitlyn Egan is the current Vice Chair of MASSPIRG at UMass Amherst. She started volunteering with MASSPIRG when she was a freshman and has continued to take on leadership with the organization ever since. Her passion for the environment got her interested in the organization, and her experience with MASSPIRG has sparked an interest in pursuing Environmental Policy at the federal level. She is excited to have met so many amazing people through working with MASSPIRG, and will remember her experience forever!",
        image: image2,
    },
    {
        name: "Catherine Sales // Chapter Treasurer",
        classAndMajor: "Class of 2023 | Psychology Major",
        email: "csales@umass.edu",
        description: "Catherine Sales is the current Treasurer of MASSPIRG at UMass Amherst. She originally joined MASSPIRG in fall of 2020, quickly becoming a lead intern of the New Voters Project, helping mobilize students to vote in the presidential election. Civic engagement is something I have always been passionate about and being able to help students to vote and get their voices heard",
        image: image3,
    },
    {
        name: "Zeina Zahoori // Chapter Secretary",
        classAndMajor: "Class of 2025 | Computer Science and Mathematics Major",
        email: "zzahoori@umass.edu",
        description: "Zeina Zahoori is the current Secretary of MASSPIRG at UMass Amherst. She is a sophomore studying Computer Science and Mathematics, who initially joined MASSPIRG to get involved in the Affordable Textbooks Campaign. Her passion for giving back to the community stems from her involvement in Girl Scouts growing up. She enjoys hiking, shopping, and dancing.",
        image: image4,
    }
]
const EBoardMembers = () => {
    return <>
        <CommonImage />
        <div className="container">
            <h1 className="d-flex justify-content-center">Chapter Leadership</h1>
            {members.map(member => 
                <Member name={member.name} classAndMajor={member.classAndMajor} email={member.email} description={member.description} image={member.image} />
            )}
        </div>
    </>
}

export default EBoardMembers;