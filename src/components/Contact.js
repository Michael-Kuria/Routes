
function Contact(){
    return (
        <div className="form-container">
            <form className="form">
                <label>First Name</label>
                <input type="text" />
                <label>Last Name</label>
                <input type="text" />
                <label>Email</label>
                <input type="email" />
                <button className="form-btn">Submit</button>
            </form>

        </div>
    )

}

export default Contact;