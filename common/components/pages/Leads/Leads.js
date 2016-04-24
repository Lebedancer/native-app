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

import LeadsDateHeader from './components/LeadsDateHeader'


var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    }
});

export default class Leads extends Component {
    constructor(props) {
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        super(props);
        this.state = {
            dataSource: ds.cloneWithRows([
                'row1',
                'row2'
            ])
        };
    }



    render () {
        return (
            <View style={[styles.container]}>
               <LeadsDateHeader></LeadsDateHeader>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                />
            </View>
        );
    }

}