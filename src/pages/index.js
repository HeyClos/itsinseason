import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>It's in Season - High end catering and private events.</title>
        <meta name="description" content="High end catering and private events." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <p>
          It's in Season
        </p>
        <p>
          High end catering and private events
        </p>
        <br></br>
        <p class="py-3">
          Welcome to our world of exquisite flavors and unrivaled luxury. At It's in Season, we specialize in creating unforgettable culinary experiences for the most discerning palates.
        </p>
        <p class="py-3">
          As a private chef with years of experience, I have honed my craft to create dishes that will take your taste buds on a journey you won't soon forget. Our team of highly skilled professionals is dedicated to providing personalized and bespoke catering services to meet your every need. From intimate dinner parties to large-scale events, we will work with you to create a menu that is tailored to your tastes and preferences.
        </p>
        <p class="py-3">
          At It's in Season, we source only the finest ingredients from around the world to ensure that every dish we create is of the highest quality. Our attention to detail is unmatched, and our commitment to excellence is evident in every dish we serve. Our dedication to providing exceptional service is second to none. We will work closely with you every step of the way to ensure that your event is a success. 
        </p>
        <p class="py-3">
          From planning to execution, we will be there to make sure that everything runs smoothly and that your guests have an unforgettable experience. 
          So if you're looking for a catering experience that is truly exceptional, look no further than It's in Season.
        </p>
        <br></br>
        <p class="pb-6">
          Contact us today to learn more about how we can make your next event one to remember.
        </p>
        <p>
          Itsinseason@outlook.com
        </p>
        <p class="pb-4">
          817-262-2977
        </p>
        <a href="https://www.instagram.com/its_in_season" class="relative inline-block text-lg group">
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 group-hover:text-white">
            <span class="absolute inset-0 w-full h-full px-5 py-3 bg-gray-50"></span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-amber-200 group-hover:-rotate-180 ease"></span>
            <span class="relative">Instagram</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </main>
    </>
  )
}
