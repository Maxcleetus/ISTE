import React, { useContext } from 'react';
import heroImg from '../assets/gs.png';
import Atom from '../assets/atom.jpeg'
import { NavLink } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';
import Circle from '../components/Circle';


const Home = () => {

    const { details } = useAppContext()
    const limit = 8
    const navigate = useNavigate()

    return (
        <div>
            <section className="relative bg-black max-md:pt-5 px-6 md:px-12 lg:px-24 md:mt-5 rounded-2xl md:flex flex-col-reverse md:flex-row items-center justify-between gap-5">
                <div className="text-left max-w-2xl space-y-2 md:space-y-6 ">
                    <h1 className="text-3xl md:text-5xl font-bold text-[#9D9F9E] leading-tight">
                        Discover Your Next Great Event
                    </h1>


                    <div className=' block md:flex items-center'>
                        <ul className="text-left list-disc list-inside marker:text-[#9D9F9E] text-[#9D9F9E] text-[16px] md:text-lg space-y-2 max-md:py-2  md:space-y-1">
                            <li>Non-profit tech community shaping future innovators</li>
                            <li>Build skills. Gain points</li>
                            <li>Engaging events: competitions, workshops, and talksessions !</li>
                        </ul>
                        <NavLink to='/allbook' className='hidden md:block'>
                            <div className="pt-2 ">
                                <button className="bg-[#9D9F9E] hover:bg-[#9D9F9E]/50 text-white px-6 py-2 rounded-full shadow transition-all duration-200">
                                    Browse Events
                                </button>
                            </div>
                        </NavLink>
                    </div>

                    <p className="text-[16px] md:text-lg text-[#9D9F9E]">
                        Be a part of active Societies like Astro & Mechatronics
                    </p>

                    <NavLink to='/atom' className='flex md:hidden '>
                        <div className="pt-2 ">
                            <button className="bg-gray-700 hover:bg-gray-600 text-white text-[16px] px-3 py-1 md:px-6 md:py-2 rounded-full shadow transition-all duration-200">
                                Browse Events
                            </button>
                        </div>
                    </NavLink>
                </div>

                <div>
                    <img src={heroImg} alt="Books" className="block w-96 md:w-auto h-44 md:h-auto" />
                </div>
            </section>
            <section>
                <div className='flex flex-col items-center justify-center'>
                    <h1 className="md:text-3xl text-2xl pt-3 md:pt-6 pb-4 md:pb-6  text-center font-bold text-gray-800 leading-tight">Register Now</h1>
                    <div className='overflow-hidden rounded-lg w-[300px] h-[200px] md:w-[600px]'>
                        <img
                            className='w-full h-fit rounded-lg animate-floatY'
                            src={Atom}
                            alt=""
                        />
                    </div>
                    <p className=" md:text-[20px] pt-4  text-black/80   text-center max-w-[700px]">
                        "Atom is a dynamic technical event where innovation meets creativity, empowering students to explore, build, and showcase groundbreaking tech solutions."
                    </p>
                </div>
                <div>
                    <div className='flex scrollbar-hidden items-center justify-start md:justify-center overflow-x-scroll gap-6 py-4 md:py-6 md:mb-5'>
                        <div onClick={() => navigate(`/atom/workshop`)}><Circle category='Workshops' /></div>
                        <div onClick={() => navigate(`/atom/talksession`)}><Circle category='Talksession' /></div>
                        <div onClick={() => navigate(`/atom/competition`)}><Circle category='Competitions' /></div>
                        <div onClick={() => navigate(`/atom/culturals`)}><Circle category='Culturals' /></div>
                        <div onClick={() => navigate(`/atom/preevents`)}><Circle category='PreEvents' /></div>
                    </div>
                </div>
            </section>
            {/* <section>
        <div className='flex flex-col items-center justify-center'>
          <h1 className="md:text-3xl text-lg pt-3 md:pt-6 pb-2  text-center font-bold text-gray-800 leading-tight">Prime Reads</h1>
          <p className=" md:text-[16px]  text-gray-600 text-sm  text-center max-w-[700px]">
            Simply browse through our extensive list of trusted books.
          </p>
        </div>
        <div className='grid gap-4 py-4 md:py-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {details.map((item,index) => {
            for(let i = 0 ; i<limit ; i++){
              if(index < limit){
                return(
                    <div onClick={()=>navigate(`/singlebook/${item.id}`)} >
                      <Card name={item.name} image={item.image} />
                    </div>
                )
            } }
          })}
        </div>
        <div className='flex items-center justify-center'>
          <NavLink to='/allbook'>
            <button className='px-5 py-2 md:py-3 md:px-7 bg-[#035DCA]/50 text-white font-semibold rounded-2xl'>More</button>
          </NavLink>
        </div>
      </section> */}
        </div>

    );
};

export default Home;