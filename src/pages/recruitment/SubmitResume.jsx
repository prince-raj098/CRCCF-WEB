import React, { useState } from 'react'

const countries = [
  "India","United States","United Kingdom","Canada","Australia",
  "Germany","France","Japan","China","Brazil","South Africa",
  "Russia","Italy","Spain","Netherlands","Singapore","UAE",
  "Saudi Arabia","Nepal","Bangladesh","Sri Lanka","Other"
]

const SubmitResume = () => {

  const [formData, setFormData] = useState({

    // Full Name
    fullFirstName: '',
    fullMiddleName: '',
    fullLastName: '',

    // Father Name
    fatherFirstName: '',
    fatherMiddleName: '',
    fatherLastName: '',

    // Mother Name
    motherFirstName: '',
    motherMiddleName: '',
    motherLastName: '',

    dob: '',
    gender: '',

    community: '',
    religion: '',
    nationality: '',
    education: '',
    mobile: '',
    email: '',
    address: '',
    occupation: '',
    bloodGroup: '',
    whatsapp: '',
    instagram: '',
    telegram: '',
    cv: null
  })

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, files } = e.target

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    })
  }

  // Manual DOB Input
  const handleDOBChange = (e) => {
    let value = e.target.value.replace(/\D/g, '')

    if (value.length > 2 && value.length <= 4) {
      value = value.slice(0, 2) + '-' + value.slice(2)
    }
    else if (value.length > 4) {
      value =
        value.slice(0, 2) +
        '-' +
        value.slice(2, 4) +
        '-' +
        value.slice(4, 8)
    }

    setFormData({
      ...formData,
      dob: value
    })
  }

  // Calendar DOB
  const handleCalendarChange = (e) => {
    const selectedDate = e.target.value

    if (!selectedDate) return

    const [year, month, day] = selectedDate.split('-')

    setFormData({
      ...formData,
      dob: `${day}-${month}-${year}`
    })
  }

  // Submit Form
  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(formData)

    alert("Form Submitted Successfully ✅")

    // Reset Form
    setFormData({

      fullFirstName: '',
      fullMiddleName: '',
      fullLastName: '',

      fatherFirstName: '',
      fatherMiddleName: '',
      fatherLastName: '',

      motherFirstName: '',
      motherMiddleName: '',
      motherLastName: '',

      dob: '',
      gender: '',
      community: '',
      religion: '',
      nationality: '',
      education: '',
      mobile: '',
      email: '',
      address: '',
      occupation: '',
      bloodGroup: '',
      whatsapp: '',
      instagram: '',
      telegram: '',
      cv: null
    })
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex justify-center py-10 px-4">

      <div className="w-full max-w-5xl">

        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-3xl p-8 md:p-10 border border-blue-100"
        >

          {/* HEADER */}
          <div className="relative mb-10 overflow-hidden rounded-3xl">

            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 to-indigo-400/30 blur-3xl"></div>

            <div className="relative bg-gradient-to-r from-[#2563EB] to-[#1D4ED8] rounded-3xl p-8 text-center shadow-xl">

              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center text-white text-4xl shadow-lg border border-white/20 animate-pulse">
                📄
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-wide">
                Submit Your Resume
              </h2>

              <p className="text-blue-100 mt-4 text-sm md:text-base max-w-3xl mx-auto leading-7">
                Join CR Cyber Crime Foundation and become a part of our mission
                towards cybersecurity awareness, digital safety, research,
                innovation, and technology-driven social impact.
              </p>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-cyan-300/20 rounded-full blur-3xl"></div>

            </div>
          </div>

          {/* FORM */}
          <div className="space-y-8">

            {/* FULL NAME */}
            <div>
              <label className="text-[#0F172A] font-semibold mb-3 block">
                Full Name *
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <input
                  type="text"
                  name="fullFirstName"
                  value={formData.fullFirstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  maxLength={30}
                  className="input"
                />

                <input
                  type="text"
                  name="fullMiddleName"
                  value={formData.fullMiddleName}
                  onChange={handleChange}
                  placeholder="Middle Name"
                  maxLength={30}
                  className="input"
                />

                <input
                  type="text"
                  name="fullLastName"
                  value={formData.fullLastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  maxLength={30}
                  className="input"
                />

              </div>
            </div>

            {/* FATHER NAME */}
            <div>
              <label className="text-[#0F172A] font-semibold mb-3 block">
                Father's Name *
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <input
                  type="text"
                  name="fatherFirstName"
                  value={formData.fatherFirstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  maxLength={30}
                  className="input"
                />

                <input
                  type="text"
                  name="fatherMiddleName"
                  value={formData.fatherMiddleName}
                  onChange={handleChange}
                  placeholder="Middle Name"
                  maxLength={30}
                  className="input"
                />

                <input
                  type="text"
                  name="fatherLastName"
                  value={formData.fatherLastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  maxLength={30}
                  className="input"
                />

              </div>
            </div>

            {/* MOTHER NAME */}
            <div>
              <label className="text-[#0F172A] font-semibold mb-3 block">
                Mother's Name *
              </label>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                <input
                  type="text"
                  name="motherFirstName"
                  value={formData.motherFirstName}
                  onChange={handleChange}
                  placeholder="First Name *"
                  required
                  maxLength={30}
                  className="input"
                />

                <input
                  type="text"
                  name="motherMiddleName"
                  value={formData.motherMiddleName}
                  onChange={handleChange}
                  placeholder="Middle Name"
                  maxLength={30}
                  className="input"
                />

                <input
                  type="text"
                  name="motherLastName"
                  value={formData.motherLastName}
                  onChange={handleChange}
                  placeholder="Last Name *"
                  required
                  maxLength={30}
                  className="input"
                />

              </div>
            </div>

            {/* OTHER FIELDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* DOB */}
              <div>
                <label className="text-[#0F172A] font-semibold mb-3 block">
                  DOB *
                </label>

                <div className="relative">

                  <input
                    type="text"
                    placeholder="DD-MM-YYYY"
                    maxLength={10}
                    value={formData.dob}
                    onChange={handleDOBChange}
                    className="input pr-14"
                    required
                  />

                  <input
                    type="date"
                    onChange={handleCalendarChange}
                    className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 w-6 h-6 cursor-pointer"
                  />

                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                    📅
                  </div>

                </div>
              </div>

              {/* Gender */}
              <div>
    <label className="text-[#0F172A] font-semibold mb-3 block opacity-0">
      Gender
    </label>

    <select
      name="gender"
      value={formData.gender}
      onChange={handleChange}
      required
      className="input"
    >
      <option value="">Gender *</option>
      <option>Male</option>
      <option>Female</option>
      <option>Other</option>
    </select>
  </div>

              {/* Community */}
              <select
                name="community"
                value={formData.community}
                onChange={handleChange}
                required
                className="input py-0"
              >
                <option value="">Community *</option>
                <option>General</option>
                <option>SC</option>
                <option>ST</option>
                <option>OBC</option>
                <option>EWS</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>

              {/* Religion */}
              <select
                name="religion"
                value={formData.religion}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="">Religion *</option>
                <option>Hinduism</option>
                <option>Islam</option>
                <option>Christianity</option>
                <option>Sikhism</option>
                <option>Buddhism</option>
                <option>Jainism</option>
                <option>Other</option>
                <option>Prefer not to say</option>
              </select>

              {/* Nationality */}
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
                className="input"
              >
                <option value="">Nationality *</option>

                {countries.map((country, index) => (
                  <option key={index}>
                    {country}
                  </option>
                ))}
              </select>

              {/* Education */}
              <input
                type="text"
                name="education"
                value={formData.education}
                onChange={handleChange}
                placeholder="Education *"
                required
                className="input"
              />

              {/* Mobile */}
             <input
  type="tel"
  name="mobile"
  value={formData.mobile}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 10) {
      setFormData({
        ...formData,
        mobile: value
      })
    }
  }}
  placeholder="Mobile Number *"
  required
  minLength={10}
  maxLength={10}
  pattern="[0-9]{10}"
  className="input"
/>

              {/* Email */}
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email ID *"
                required
                className="input"
              />

              {/* Address */}
              <textarea
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Permanent Address *"
                required
                className="input col-span-2"
              />

              {/* Upload CV */}
              <div className="col-span-2">
                <label className="text-[#0F172A] font-semibold mb-3 block">
                  Upload CV *
                </label>

                <input
                  type="file"
                  name="cv"
                  onChange={handleChange}
                  required
                  className="input"
                />
              </div>

              {/* Occupation */}
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Occupation "
                className="input"
              />

              {/* Blood Group */}
              <select
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="input"
              >
                <option value="">Blood Group (Optional)</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="Unknown">Unknown</option>
              </select>

              {/* WhatsApp */}
             <input
  type="tel"
  name="whatsapp"
  value={formData.whatsapp}
  onChange={(e) => {
    const value = e.target.value.replace(/\D/g, '')
    if (value.length <= 10) {
      setFormData({
        ...formData,
        whatsapp: value
      })
    }
  }}
  placeholder="WhatsApp Number (Optional)"
  minLength={10}
  maxLength={10}
  pattern="[0-9]{10}"
  className="input"
/>

              {/* Instagram */}
              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                placeholder="Instagram ID "
                className="input"
              />

              {/* Telegram */}
              <input
                type="text"
                name="telegram"
                value={formData.telegram}
                onChange={handleChange}
                placeholder="Telegram ID "
                className="input"
              />

            </div>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="mt-8 w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold py-4 rounded-2xl transition duration-300 shadow-lg hover:shadow-blue-300 hover:scale-[1.01]"
          >
            Submit Resume
          </button>

        </form>
      </div>
    </div>
  )
}

export default SubmitResume
