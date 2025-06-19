'use client'

import FavoritesContainer from '@/components/FavoritesContainer'
import Navbar from '@/components/Navbar'


export const Favorite = () => {
  return (
    <div style={{
        backgroundImage: "url('/assets/cine.jpg')",
      }}
      className="bg-black min-h-screen bg-cover bg-center md:bg-no-repeat pt-24 md:pt-15 flex items-center justify-center md:pb-0"
      >
    <Navbar />
    <FavoritesContainer />
    </div>
  )
}

export default Favorite