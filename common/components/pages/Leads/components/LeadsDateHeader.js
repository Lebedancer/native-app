'use strict';

import React, {
    StyleSheet,
    View,
    Text,
    TouchableWithoutFeedback,
    TextInput,
    ListView,
    Component,
    DatePickerAndroid
} from 'react-native';

var styles = StyleSheet.create({
    container: {
        paddingBottom: 50
    }
});

export default class LeadsDateHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minDate: '21.01.2014',
            maxDate: '21.01.2014'
        };
    }

    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({ code, message }) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    render () {
        return (
            <View style={[styles.container]}>
                <Text>Лиды
                    <Text> c </Text>
                    <TouchableWithoutFeedback
                        onPress={this.showPicker.bind(this, 'min', {
                      date: this.state.minDate,
                      minDate: new Date(),
                    })}>
                        <Text>{this.state.minDate}</Text>
                    </TouchableWithoutFeedback>
                    <Text> по </Text>
                    <TouchableWithoutFeedback
                        onPress={this.showPicker.bind(this, 'max', {
                      date: this.state.maxDate,
                      minDate: new Date(),
                    })}>
                        <Text>{this.state.maxDate}</Text>
                    </TouchableWithoutFeedback>
                </Text>
            </View>
        );
    }

}