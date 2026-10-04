function App() {


    function handleNameChange(event) {
        console.log("Name:", event.target.value);
    }


    function handleEmailChange(event) {
        console.log("Email:", event.target.value);
    }


    function handleSubmit(event) {


        event.preventDefault();


        alert("Registration successful!");


    }


    return (
        <div>


            <h1>Student Registration</h1>


            <form onSubmit={handleSubmit}>


                <label>Name:</label>


                <input
                    type="text"
                    onChange={handleNameChange}
                />


                <br /><br />
<label>Email:</label>


                <input
                    type="email"
                    onChange={handleEmailChange}
                />


                <br /><br />


                <button type="submit">
                    Register
                </button>


            </form>


        </div>
    );
}

export default App;
