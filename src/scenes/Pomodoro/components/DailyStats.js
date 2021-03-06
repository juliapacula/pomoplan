import React from 'react'
import Card from "../../../styles/Card"
import PropTypes from 'prop-types'
import {CardTitle, Data, Position, ProjectName, Statistics, SubTitle} from "./styles"
import Tag from "../../../partials/Tag"
import uniqid from "uniqid"

const DailyStats = props => {
    return (
        <Card shadow={4}>
            <CardTitle>{props.status} today</CardTitle>
            <Statistics>
                <Position>
                    <SubTitle>{"TIME:"}</SubTitle>
                    <Data>{props.time}</Data>
                </Position>
                <Position>
                    <SubTitle>{"COUNT:"}</SubTitle>
                    <Data>{props.countPomos}</Data>
                </Position>
                <Position>
                    <SubTitle>{"PROJECTS:"}</SubTitle>
                    <Data>{ props.projects ? props.projects.map( project =>
                        <ProjectName key={uniqid()} color={project.color}>
                            <div>{project.projectName}</div>
                            </ProjectName>
                    ) : 'No projects'}</Data>
                </Position>
                <Position>
                    <SubTitle>{"TAGS:"}</SubTitle>
                    <Data>{props.tags ?
                        props.tags.map(tag => (
                            <Tag key={uniqid()} {...tag}/>
                        ))
                        : 'No tags'}</Data>
                </Position>
            </Statistics>
        </Card>
    )
}

DailyStats.propTypes = {
    status: PropTypes.oneOf(['done', 'left']).isRequired,
    time: PropTypes.string,
    countPomos: PropTypes.number,
    tags: PropTypes.array,
    projects: PropTypes.array,
}

export default DailyStats