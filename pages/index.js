import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  let pages = ["zejna", "nur", "hamza", "esma", "halima", "tahira", "haris"]
  {/* TODO: Add more background images */}
  let background = ["https://hamy.file.glass/DEAIt1Z42x.jpg", "https://hamy.file.glass/4orK9iAjXE.jpg"] 
  function randomnumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let x = randomnumber(0, 6)
  let y = randomnumber(0, 1)
  let randompage = "/family/" + pages[x]
  let randombg = background[y]
  return (
    <div>
      <div className="hero min-h-screen backdrop-blur" style={{backgroundImage: `url(${randombg})`}}> 
        <div className="hero-overlay bg-opacity-60"></div> 
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
                  Hello there
                </h1> 
            <p className="mb-5">
                  Welcome to our website, here you can find a different page for each family member explaining who we are and what we do. Why not click this button and see random page!
                </p> 
              
            <div className="btn btn-primary">
            <Link href={`${randompage}`}>See a random page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
