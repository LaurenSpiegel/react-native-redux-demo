import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        // this will only set state on referenced properties.
        // leaves others as is.
        // this clears any existing errors and sets loading to true (for spinner)
        this.setState({error: '', loading: true });
        const { email, password } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => this.onLoginSuccess())
            .catch((err) => {
                console.log("failed sign in!!", err)
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => this.onLoginSuccess())
                    .catch((err) => {
                        this.onLoginFail(err);
                    })
            })
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            error: '',
            loading: false,
        });
    }

    onLoginFail(err) {
        console.log("failed sign up!!", err);
        this.setState({
            error: 'Authentication Failed!',
            loading: false,
        })
    }

    renderButton() {
        if (this.state.loading) {
            return (
                < Spinner size='small' />
            )
        }
        return (
            <Button onPressProp={this.onButtonPress.bind(this)}>
            Log in
            </Button>
        )
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        placeholder='whatevs@signmein.com'
                        label='Email'
                        value={this.state.email}
                        onChangeText={typing => this.setState({ email: typing })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        isSecure={true}
                        placeholder='password'
                        label='Password'
                        value={this.state.password}
                        onChangeText={typing => this.setState({ password: typing })}

                    />
                </CardSection>
                
                <Text style={styles.errTextStyle}>
                    {this.state.error}
                </Text>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </ Card>
        )
    }
}

const styles = {
    errTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
}

export default LoginForm;
