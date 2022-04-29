import React from 'react';
import { StyleSheet, View, Button, TextInput, Text, Alert } from 'react-native';


export default class Home extends React.Component {



    static navigationOptions = {
        title: 'Hem',
    };

    constructor() {

        super();
        this.state = {
            namn: '',
            email: '',
            message: '',

        }
    }


    submit = () => {
        console.log(this.state)
        const { namn, email, message } = this.state
        if (namn == "") {
            alert("Sälla fyll i ditt namn")
            return false
        } else if (email == "") {
            alert("Sälla fyll i ditt email")
            return false
        }
        else if (message == "") {
            alert("Ditt komentar fällt är tomt")
            return false
        }
        return true


    }

    infohandler = () => {
        if (this.submit()) {
            alert("Namn:" + this.state.namn + "  " + "Email:" + this.state.email + "  " + "Message:" + this.state.message)
            this.setState({
                namn: '',
                email:'',
                message:''
           
            })
        }
    }

    render() {

        const { navigate } = this.props.navigation;


        return (

            <View style={styles.container}>


                <Text style= {{fontSize:24}}>Formulär</Text>

                <Text style= {{fontSize:18}}>Namn</Text>
                <TextInput
                    style={{
                        width: "80%", margin: 20,
                        textAlign: 'center',
                        height: 42,
                        borderWidth: 1,
                        borderColor: '#009688',
                        borderRadius: 8,
                        backgroundColor: "#FFFF"
                    }}

                    value={this.state.namn}
                    underlineColorAndroid='transparent'
                    placeholder="Namn"
                    onChangeText={(text) => { this.setState({ namn: text }) }}
                />


                <Text style= {{fontSize:18}}>Email</Text>
                <TextInput
                    style={{
                        width: "80%", margin: 20,
                        textAlign: 'center',
                        height: 42,
                        borderWidth: 1,
                        borderColor: '#009688',
                        borderRadius: 8,
                        backgroundColor: "#FFFF"
                    }}
                    value={this.state.email}
                    onChangeText={(text) => { this.setState({ email: text }) }}
                    underlineColorAndroid='transparent'
                    placeholder="Email" />


                <Text style= {{fontSize:18}}>Kommentar</Text>
                <TextInput
                    style={{
                        width: "80%", margin: 20,
                        textAlign: 'center',
                        height: 42,
                        borderWidth: 1,
                        borderColor: '#009688',
                        borderRadius: 8,
                        backgroundColor: "#FFFF",
                        height: 80,
                    }}
                    value={this.state.message}
                    onChangeText={(text) => { this.setState({ message: text }) }}
                    underlineColorAndroid='transparent'
                    placeholder="Komentar" />

                <Button
                    title="Skicka" onPress={() => { this.infohandler() }}

                />
                
                <Text style= {{fontSize:16}}>Skulle du vilja gå tll API:N</Text>

                <Button
                    title="-       API        -"
                    onPress={() => navigate(
                        'API', { name: 'API' }
                    )}
                />

            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',


    },
    textInput: {
        margin: 20,
        textAlign: 'center',
        height: 42,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 8,
        backgroundColor: "#FFFF"
    },
  

});