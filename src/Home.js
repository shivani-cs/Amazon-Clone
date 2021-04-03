import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className="home__container">
        <img 
          className="home__image" 
          src="https://images-na.ssl-images-amazon.com/images/G/01/prime/2021_GTM/US2021D1155_GW_DesktopHero_1500x600_EN._CB659228198_.jpg" 
          // src = "https://m.media-amazon.com/images/S/atv-aps-images/encoded/MAPT_AOM/AU.BV.CA.GB.IE.NZ.US/en_US/COVER_ART/MarkMargaretStreet._RI_V0_TTW_AC_SL792_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product 
            id = "4903850"
            title='AUKEY True Wireless Earbuds, Bluetooth 5 Headphones with Wireless Charging Case, in-Ear Detection, 30H Playtime, Water Resistance' 
            price={29.99}
            image= 'https://m.media-amazon.com/images/I/31MlF-95RkL._AC_SR320,320_.jpg'
            rating={5}
          />
          <Product 
            id = "4903851"
            title='Casa Andrea Milano LLC 3 Piece Modern Tufted Micro Suede L Shaped Sectional Sofa Couch with Reversible Chaise & Ottoman, Ash' 
            price={159.99}
            image= 'https://images-na.ssl-images-amazon.com/images/I/31QSGAJ3DHL.jpg'
            rating={4}
          />
          <Product 
            id = "4903852"
            title='Teraves Reversible L Shaped Desk with Shelves Round Corner Computer Desk Gaming Table Workstation for Home Office' 
            price={129.99}
            image= 'https://m.media-amazon.com/images/I/611ginU9AGL._AC_UL480_FMwebp_QL65_.jpg'
            rating={4}
          />
        </div>
        
        <div className="home__row">
          <Product 
            id = "4903853"
            title='Office Chair Ergonomic Mid Back Swivel Chair Height Adjustable Lumbar Support Computer Desk Chair with Armrest (Grey and White)' 
            price={94.99}
            image= 'https://m.media-amazon.com/images/I/51JLzav09SL._AC_UL480_FMwebp_QL65_.jpg'
            rating={4}
          />
          <Product 
            id = "4903854"
            title='IWELL Mid-Century Nightstand Set of 2, End Table with Drawer, Wood Bedside Table Side Table for Bedroom, Rustic Brown' 
            price={92.99}
            image= 'https://m.media-amazon.com/images/I/51jjJ2tjwhL._AC_UL480_FMwebp_QL65_.jpg'
            rating={4}
          />
          <Product 
            id = "4903855"
            title='Echo Glow - Multicolor smart lamp for kids, a Certified for Humans Device – Requires compatible Alexa device' 
            price={29.99}
            image= 'https://m.media-amazon.com/images/I/41duhvR5AXL._AC_UL480_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
        
        <div className="home__row">
          <Product 
            id = "4903856"
            title='Best Choice Products 6-Piece 55in Wooden Modern Dining Set for Home, Kitchen, Dining Room w/Storage Racks, Rectangular Table, Bench, 4 Chairs, Steel Frame - Brown' 
            price={309.99}
            image= 'https://m.media-amazon.com/images/I/71NaAtwN+AL._AC_SL278_QL70_.jpg'
            rating={3}
          />
          <Product 
            id = "4903857"
            title='Rolanstar Bookshelf Bookcase with Drawer, Free Standing Tree Bookcase, Display Floor Standing Storage Shelf for Books CDs Plants,Utility Organizer Shelves for Living Room, Bedroom, Home Office' 
            price={109.99}
            image= 'https://m.media-amazon.com/images/I/71744CqKS4L._AC_UL480_FMwebp_QL65_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
