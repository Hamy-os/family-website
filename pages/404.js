import Link from 'next/link';

const NotFound = () => {
    return (
      <div className="text-center ">
        <h1 className="text-4xl md:text-8xl py-8">404 / Not Found!</h1>
        <p className="text-2xl md:text-4xl py-8">You Took A wrong Turn Or Followed A Broken Link!</p>
          <Link href="/">
            <div className="btn">
              Go Home
            </div>
          </Link>
      </div>
    );
  }
  export default NotFound;