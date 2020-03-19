import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  ScrollView,
  FlatList,
  Text,
} from 'react-native';
import {connect} from 'react-redux';
import SearchBar from 'react-native-search-bar';

class VendaPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
    };
  }

  render() {
    const {produtos} = this.props;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.search}>
          <SearchBar placeholder="Pesquisa" />
        </View>
        <View style={styles.viewButton}>
          <Button title={'Adicionar'} />
        </View>

        <View style={styles.inputForm}>
          <FlatList
            data={[...produtos]}
            renderItem={({item}) => (
              <View>
                <Text>{`${item.pro_descricao}`}</Text>
              </View>
            )}
          />
        </View>
        <View style={styles.marginFooter} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#113063',
  },
  search: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
  },
  viewButton: {
    justifyContent: 'space-evenly',
    marginTop: 10,
    marginHorizontal: 25,
  },
  inputForm: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: 10,
    padding: 10,
    paddingBottom: '90%',
    borderRadius: 10,
    borderColor: '#FFF',
    borderWidth: 1,
    backgroundColor: '#113063',
  },

  marginFooter: {marginBottom: 10},
});

const mapStateToProps = state => {
  const {produtos} = state;
  return {produtos};
};

export default connect(mapStateToProps)(VendaPage);
