
import Link from "next/link"

export default function Nav () {
    return (
        <div>
    <header className= "text-grey-600 body-font">

<div className = "container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >

 <a className = "flex titlefont font-medium items-center text-grey-900 mb-4 md:mb-0">  

<img
   src= "https://images.playground.com/5e1721637c214fd9ba1019530e1e81e5.jpeg"
   alt = "h logo"
   className = "w-12 h-12 rounded-full"


/>

<span className = "ml-3 text-xl">Hafsa Kamali</span></a> 

<nav className="mmd:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1 md:border-grey-400 flex flex-wrap items-center text-base justify-center"
>

          <Link className="mr-5 hover:text-green-400" href = {"http://localhost:3000/"}>Home</Link>
         <Link className="mr-5 hover:text-green-400" href = {"http://localhost:3000/aboutus"}>About Us</Link>
         <Link className="mr-5 hover:text-green-400" href = {"http://localhost:3000/contactus"}>Contact Us</Link>
         <Link className="mr-5 hover:text-green-400" href = {"http://localhost:3000/privacypolicy"}>Privacy Policy</Link>


</nav>

{/* buttons*/}

<div className=" flex space-x-4 mt-4 md:mt-0">
<button className= "inline-flex items-center bg-yellow-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
Login 

</button>
    
<button className= "inline-flex items-center bg-orange-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base">
Sign Up

</button>
    
</div>

</div>

<div className= "flex space-x-4">
  <div className="avatar">
    <img src="https://yt3.ggpht.com/bDGSI2lmTbv21gtdkKKiOjaMQ0jwdSioxLebOGSR2-dL-sNObCpgAwjAeexHtibwbh-XYAYjNf4=s600-c-k-c0x00ffffff-no-rj-rp-mo" alt="hafsa avatar"/>

  </div>

</div>

    </header>



        </div>
    )
}