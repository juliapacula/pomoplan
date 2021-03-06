import React from 'react'
import {firebaseConnect, isLoaded} from "react-redux-firebase"
import {connect} from "react-redux"
import {compose} from "redux"
import HomeScreen from './components/HomeScreen'
import LoadingScreen from "../../partials/LoadingScreen"
import {getTodayStringDate} from "../../utils/date"

const Home = ({profile}) => {
    if(isLoaded(profile))
        return (
            <HomeScreen date={getTodayStringDate()} username={profile.username}/>
        )
    else
        return (
            <LoadingScreen/>
        )
}

export default compose(
    firebaseConnect(),
    connect((state) => ({
        profile: state.firebase.profile,
    }))
)(Home)