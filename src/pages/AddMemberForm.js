import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './AddMemberForm.css';

function AddMemberForm() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [classYear, setClassYear] = useState('');
    const [major, setMajor] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);
    const authHeader = useAuthHeader();
    const navigate = useNavigate();
    const headers = {
        'Authorization': authHeader(),
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !role || !classYear || !major || !email || !description)
        {
            alert("Please fill out all fields");
            return;
        }

        let uploadedImage = "";
        const baseUrl = "http://localhost:5001/api";


        if (selectedImage)
        {
            const formData = new FormData();
            formData.append('image', selectedImage);
            try
            {
                const response = await axios.post(`${baseUrl}/s3/upload`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': authHeader(),
                    }
                });
                uploadedImage = response.data.data;
            } catch (err)
            {
                if (err && err instanceof AxiosError)
                {
                    toast.error(err.response?.data.message);
                } else if (err && err instanceof Error)
                {
                    toast.error(err.message);
                }
            }
        }

        try
        {
            const response = await axios.post(`${baseUrl}/eboard`, {
                name: name,
                role: role,
                classYear: classYear,
                major: major,
                email: email,
                description: description,
                image: uploadedImage,
            }, { headers });
            const { data } = response;
            toast.success(data.message);
            navigate("/our-team");
        } catch (err)
        {
            if (err && err instanceof AxiosError)
            {
                toast.error(err.response?.data.message);
            } else if (err && err instanceof Error)
            {
                toast.error(err.message);
            }
        }
    }

    const fileSelectedHandler = (event) => {
        setSelectedImage(event.target.files[0]);
    }

    return (
        <form onSubmit={handleSubmit} className="add-member-form">
            <h2 className="add-member-form-heading">Add New Member</h2>
            <label className="add-member-label">
                Name
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="add-member-input" />
            </label>

            <label className="add-member-label">
                Role
                <input type="text" value={role} onChange={(e) => setRole(e.target.value)} className="add-member-input" />
            </label>

            <label className="add-member-label">
                Class
                <input type="text" value={classYear} onChange={(e) => setClassYear(e.target.value)} className="add-member-input" />
            </label>

            <label className="add-member-label">
                Major
                <input type="text" value={major} onChange={(e) => setMajor(e.target.value)} className="add-member-input" />
            </label>
                
            <label className="add-member-label">
                Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="add-member-input" />
            </label>
            <label className="add-member-label">
                Description
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className="add-member-textarea" />
            </label>
            <label className="add-member-label">
                Image
                <input type="file" className="add-member-input" onChange={fileSelectedHandler}/>
            </label>
            <button type="submit" className="add-member-button">Add Member</button>
        </form>
    );
}

export default AddMemberForm;