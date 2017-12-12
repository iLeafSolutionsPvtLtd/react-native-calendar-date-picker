import React, { Component } from 'react';
import {Text,View,TouchableOpacity} from 'react-native';
import moment from 'moment';
import FlatList from '../Components/FlatList';
import Button from '../Components/Button';
import PropTypes from 'prop-types';
import styles from './Styles/styles';
let date;
let count;
let previousMonth;
let nextMonth;
let increment = 0;
let dataObj=[];
let dateArray=[];
let holidayIndex;
let firstDay;
let lastDate;
export default class CustomCalender extends Component{
    constructor(){
        super();
        this.state={
            month:moment().format('MMMM'),
            year:moment().format('YYYY')
        };
        this.calenderDays=this.calenderDays.bind(this);
    }

    componentWillMount(){
        this.calenderDays();

    }

    calenderDays(days){
        date=new Date(moment(days));
        let fullYear = date.getFullYear();
        let fullMonth = date.getMonth();
        firstDay = new Date(fullYear, fullMonth, 1);
        let lastDay = new Date(fullYear, fullMonth + 1, 0);
        let noOfDays = new Date(lastDay).getDate();
        dateArray = dataObj.slice(0,noOfDays);
        let start = moment(firstDay).format();
        let end = moment(lastDay).format();
        let currentDate =  moment(end).format('YYYY-MM-DD');
        let currentdate = moment(start).format('YYYY-MM-DD');
        let previousMonthDays = moment(new Date(firstDay-1)).format('YYYY-MM-DD');

        for(let i=0;i<noOfDays;i++){
            dateArray.push(currentdate);
            if(new Date(dateArray[i]).getMonth()===2){
                currentdate=moment(currentDate).add(31, 'day').format('YYYY-MM-DD');
            }
            currentdate=moment(currentdate).add(1,'day').format('YYYY-MM-DD');
        }
        count = firstDay.getDay();

        while(count >0){
            dateArray.unshift(-1);
            count --;
            for(let i=0;i<dateArray.length;i++){
                if(dateArray[i]=== -1){
                    dateArray[i] = previousMonthDays;
                    previousMonthDays= moment(previousMonthDays).subtract(1,'day').format('YYYY-MM-DD');
                }
            }
        }
        lastDate = dateArray.indexOf(moment(lastDay).format('YYYY-MM-DD'));
        while((lastDate+1)%7>0){
            if((lastDate+1)%7===0){
                return null;
            }
            else
            {
                lastDate = lastDate +1;
                dateArray.push(' ');
            }

        }

    }

    renderHolidays(item,index,styles){
        this.calenderDays(item);
        if(item !==' '){
            return (
                <Text style={styles||styles.holidays}>
                    {new Date(item).getDate()}
                </Text>
            );
        }
        else
        {
            return null ;
        }

    }

    addMonth(){
        increment = increment+1;
        nextMonth = moment().add(increment, 'month').format();
        this.setState({
            month:moment(nextMonth).format('MMMM'),
            year:moment(nextMonth).format('YYYY')
        });
        this.calenderDays(nextMonth);
    }
    subtractMonth(){
        increment = increment -1;
        previousMonth = moment().add(increment, 'month').format();
        this.setState({
            month:moment(previousMonth).format('MMMM'),
            year:moment(previousMonth).format('YYYY')
        });
        this.calenderDays(previousMonth);
    }

    render(){
        holidayIndex = dateArray.indexOf(moment(firstDay).format('YYYY-MM-DD'));
        const week = this.props.week;
        return(
            <View style={styles.container}>
                <View style={styles.containComponents}>
                    <Button
                        onPress={()=>{this.subtractMonth();}}
                        imageStyles={styles.button}
                        imageSource={require('../images/left.png')}
                    />
                    <Text style={styles.month}>{this.state.month} {this.state.year}</Text>
                    <Button
                        onPress={()=>{this.addMonth();}}
                        imageStyles={styles.button}
                        imageSource={require('../images/right.png')}
                    />
                </View>
                <View style={styles.components}>
                    <FlatList
                        numColumns={7}
                        data={week}
                        renderItem={({item})=>
                            <View style={styles.flatListweek}>
                                <Text style={styles.weekDays}>{item}</Text>
                            </View>
                        }
                    />
                    <FlatList
                        numColumns={7}
                        extraData={this.state}
                        data={dateArray}
                        renderItem={({item,index})=>{
                            return(
                                <TouchableOpacity
                                    onPress={()=>{
                                        this.props.onSelect(item);
                                    }}>
                                    <View style={styles.flatListdays}>
                                        {index%7===0 ?
                                            this.renderHolidays(item,index,this.props.holidays||styles.holidays)
                                            :
                                            index<holidayIndex?
                                                this.renderHolidays(item,index,this.props.preDays||styles.holidays)
                                                :
                                                this.renderHolidays(item,index,this.props.workingDays||styles.workingDays)
                                        }
                                    </View>
                                </TouchableOpacity>
                            );
                        }}
                    />

                </View>
            </View>
        );
    }
}
CustomCalender.propTypes={
    week:PropTypes.array,
    holidays:PropTypes.string,
    preDays:PropTypes.string,
    workingDays:PropTypes.string,
    date:PropTypes.integer,
    month:PropTypes.integer,
    year:PropTypes.integer,
    onSelect:PropTypes.func,
};
