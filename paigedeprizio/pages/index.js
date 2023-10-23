import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {BsFillMoonFill} from 'react-icons/bs';
import {AiFillLinkedin, AiFillInstagram, AiFillGithub} from 'react-icons/ai';
import selfie from '../public/selfie2.jpg';
import magic from '../public/magic-wand.png';
import responsive from '../public/responsive.png';
import seo from '../public/seo.png';
import web1 from '../public/oghdr.png';
import web2 from '../public/jreptiles.png';
import web3 from '../public/hdr1.png';
import web4 from '../public/hdr2.png';
import web5 from '../public/chippyd.png';
import { useState } from 'react';
import Typewriter from 'typewriter-effect'; 


export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return ( 
    <>
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Paige DePrizio Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-50 text-gray-800 px-10 font-montserrat md:px-20 lg:px-40 dark:bg-gray-900 dark:text-gray-200">
        <section className="min-h-screen ">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-montserra">paigedeprizio</h1>
            <ul className="flex items-center">
              <li>
              <BsFillMoonFill  onClick={() => setDarkMode(!darkMode)} className="cursor-pointer text-2xl dark:text-gray-200"/>
                </li>
              <li><a className="bg-orange-600 dark:bg-orange-400 text-white px-4 py-2 rounded-md ml-8"href="#">Resume</a></li>
            </ul>
          </nav> 
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 font-medium md:text-6xl">Hi!</h2>
            <h3 className='text-2xl py-2 dark:text-gray-200 md:text-3xl'>Developer and designer.</h3>
            
          </div> 
           <div className='text-5xl flex justify-center gap-16 py-3 text-orange-600 dark:text-orange-400'>

            <a href="https://www.linkedin.com/in/paige-deprizio-95322b177" target="_blank" rel="noopener noreferrer">
          <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/paigedeprizio/" target="_blank" rel="noopener noreferrer">
         <AiFillInstagram />
         </a>
         <a href="https://github.com/pdeprizio" target="_blank" rel="noopener noreferrer">
        <AiFillGithub />
         </a>
           </div>
           
           <div>
            <Image  src={selfie} width={300} height={300} className='justify-center text-center mx-auto mt-10 rounded-lg shadow-lg'/>
           </div>
        </section>


        <section>
          
          <div>
            <h3 className='text-3xl py-1 mt-10 text-center dark:text-gray-200'>Services I offer</h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-gray-200 text-center'>I offer a diverse range of services tailored to your unique needs. 
            From crafting intuitive user experiences and building responsive websites to implementing effective SEO strategies, I specialize in transforming ideas into 
            impactful digital solutions. With a client-centric approach, I prioritize your goals, ensuring seamless collaboration and outstanding results. My passion for 
            technology, coupled with a commitment to innovation, drives me to deliver high-quality work. Let's collaborate and elevate your digital presence.</p>
          </div>



          <div className='flex flex-col gap-10 py-10 lg:flex-row'>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 mx-auto dark:text-gray-200 bg-white basis-1/3 flex-1'>
              
              <h3 className='text-xl font-bold text-indigo-950 dark:text-indigo-950 pt-8 pb-2'>UX Design</h3>
              <p className='py-2 dark:text-indigo-950'>Mastering user experience to create intuitive and visually appealing interfaces is my forte. I focus on understanding user 
              behavior and crafting designs that resonate with the audience, ensuring seamless navigation and engagement.</p>
              <h4 className='py-4 dark:text-indigo-950 font-bold'>Skills & Tools</h4>
              <p className='text-gray-800 py-1 dark:text-indigo-950'>User Research, Wireframing, Prototyping, User Testing, Adobe Photoshop, Canva, Figma.</p>

          
          

            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-white basis-1/3 flex-1'>
              
              <h3 className='text-xl font-bold text-indigo-950 dark:text-indigo-950 pt-8 pb-2'>Web Development</h3>
              <p className='py-2 dark:text-indigo-950'>I specialize in turning creative concepts into functional websites and web applications. With a strong command of various 
              programming languages and frameworks, I bring designs to life, ensuring they are responsive, dynamic, and user-friendly.</p>
              <h4 className='py-4 dark:text-indigo-950 font-bold'>Skills & Tools</h4>
              <p className='text-gray-800 py-1 dark:text-indigo-950'>HTML, CSS, Bootstrap, JavaScript, React.js, Node.js, Next.js, REST APIs, Git, Visual Studio Code.</p>

            </div>
            <div className='text-center shadow-xl p-10 rounded-xl my-10 bg-white basis-1/3 flex-1'>
              
              <h3 className='text-xl font-bold text-indigo-950 dark:text-indigo-950  pt-8 pb-2'>SEO / Marketing</h3>
              <p className='py-2 dark:text-indigo-950'>Proficient in optimizing websites for search engines, I enhance online visibility and drive organic traffic through strategic SEO implementation. Additionally, I 
              excel in devising impactful digital marketing campaigns, elevating brand presence and ensuring continuous growth for businesses online.</p>
              <h4 className='py-4 dark:text-indigo-950 font-bold'>Skills & Tools</h4>
              <p className='text-gray-800 py-1 dark:text-indigo-950'>Keyword Research, On-Page and Off-Page SEO, Social Media Marketing, Google Ads, Local Service Ads, Content Marketing, Google Page Optimization.</p>

            
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className='text-3xl py-3 dark:text-gray-200 text-center font-bold'>Portfolio</h3>

            
          </div>
         <div className='flex flex-col gap-10 py-10 lg:flex-row'>
          <div className='basis-1/3 flex-1 shadow-md'>
            <Image src={web5}  className='rounded-lg object-cover' width='100%' height='100%' layout='responsive' />
            
          </div>
          <div className='basis-1/3 flex-1 shadow-md'>
            <Image src={web4} className='rounded-lg object-cover' width='100%' height='100%' layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 shadow-md'>
            <Image src={web3} className='rounded-lg object-cover' width='100%' height='100%' layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 shadow-md'>
            <Image src={web2} className='rounded-lg object-cover' width='100%' height='100%' layout='responsive' />
          </div>
          <div className='basis-1/3 flex-1 shadow-md'>
            <Image src={web1} className='rounded-lg object-cover' width='100%' height='100%' layout='responsive' />
          </div>
         </div>
        </section>

      
      </main>
      <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto">
        <p>&copy; 2023 Paige DePrizio. All rights reserved.</p>
      </div>
    </footer>
  
      </div>
    </>
  )
}
