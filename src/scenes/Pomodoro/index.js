import React from 'react'
import {Col, Row} from "reactstrap"
import DoneToday from "./containers/DoneToday"
import LeftToday from "./containers/LeftToday"
import TodayView from "../TodayView"
import PomodoroHistory from "../PomodoroHistory"
import Timer from "./containers/Timer"

class Pomodoro extends React.Component {
    render() {
        return (
            <Row className={"mt-3"}>
                <Col xs={"12"} lg={"4"} className={" mb-2"}>
                    <Timer/>
                </Col>
                <Col xs={"12"} md={"6"} lg={"4"} className={"mb-2 mb-md-0"}>
                    <DoneToday/>
                </Col>
                <Col xs={"12"} md={"6"} lg={"4"} className={""}>
                    <LeftToday/>
                </Col>
                <Col xs={"12"} lg={"4"} className={"my-2"}>
                    <TodayView/>
                </Col>
                <Col xs={"12"} lg={"8"} className={"mb-4 my-md-4"}>
                    <PomodoroHistory/>
                </Col>
            </Row>
        )
    }
}

export default Pomodoro