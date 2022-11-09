import { useNavigate } from "react-router-dom";

async function loginUser(email: string, password: string) {
    return fetch('https://localhost:7180/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
    })
        .then(data => data.text())
}

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = async (event: { preventDefault: () => void; }) => {
        // Prevent page reload
        event.preventDefault();
        const { email, password } = document.forms[0];
        const response = await loginUser(
            email.value,
            password.value
        );

        localStorage.setItem('access-token', response);
        navigate(-1);
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

export default Login;