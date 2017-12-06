import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './Styles/FlatlistStyles';

const Button=(props)=>{
    return(
        <TouchableOpacity
            style={props.style}
            onPress={() => props.onPress()}>
            <Image style={[styles.image, props.imageStyles]} source={props.imageSource}/>
        </TouchableOpacity>
    );
};
Button.propTypes = {
    style: PropTypes.string,
    onPress: PropTypes.func,
    imageStyles: PropTypes.string,
    imageSource: PropTypes.string,
    text: PropTypes.string,
};
export default Button;
