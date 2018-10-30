import React from 'react'

import AdminHeader from './AdminHeader'

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                <AdminHeader/>
                <h1>Dashboard</h1>
            </div>
        )
    }
}

export default Dashboard;