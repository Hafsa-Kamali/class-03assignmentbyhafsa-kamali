
import Link from "next/link";

export default function Nav() {
  return (
    <div className="homeContainer">
      <div className="childContainer">
        <title>Hafsa Kamali Web World</title>
        <header className="text-grey-600 body-font">
          <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
            <a className="flex title font font-medium items-center text-grey-900 mb-4 md:mb-0">
              <div className="flex space-x-4">
                <div className="avatar">
                  <div className="w-12 rounded-full relative">
                    <img
                      src="https://yt3.ggpht.com/bDGSI2lmTbv21gtdkKKiOjaMQ0jwdSioxLebOGSR2-dL-sNObCpgAwjAeexHtibwbh-XYAYjNf4=s600-c-k-c0x00ffffff-no-rj-rp-mo"
                      alt="hafsa avatar logo"
                      className="rounded-full"
                    />
                    <span className="absolute bottom-0 right-0 w-2 h-2 bg-green-400 rounded-full border-2 border-white"></span>
                  </div>
                </div>
              </div>
              <span className="ml-3 text-xl">Hafsa Kamali</span>
            </a>

            <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center">
              <Link className="mr-5 hover:text-green-400" href={"/"}>
                Home
              </Link>
              <Link className="mr-5 hover:text-green-400" href={"/aboutus"}>
                About Us
              </Link>
              <Link className="mr-5 hover:text-green-400" href={"/contactus"}>
                Contact Us
              </Link>
              <Link
                className="mr-5 hover:text-green-400"
                href={"/privacypolicy"}
              >
                Privacy Policy
              </Link>
            </nav>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <button className="inline-flex items-center bg-slate-600 text-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-500 rounded text-base">
                Login
              </button>

              <button className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base">
                Sign Up
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse md:flex-row items-center pt-8">
            <div className="flex-1 mb-8 md:mb-0 text-center md:text-left">
              <h1 className="text-6xl font-bold mb-6">
                Hello, I'm <span className="text-green-400 text-center md:text-left"><br/>
                Hafsa Kamali</span>
              </h1>
              <p className="text-xl mb-6">
                I excel at crafting elegant digital experiences and am
                proficient in various programming languages, technologies, and
                frameworks. I am passionate about creating innovative solutions
                that solve real-world problems.
              </p>
              <button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-md hover:bg-green-600">
                Download CV
              </button>
            </div>

            {/*Profile Image */}
            <div className="flex-shrink-0 mb-8 md:mb-0 md:ml-8">
              <img
                src="/hafsa.png"
                alt="Hafsa Kamali"
                width={298}
                height={298}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/*Skills and Stats */}
          <div className="mt-12 text-center grid grid-cols-2 md:grid-cols-5 gap-4">
            <div>
              <h2 className="text-3xl font-bold">10</h2>
              <p className="text-gray-400">Skills</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">12</h2>
              <p className="text-gray-400">Projects Completed</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">100</h2>
              <p className="text-gray-400">Certificates</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">5</h2>
              <p className="text-gray-400">Technologies Handled</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold">40</h2>
              <p className="text-gray-400">Zoom Meetings Attended</p>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
}


