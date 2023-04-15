import axios, { AxiosError } from 'axios';
import React, { useState } from 'react';
import { useAuthHeader } from 'react-auth-kit';
import axios, { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';

import './AddMemberForm.css';

function AddMemberForm() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [classYear, setClassYear] = useState('');
    const [major, setMajor] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const authHeader = useAuthHeader();
    const navigate = useNavigate();
    const headers = {
        'Authorization': authHeader(),
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const baseUrl = "http://localhost:5001/api";
        // const baseUrl = process.env.REACT_APP_ROOT_API;
        axios.post(`${baseUrl}/eboard`, {
            name: name,
            role: role,
            // and other fields
        }, { headers }).then(res => {
            const { data } = res;
            // localStorage.setItem('token', data.token);
            navigate('/');
            console.log(data.message);
        }).catch(err => {
            if (err && err instanceof AxiosError)
            {
                console.log(err.response?.data.message);
            } else if (err && err instanceof Error)
            {
                console.log(err.message);
            }
        });

    };

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
            <button type="submit" className="add-member-button">Add Member</button>
        </form>
    );
}

export default AddMemberForm;