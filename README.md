# react-native-calendar-date-picker

    React native calendar date picker component for both android and ios

## Features

* styles can be customised
* pure javascript implementation

## Installation:

    Install the component through npm using:

    ```
    npm install react-native-calendar-date-picker --save
    ```

  <img src="https://user-images.githubusercontent.com/32927921/33645330-3f44e346-da70-11e7-8a11-5e545f2c1f77.png" width="280"/>


## Example:
    ```js
    import Calendar from 'react-native-calendar-date-picker';


    <Calender
        week={['Su','Mn','Tu','We','Th','Fr','Sa']}
        workingDays={{fontSize:20,color:'black'}}
        holidays={{fontSize:20,color:'red'}}
        preDays={{fontSize:20,color:'grey'}}
        onSelect={(date)=>this.onSelect(date)}
    />
    ```

## Props:

  ` * ` - mandatory

Props Name          |               Description
------------------- | ---------------------------------------------------
` * week`           | array content listed for days in a week
` * onSelect`       | function to display the date selected when clicked
`   workingDays`    | styles applied for working days
`   holidays`       | styles applied for holidays
`   preDays`        | styles applied for previous month days
