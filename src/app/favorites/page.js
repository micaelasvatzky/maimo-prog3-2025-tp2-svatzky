'use client'

import FavoritesContainer from '@/components/FavoritesContainer'
import Navbar from '@/components/Navbar'


export const Favorite = () => {
  return (
    <div style={{
        backgroundImage: "url('/assets/cine.jpg')",
      }}
      className="min-h-screen bg-cover bg-center bg-no-repeat pt-15 flex items-center justify-center "
      >
    <Navbar />
    <FavoritesContainer />
    </div>
  )
}

export default Favorite