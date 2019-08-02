import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WebView } from 'react-native-webview';

export default class WebViewPage extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('starred').name,
    });

    state = {
        repository: '',
    };

    static propTypes = {
        navigation: PropTypes.shape({
            getParam: PropTypes.func,
        }).isRequired,
    };

    componentDidMount() {
        const { navigation } = this.props;
        const starred = navigation.getParam('starred');
        console.tron.log(starred);
        this.setState({
            repository: starred,
        });
    }

    render() {
        const { repository } = this.state;

        return (
            <WebView
                source={{ uri: repository.html_url }}
                style={{ flex: 1 }}
            />
        );
    }
}
