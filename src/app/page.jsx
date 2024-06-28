

import './page.scss'
import Link from 'next/link'

const page = () => {

  return (
    <section className='wrapper'>
      <button className='link-btn'>
        <Link href='/dashboard'>GO TO DASHBOARD</Link>
      </button>
    </section>


  )
}

export default page