import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black backdrop-blur-md shadow-md p-2 px-6 flex justify-between items-center">
        <Image src="/assets/Logo.png" width={120} height={120} alt="Logo popcorn.js"/>
        <p className="text-white">Micaela Svatzky 2025 © Copyright</p>
    </div>
  )
}

export default Footer