'use client'

import Image from 'next/image'
import styles from './page.scss'
import { useEffect, useRef } from 'react'



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





  return (
    <>
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


    </>
  )
}
