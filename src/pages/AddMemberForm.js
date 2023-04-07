import React, { useState } from 'react';
import './AddMemberForm.css';

function AddMemberForm() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [classYear, setClassYear] = useState('');
    const [major, setMajor] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do something with the form data, like send it to a server
        console.log({ name, major, email, description });
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