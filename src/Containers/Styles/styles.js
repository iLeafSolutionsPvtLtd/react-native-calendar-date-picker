import {StyleSheet,Dimensions} from 'react-native';
const { width } = Dimensions.get('window');
export default StyleSheet.create({
    container:{
        flex:1,
        padding:20
    },
    containComponents:{
        flexDirection:'row',
        borderColor:'#F0F3F5',
        borderWidth:1,
        width:width-40
    },
    button:{
        width:30,
        height:30,
        alignItems:'flex-end'
    },
    month:{
        textAlign:'center',
        width:width-100,
        fontSize:20,
        marginTop:5
    },
    components:{
        justifyContent:'center',
        alignItems:'center'
    },
    flatListweek:{
        height:40,
        width:45,
        borderColor:'white',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    flatListdays:{
        height:50,
        width:45,
        borderColor:'#F0F3F5',
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center'
    },
    weekDays:{
        fontSize:20,
        color:'black'
    },
    holidays:{
        fontSize:20,
        color:'red'
    },
    preDays:{
        fontSize:20,
        color:'grey'
    },
    workingDays:{
        fontSize:20,
        color:'black'
    },
});
