import React from 'react'
// import './dashboard.scss'
import './dashboard.scss'

const page = () => {

    return (
        <div className='content-container'>
            <div className="welcome">
                <div className="overview">
                    <p>Overview</p>
                    <p>Hi Mercy, Welcome back to your Dashboard!</p>
                </div>
                <div className="date">
                    <img src="./dashboard-pics/Vector-2.png" alt="" />
                    <div className="">
                        <p>Date</p>
                        <p>17th April 2020-21st May 2020</p>
                    </div>
                    <img src="./dashboard-pics/arrow-down.png" alt="" />
                </div>
            </div>


            {/* ...................tiles........................... */}
            <div className="tiles">
                <div className="outer-wrapper">
                    <div className="inner-wrapper">
                        <div className="">
                            <img src="./dashboard-pics/Vector-3.png" alt="" />
                            <span>75</span>

                        </div>
                        <p>Total Employees</p>
                        <div className="">
                            <img src="./dashboard-pics/Icon-1.png" alt="" />
                            <span>4% (30 days)</span>

                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div className="">
                            <img src="./dashboard-pics/Vector-3.png" alt="" />
                            <span>75</span>

                        </div>
                        <p>Total Employees</p>
                        <div className="">
                            <img src="./dashboard-pics/Icon-1.png" alt="" />
                            <span>4% (30 days)</span>

                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div className="">
                            <img src="./dashboard-pics/Vector-3.png" alt="" />
                            <span>75</span>

                        </div>
                        <p>Total Employees</p>
                        <div className="">
                            <img src="./dashboard-pics/Icon-1.png" alt="" />
                            <span>4% (30 days)</span>

                        </div>
                    </div>
                    <div className="inner-wrapper">
                        <div className="">
                            <img src="./dashboard-pics/Vector-3.png" alt="" />
                            <span>75</span>

                        </div>
                        <p>Total Employees</p>
                        <div className="">
                            <img src="./dashboard-pics/Icon-1.png" alt="" />
                            <span>4% (30 days)</span>

                        </div>
                    </div>
                </div>
            </div>


            {/* ..............................Progress................... */}

            <div className="progress">
                <div className="task-progress">
                    <div className="">
                        <div className="">
                            <p>Employees Task Progress</p>
                            <p>Lorem ipsum dolor sit amet consectetur, adip.</p>
                        </div>
                        <button>
                            <img src="./dashboard-pics/Icon-2.png" alt="" />
                            <span>Save Report</span>
                        </button>
                    </div>
                    <div className="">
                        <div className="img-container">
                            <img src="./dashboard-pics/Vector 7.png" alt="" />
                            <p>
                                <span>Sunday</span>
                                <span>Monday</span>
                                <span>Tuesday</span>
                                <span>Wednesday</span>
                                <span>Thursday</span>
                                <span>Friday</span>
                                <span>Saturday</span>
                            </p>
                            <p className='mobile'>
                                <span>Sun</span>
                                <span>Mon</span>
                                <span>Tues</span>
                                <span>Wed</span>
                                <span>Thurs</span>
                                <span>Fri</span>
                                <span>Sat</span>
                            </p>
                        </div>

                    </div>

                </div>
                <div className="emp-month">
                    <div className="">
                        <p>Employee of the month</p>
                        <p>Congratulations to the employees who are the talents this month</p>
                    </div>
                    <div className="">
                        <img src="./dashboard-pics/boy.png" alt="" />
                        <div>
                            <p>Faustina Okache</p>
                            <span>Graphic Designer</span>
                            <span>Polygal Limited</span>
                        </div>
                    </div>
                    <div className='performance'>

                        <div className="">
                            <p>Performance</p>
                            <p>+31 Increased</p>

                        </div>
                        <div className="">
                            <p>Attandance</p>
                            <p>+41 Increased</p>

                        </div>
                        <div className="">
                            <p>Project</p>
                            <p>+9</p>

                        </div>
                    </div>
                </div>
            </div>


            {/* .....................Table........................... */}
            <div className="status">
                <div className="emp-status">
                    <div className="title">
                        <p>Employees Status</p>
                        <button>
                            <img src="./dashboard-pics/filter.png" alt="" />
                            <span>Filter & Sort</span>
                        </button>
                    </div>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Employees Name</th>
                                    <th>Job Title</th>
                                    <th>Team Lead</th>
                                    <th>Working Format</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="">
                                            <img src="./dashboard-pics/girl.png" alt="" />
                                            <span>Maria uko</span>
                                        </div>
                                    </td>
                                    <td>Frontend Dev</td>
                                    <td>Innocent Odey</td>
                                    <td>Onsite</td>
                                    <td>Onboarding</td>
                                </tr>
                                <tr>
                                    <td>

                                        <div className="">
                                            <img src="./dashboard-pics/girl.png" alt="" />
                                            <span>Maria uko</span>
                                        </div>
                                    </td>
                                    <td>Frontend Dev</td>
                                    <td>Innocent Odey</td>
                                    <td>Onsite</td>
                                    <td>Onboarding</td>
                                </tr>
                                <tr>
                                    <td>
                                        <div className="">
                                            <img src="./dashboard-pics/girl.png" alt="" />
                                            <span>Maria uko</span>
                                        </div>
                                    </td>
                                    <td>Frontend Dev</td>
                                    <td>Innocent Odey</td>
                                    <td>Onsite</td>
                                    <td>Onboarding</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="process">
                    <p>Hiring Process</p>
                    <div className="">
                        <img src="./dashboard-pics/prev.png" alt="" />

                        <span>March 2023</span>
                        <img src="./dashboard-pics/next.png" alt="" />

                    </div>
                    <div className="">
                        <img src="./dashboard-pics/stat.png" alt="" />
                    </div>
                    <div className="stat">
                        <div className="">
                            <p className=''>
                                <span className='bullet'></span>
                                <span className=''>Job Views</span>

                            </p>
                            <p>60%</p>
                        </div>
                        <div className="">
                            <p className=''>
                                <span className='bullet'></span>
                                <span className=''>Applied</span>

                            </p>
                            <p>60%</p>
                        </div>
                        <div className="">
                            <p className=''>
                                <span className='bullet'></span>
                                <span className=''>CV Reviewed</span>

                            </p>
                            <p>60%</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default page