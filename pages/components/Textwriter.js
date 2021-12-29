import Typical from 'react-typical'

const Textwriter = () => {
    return (
        <p>
        <Typical
            steps={['Protect', 2500, 'Secure', 2500, 'Share', 2500]}
            loop="1"
            wrapper="p"
        />your password.
    </p>
    )
} 

export default Textwriter