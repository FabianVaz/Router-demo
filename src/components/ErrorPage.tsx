import { useNavigate } from 'react-router-dom';


function ErrorPage(){
    const navigate = useNavigate();
    return(
    <div>
        <h1>Sorry, this page doesn't exist!!</h1>
        <button onClick={() => navigate('/')}>You can go to the main page by clicking here!!</button>
    </div>
    );
};

export default ErrorPage;