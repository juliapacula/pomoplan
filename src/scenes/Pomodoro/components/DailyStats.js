import React from 'react'
import Card from "../../../styles/Card"
import PropTypes from 'prop-types'
import {CardTitle, Data, Position, Statistics, SubTitle} from "./styles"

const DailyStats = props => {
    return (
        <Card shadow={4}>
            <CardTitle>{props.status} today</CardTitle>
            <Statistics>
                <Position>
                    <SubTitle>{"TIME:"}</SubTitle>
                    <Data>{props.timeLeft}</Data>
                </Position>
                <Position>
                    <SubTitle>{"COUNT:"}</SubTitle>
                    <Data>{props.countPomos}</Data>
                </Position>
                <Position>
                    <SubTitle>{"BREAKS:"}</SubTitle>
                    <Data>{"musze pomyslec"}</Data>
                </Position>
                <Position>
                    <SubTitle>{"TAGS:"}</SubTitle>
                    <Data>{"some tags"}</Data>
                </Position>
            </Statistics>
        </Card>
    )
}

DailyStats.propTypes = {
    status: PropTypes.oneOf(['done', 'left']).isRequired,
    timeLeft: PropTypes.string,
    countPomos: PropTypes.number
}

export default DailyStats