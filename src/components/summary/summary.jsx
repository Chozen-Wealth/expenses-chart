import './summary.css'
import data from "../../data.json"
import { useState } from 'react'

export default function Summary(){

    const [today, setToday] = useState("wed")

    return(
        <div className='summary'>
            <div className="summaryTop">
                <span>Spending - Last 7 days</span>
            </div>
            <div className="summaryMid">
                {data.map(element => {
                    return(
                        <div className='thisWeek' key={element.day}>
                            <div data-amount={`$${element.amount}`} className='filled' style={{height: `${element.amount + 10}%`, backgroundColor: `${element.day === today ? "rgb(118, 181, 188)" : "rgb(236, 117, 93)"}` }} ></div>
                            <span className='day'>{element.day}</span>
                        </div>
                    )
                })}
            </div>
            <div className="summaryBot">
                <div className='summaryBotLeft'>
                    <span className='totalMonth'>Total this month</span>
                    <span className='totalMonthDollar'>$478.33</span>
                </div>
                <div className='summaryBotRight'>
                    <span>+2.4%</span>
                    <span>From last month</span>
                </div>
            </div>
        </div>
    )
}