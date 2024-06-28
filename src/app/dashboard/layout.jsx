'use client'
import React, { useEffect, useRef } from 'react'
import './dashboard.scss'


export default function RootLayout({ children }) {
    const navLinkRef = useRef()
    const navBarRef = useRef()
    const navResponsiveContainer = useRef()

    useEffect(() => {
        const navLink = navLinkRef.current.querySelectorAll('.navlink')
        navLink.forEach(link => {
            link.addEventListener("click", () => {
                navLink.forEach(link => link.classList.remove('active'))
                link.classList.add('active')
            })
        })
    }, [])

    const toggleNav = () => {
        navBarRef.current.classList.toggle('responsive')
        navResponsiveContainer.current.classList.toggle('responsive')
    }




    return (
        <section  >
            <div ref={navResponsiveContainer} className="dashboard-container  responsive">
                <div ref={navBarRef} className="navbar responsive">
                    <div className="polygon-ltd">

                        <button onClick={toggleNav} className='toggle-nav'>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div className="title">
                            <img src="./dashboard-pics/polygon.png" alt="" />

                            <h2>Polygon Limited</h2>

                        </div>
                        <div className="profile">
                            <div className="left-side">
                                <img src="./dashboard-pics/Ellipse-1554.png" alt="" />
                                <div className="name">
                                    <p>Okache Mercy</p>
                                    <p>Human Resource</p>
                                </div>
                            </div>
                            <img src="./dashboard-pics/arrow-down.png" width={15} alt="" />

                        </div>
                        <div className="search">
                            <img src="./dashboard-pics/search.png" alt="" />
                            <input type="text" placeholder='Search projects' />
                        </div>
                    </div>


                    <nav ref={navLinkRef}>
                        <ul>
                            <li className='active navlink'>
                                <img src="./dashboard-pics/das.png" className='das' alt="" />
                                <span>Dashboard</span>
                            </li>
                            <li className='navlink'>
                                <img src="./dashboard-pics/late.png" className='icon' alt="" />
                                <span>Late notice</span>
                            </li>
                            <li className='navlink'>
                                <img src="./dashboard-pics/date.png" className='icon' alt="" />
                                <span>Attendance Date</span>
                            </li>
                            <li className='navlink'>
                                <img src="./dashboard-pics/uim_analytics.png" className='icon' alt="" />
                                <span>Employee Managenent</span>
                            </li>
                            <li className='navlink'>
                                <img src="./dashboard-pics/nimbus_money.png" className='icon' alt="" />
                                <span>Salary Management</span>
                                <img src="./dashboard-pics/arrow-down.png" className='ml-auto' width={15} alt="" />

                            </li>
                            <li className='leave'>
                                <div className="navlink">
                                    <img src="./dashboard-pics/leave.png" className='icon' alt="" />
                                    <span>Leave</span>
                                    <img src="./dashboard-pics/arrow-down.png" className='ml-auto arrow' width={15} alt="" />
                                </div>

                                <ul>
                                    <li><span></span> Request</li>
                                    <li><span></span> Leave Policy</li>
                                    <li><span></span> Special Days</li>
                                    <li><span></span> Apply for a staff</li>
                                </ul>
                            </li>

                            <li className='navlink'>
                                <img src="./dashboard-pics/arcticons_jobstreet.png" className='icon' alt="" />
                                <span>Job</span>
                                <img src="./dashboard-pics/arrow-down.png" className='ml-auto icon' width={15} alt="" />

                            </li>
                            <li className='navlink'>

                                <img src="./dashboard-pics/mdi_file-outline.png" className='icon' alt="" />
                                <span>Documents</span>
                            </li>
                            <li className='navlink settings'>

                                <img src="./dashboard-pics/settings.png" className='icon' alt="" />
                                <span>Setting</span>
                            </li>
                            <li className='navlink'>

                                <img src="./dashboard-pics/logout.png" className='icon' alt="" />
                                <span>Logout</span>
                            </li>



                        </ul>
                    </nav>

                </div>
                <div className="content ">
                    {children}
                </div>
            </div>
        </section>
    )
}

// export default RootLayout