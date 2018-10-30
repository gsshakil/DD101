import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Header from '../Header/index'

class AdminHeader extends React.Component{
    render(){
        return(
            <div className='admin-header'>
                <nav className='topnav'>
                    <ul>
                        <li><Link to=''>Logo</Link></li>
                        <li><Link to=''>item1</Link></li>
                        <li><Link to=''>item2</Link></li>
                        <li><Link to=''>item3</Link></li>
                        <li><Link to=''>item4</Link></li>
                        <li><Link to=''>item5</Link></li>
                    </ul>
                </nav>
                <nav className="sidenav">
                    <ul>
                        <li><Link to='/admin/dashboard'>Dashboard</Link></li>
                        <li><Link to='/admin/users'>Users</Link></li>
                        <li><Link to='/admin/posts'>Posts</Link></li>
                        <li><Link to='/admin/projects'>Projects</Link></li>
                        <li><Link to='/admin/Shops'>Shops</Link></li>
                        <li><Link to='/admin/jobs'>Jobs</Link></li>
                        <li><Link to='/admin/academy'>Acadmey</Link></li>
                        <li><Link to='/admin/apps'>Apps</Link></li>
                        <li><Link to='/admin/plugins'>Plugins</Link></li>
                        <li><Link to='/admin/themes'>Themes</Link></li>
                        <li><Link to='/admin/kreator'>Kreator</Link></li>
                        <li><Link to='/admin/marketplace'>Marketplace</Link></li>
                        <li><Link to='/admin/settings'>Settings</Link></li>
                    </ul>
                </nav>
            </div>
        )
    }
}

export default AdminHeader