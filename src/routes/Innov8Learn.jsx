import React,{useEffect, useState}  from 'react'
import Courses from '../components/courses/Courses'
import IlHero from '../components/ilHero/IlHero'
import Searchbar from '../components/searchbar/Searchbar'
import {FiChevronDown} from 'react-icons/fi'
import {BiChevronDown, BiSearch} from 'react-icons/bi'
import {GrStatusGood} from 'react-icons/gr'
import { Link } from 'react-router-dom'
import { queries } from '@testing-library/react'
import axios from 'axios'
import courses from '../courses.json'  
import {useParams} from "react-router-dom";
import { Menu } from '@headlessui/react'

function Innov8Learn() {
  const {id} = useParams();
  const records = courses.courses
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("");
 return (
    <div className=''>
        <IlHero/>
        <div className="wrapper mx-[10vw] mt-5">
          <form action="" className='text-center relative border border-emerald-900 rounded-lg'>
            <BiSearch className='absolute top-1/2 -translate-y-1/2 ml-4'></BiSearch>
            <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='search available courses' className=' text-center rounded-lg p-2 px-4 placeholder:text-center placeholder:text-sm hover:outline-none focus:outline-none' />
          </form>
          <main className='flex flex-col lg:flex-row gap-0 lg:gap-10 w-full mt-5'>
            <aside className='bg-innov8Yellow flex flex-col justify-center p-3 rounded-xl md:justify-start'>
            <div className="men-md lg:hidden">
            <Menu>
              <Menu.Button className={'flex flex-col items-center w-full'}><span className=' text-center flex flex-row'>Categories <BiChevronDown/></span> </Menu.Button>
              <Menu.Items className='flex flex-col'>
                {records.map(course=>{
                  return(
                    <Menu.Item >
                      {({ active }) => (
                      <p
                        onClick={()=>{cat==course.cat?setCat(""):setCat(course.cat)}}
                        className={`flex flex-row items-center w-full justify-between  cursor-pointer capitalize rounded-lg p-4 ${active && 'bg-blue-500'}`}
                        
                      >
                        {course.cat}
                        <div className={`active ${cat == course.cat?"block":"hidden"}`}>
                        <GrStatusGood/></div>
                      </p>
                  )}
                </Menu.Item>
                  )
                })}
              </Menu.Items>
            </Menu>
            </div> 
           
            <div className="men hidden lg:block pt-9">
              <p className='pl-4 font-bold'>
                Categories
              </p>
            <ul>
            {records.map(course=>{
              return(
                <div className='flex w-full justify-between items-center'>
                  <li onClick={()=>{cat==course.cat?setCat(""):setCat(course.cat)}} className='capitalize p-4 cursor-pointer'>{course.cat}</li>
                  <div className={`active ${cat == course.cat?"opacity-1":"opacity-0"}`}>
                  <GrStatusGood/></div>
                </div>
              )
              }
              )
            }
            </ul>
            </div>
            </aside>
            <section className=' flex-1 mt-4 lg:flex-grow flex flex-col gap-10'>
           
              {records.filter(course=>course.title.toLowerCase().includes(query.toLocaleLowerCase())).filter(course=>course.cat.toLowerCase().includes(cat.toLocaleLowerCase())).map((record,index) => {
                console.log(id)
                console.log({cat})
                    return (
                      <Link to={'./' + record.code}>
                      <div className="w-fit lg:w-full bg-innov8LightGreen rounded-xl p-9 text-left ">
                      <header className='text-left mb-4'>
                      <h1 className='text-left text-lg font-semibold mb-2'>
                      {record.title}
                      </h1>
                      <p className='text-left text-sm lg:w-1/2'>
                        {window.innerWidth <= 800 ? record.desc.substring(0,80) : record.desc}
                        <span className=' md:hidden lg:hidden text-innov8Organge text-[.7rem]'>{`... Read More>>`}</span>
                      </p>
                      </header>
                      <div className="mods text-xs">
                        <p>
                          Modules<span> </span>
                          {record.format[0].modules}
                          <span> | </span>
                          Lessons<span> </span>
                          {record.format[0].lessons}
                        </p>
                      </div>
                    </div>
                    </Link>
                    );
              })}
            </section>
          </main>
          
        </div>
    </div>
  )
}

export default Innov8Learn