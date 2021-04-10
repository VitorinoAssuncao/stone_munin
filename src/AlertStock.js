import React from 'react';

function StockAlert(props,actual_value,average_value) {
    switch (props.actual_value){
        case (props.actual_value < (props.average_value * 10)):
            return "danger";
        case (props.actual_value >= (props.average_value * 10)) && (props.actual_value <= (props.average_value * 13)):
            return "alert";
        case (props.actual_value >= (props.average_value * 14)) && (props.actual_value <= (props.average_value * 18)):
            return "success";
        case (props.actual_value >= (props.average_value * 19)) && (props.actual_value <= (props.average_value * 23)):
            return "alert";
        case (props.actual_value > (props.average_value * 23)):
            return "danger";     
    }
}

export default StockAlert;