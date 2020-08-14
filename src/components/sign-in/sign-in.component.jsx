import React, { Component } from 'react'
import FormInput from '../../components/form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../../components/custom-button/custom-button.component'
import { SignInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends Component {
    constructor( props ){
        super ( props );

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState(
            {
                email : '',
                password : ''
            }
        )
    }

    handleChange = event => {
        const { value , name } = event.target;

        this.setState({
            [name] :value
        })
    }

    render(){
        return (
            <div className = 'sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit ={ this.handleSubmit }>
                    <FormInput 
                    name='email' 
                    type='email' 
                    value={this.state.email} 
                    handleChange = { this.handleChange }
                    label = 'Email' 
                    required />
                    
                    <FormInput 
                    name ='password' 
                    type ='password' 
                    value = {this.state.password} required
                    handleChange = { this.handleChange}
                    label ='Password'
                    />
                    <div className='buttons'>
                    <CustomButton type='submit' >SIGN IN</CustomButton>
                    <CustomButton onClick = {SignInWithGoogle} isGoogleSignIn >SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                    
                    
                </form>
            </div>
        )
    }
}

export default SignIn;