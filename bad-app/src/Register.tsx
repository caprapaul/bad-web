import { useNavigate } from "react-router-dom";

async function registerUser(email: string, password: string) {
    return fetch('https://localhost:7180/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    });
}

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        // Prevent page reload
        event.preventDefault();
        const { email, password } = document.forms[0];
        console.log(email);

        const response = await registerUser(
            email.value,
            password.value
        );


        if (response.ok) {
            navigate('/login');
        }
    };

    return (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="email" name="email" required />
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required />
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>)
}

export default Register;