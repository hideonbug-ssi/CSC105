import React, { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    password: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (isFormValid()) {
      alert(JSON.stringify(formData, null, 2));
    } else {
      alert("Form validation failed. Please check your input values.");
    }
  }

  function isFormValid() {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const nameRegex = /^[a-zA-Z]+$/;
    const phoneRegex = /^\d{10}$/;

    return (
      emailRegex.test(formData.email) &&
      nameRegex.test(formData.firstName) &&
      nameRegex.test(formData.lastName) &&
      phoneRegex.test(formData.phoneNumber) &&
      formData.password.length > 0
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email address</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter email"
        />
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="Enter Name"
        />
      </div>
      <div>
        <label>Lastname</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Enter Lastname"
        />
      </div>
      <div>
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          placeholder="Enter phone number"
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder="Password"
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default MyForm;
