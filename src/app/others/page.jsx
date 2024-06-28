'use client'

import Image from 'next/image'
import styles from './page.scss'
import { useEffect, useRef, useState } from 'react'
import next from 'next'



export default function Home() {

    // Declearing refs
    const navRef = useRef()
    const contentRef = useRef()

    useEffect(() => {

        // using document object to target dom elements
        const selectNav = document.querySelectorAll(".navRef")
        const navFill = document.querySelectorAll(".fill")
        const selectContent = document.querySelectorAll(".content-item")

        // ..................Alternatively using React useRef to target dom elements ..................

        // const selectNav = navRef.current.querySelectorAll(".navRef")
        // const navFill = navRef.current.querySelectorAll(".fill")
        // const selectContent = contentRef.current.querySelectorAll(".content-item")

        selectNav.forEach(nav => {
            // for scrolling to the appropriate content
            nav.addEventListener('click', () => {
                selectContent.forEach(content => {
                    if (content.id === nav.attributes['data-target'].value) {
                        contentRef.current.scroll({
                            top: content.offsetTop,
                            behavior: 'smooth'
                        })

                        // for adding active class to the appropriate and active nav button span
                        navFill.forEach(fill => {
                            fill.classList.remove('active')
                            if (fill.offsetParent.attributes['data-target'].value === content.id) {
                                fill.classList.add('active')
                            }
                        })
                    }
                })
            })
        })
    }, [])


    useEffect(() => {
        // counter section
        const counter = document.querySelectorAll('.counter h1')
        const counterContainer = document.getElementById('counter-container')

        let activated = false
        window.addEventListener('scroll', () => {
            if (
                scrollY > counterContainer.offsetTop - counterContainer.offsetHeight - 300
                && activated === false) {
                counter.forEach(c => {
                    c.innerText = 0;
                    let count = 0

                    function updateCounter() {
                        const target = parseInt(c.dataset.count)
                        if (count < target) {
                            count++
                            c.innerText = count;
                            setTimeout(updateCounter, 10)


                        } else {
                            c.innerText = target;
                        }
                    }

                    updateCounter()
                    activated = true
                })
            } else if (
                scrollY < counterContainer.offsetTop - counterContainer.offsetHeight - 500 ||
                scrollY === 0
                && activated === true
            ) {
                counter.forEach(c => {
                    c.innerText = 0
                });
                activated = false
            }
        })
    }, [])


    // .................Example of Recussion in Javascript.......................//
    // Function to calculate the sum of EVEN numbers between two given numbers
    const evenSum = (num, lim) => {
        if (num > lim) return 0
        if (num % 2 === 0) {
            return num + evenSum(num + 2, lim)
        } else {
            return evenSum(num + 1, lim)
        }
    }
    // console.log('EvenSum = ', evenSum(3, 5));



    // Function to calculate the sum of numbers between two given numbers
    const sum = (num, lim) => {
        if (num > lim) return 0
        return num + sum(num + 1, lim)
    }
    // console.log('Sum = ', sum(3, 5));

    // Function to calculate the sum of numbers between two given numbers and a custom increment

    const incrementBySum = (num, incr, lim) => {
        if (num > lim) return 0
        return num + incrementBySum(num + incr, incr, lim)
    }
    // console.log('Increment_By_Sum = ', incrementBySum(3, 5, 30));

    // Function to calculate Factorial

    let arr = []
    const factorial = (num) => {
        arr.push(num)
        if (num === 1) {
            return 1
        }
        if (num < 1) {
            return undefined
        }
        return num * factorial(num - 1)
    }
    // console.log('Factorial = ', factorial(10), arr);



    // Fibonnaci Sequence
    const fibonnaci = (num, arr = [0, 1]) => {
        if (arr.some(a => a > num)) return arr
        let sum = 0
        arr.slice(-2).forEach(a => sum += a)
        arr.push(sum)
        return fibonnaci(num, arr)
    }
    // console.log(fibonnaci(10));




    // Fibonnaci Sequence
    const fibb = (num, arr = [0, 1]) => {
        // ..................Another Approach (Mine).............//
        const next = arr[arr.length - 1] + arr[arr.length - 2]
        if (arr[arr.length - 1] > num || next > num) return arr
        arr.push(next)
        return fibb(num, arr)
    }
    // console.log(fibb(36));






    const [tableInfo, settableInfo] = useState([
        {
            id: 1,
            name: 'panel',
            location: 'lagos',
            price: 200,
        },
        {
            id: 2,
            name: 'controller',
            location: 'Abuja',
            price: 250,
        },
        {
            id: 3,
            name: 'cable',
            location: 'kwara',
            price: 150,
        },
    ])




    const [id, setId] = useState(-1)

    const mapTable = tableInfo.map((info, i) => {
        const deleteTable = (id) => {
            settableInfo(prev => prev.filter(prev => prev.id !== id))
        }

        return info.id === id ? <UpdateComponent info={info} settableInfo={settableInfo} setId={setId} id={id} />

            : (
                <tr key={info.id}>
                    <td>{info.name}</td>
                    <td>{info.location}</td>
                    <td>{info.price}</td>
                    <td>
                        <button onClick={() => setId(info.id)}>Edit</button>
                        <button onClick={() => deleteTable(info.id)}>Delete</button>

                    </td>
                </tr>
            )
    })


    const addTable = () => {

        // This is still valid
        // settableInfo(prev => [...prev, { id: 8, price: '', location: '', name: '' }])

        // What i did here was to increment the id of the objects
        settableInfo(prev => {
            const newItem = { id: prev[prev.length - 1].id + 1, price: '', location: '', name: '' }
            setId(newItem.id)
            return [
                ...prev, newItem
            ]
        })
    }



    return (
        <>

            <div className="table">
                <button onClick={addTable}>Add More Items</button>
                <table>
                    <thead>
                        <tr>
                            <th>name</th>
                            <th>loacation</th>
                            <th>price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mapTable}
                    </tbody>
                </table>
            </div>




            {/* Grid Layout Exercise Section*/}
            <div className="grid">
                <div className="grid-1">Web Development</div>
                <div className="grid-2">Search Engine Optimization</div>
                <div className="grid-3">Quality Assurance</div>
                <div className="grid-4">Web Design</div>
                <div className="grid-5">UI/UX</div>
                <div className="grid-6">Cyber Security</div>
            </div>

            {/* Resume Section */}
            <div className="resume">
                <div className="title">
                    <p>My Resume</p>
                </div>
                <div className="container">

                    <div className="resume-nav" ref={navRef}>
                        <button className='navRef' data-target='education'> O <span>Education</span> <span className='fill active'></span></button>
                        <button className='navRef' data-target='experience'>O <span>Experience</span> <span className='fill'></span></button>
                        <button className='navRef' data-target='qualification'>O <span>Qualification</span> <span className='fill'></span></button>
                        <button className='navRef' data-target='religion'>O<span>Religion</span> <span className='fill'></span></button>
                        <button className='navRef' data-target='hobbies'>O<span>Hobbies</span> <span className='fill'></span></button>

                    </div>
                    <div id="resume-content" className='resume-content' ref={contentRef}>
                        <div className="content-item" id='education'>Education</div>
                        <div className="content-item" id='experience'>Experience</div>
                        <div className="content-item" id='qualification'>Qualificaiton</div>
                        <div className="content-item" id='religion'>Religion</div>
                        <div className="content-item" id='hobbies'>Hobbies</div>
                    </div>
                </div>
            </div>


            {/* Portfolio Section using Grid */}
            <section className="portfolio">
                <div className="title">
                    <p>My Portfolio</p>
                </div>
                <div className="works">

                    <div className="work-1">
                        <div className="title">Title of work done <span>---</span></div>
                        <div className="image"><img src="./work-pics/finexhealth-2024.png" alt="" /></div>
                    </div>
                    <div className="work-1">
                        <div className="title">Title of work done <span>---</span></div>
                        <div className="image"><img src="./work-pics/screencapture-127-0-0-1-5173-html-pages-about-html-2023-10-04-00_06_03.png" alt="" /></div>
                    </div>
                    <div className="work-1">
                        <div className="title">Title of work done <span>---</span></div>
                        <div className="image"><img src="./work-pics/screencapture-127-0-0-1-5173-2023-10-02-17_22_34.png" alt="" /></div>
                    </div>
                    <div className="work-1">
                        <div className="title">Title of work done <span>---</span></div>
                        <div className="image"><img src="./work-pics/screencapture-mohztec-2024-06-13-15_53_42.png" alt="" /></div>
                    </div>
                    <div className="work-1">
                        <div className="title">Title of work done <span>---</span></div>
                        <div className="image"><img src="./work-pics/screencapture-mohztectechnologies-netlify-app-cart-2023-10-04-00_00_48.png" alt="" /></div>
                    </div>
                    <div className="work-1">
                        <div className="title">Title of work done <span>---</span></div>
                        <div className="image"><img src="./work-pics/screencapture-localhost-3000-2023-10-03-23_48_47.png" alt="" /></div>
                    </div>
                </div>
            </section>
            <section>
                <div className="count-up">
                    <div className="counter-container" id='counter-container'>
                        <div className="counter">
                            <h1 data-count='120'>70</h1>
                            <p>Project</p>
                        </div>
                        <div className="counter">
                            <h1 data-count='500'>090</h1>
                            <p>Cllients</p>
                        </div>
                        <div className="counter">
                            <h1 data-count='190'>80</h1>
                            <p>Trained</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}



const UpdateComponent = ({ info, settableInfo, setId, id }) => {


    const [updatedVal, setUpdatedVal] = useState({
        id: info.id,
        name: info.name,
        location: info.location,
        price: info.price,
    })

    const updateValFunc = (e) => {
        const { name, value } = e.target
        setUpdatedVal(prev => ({
            ...prev,
            [name]: value
        }))
    }


    const updateTableInfo = () => {
        // This are the correct ways to find and replace an object in an array of objects in reactJS
        // settableInfo(tableInfo.map(item =>
        //   item.id === id ? updatedVal : item
        // ));
        // settableInfo(tableInfo.map(prev => prev.id === id ? updatedVal : prev))
        settableInfo(prev => prev.map(pre => pre.id === id ? updatedVal : pre))
        setId(-1)
    }

    return (
        <tr key={info.id}>
            <td><input type="text" value={updatedVal.name} name='name' onChange={updateValFunc} /></td>
            <td><input type="text" value={updatedVal.location} name='location' onChange={(e) => setUpdatedVal(prev => ({ ...prev, [e.target.name]: e.target.value }))} /></td>
            <td><input type="number" value={updatedVal.price} name='price' onChange={(e) => setUpdatedVal(prev => ({ ...prev, [e.target.name]: e.target.value }))} /></td>
            <td>
                <button onClick={updateTableInfo}>Update</button>
            </td>
        </tr>
    )
}
