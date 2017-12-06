import React from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import styles from './Styles/FlatlistStyles';

const Flatlist = (props) => {
    return(
        <FlatList
            numColumns={props.numColumns}
            extraData={this.props}
            data={props.data}
            renderItem={props.renderItem()}
            textStyle={styles.textStyle}
        />
    );
};
Flatlist.propTypes = {
    numColumns: PropTypes.integer,
    data: PropTypes.array,
    textStyle: PropTypes.string,
    renderItem: PropTypes.func,
};

export default FlatList;
