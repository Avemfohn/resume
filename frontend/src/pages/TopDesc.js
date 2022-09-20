import useSWR from 'swr'
import React ,{useState} from 'react'
import toplogo from "./toplogo.svg";
const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Education() {
    const { data, error,isLoading } = useSWR(
      "/api/topintro/",
      fetcher
    ,{fallbackData:[]});
    const [currentIntro, setCurrentIntro] = useState(0);

    if (error) return "An error has occurred.";
    if (isLoading) return "Loading...";

    const getNextIntro = () => {
        if (currentIntro < data.length - 1) {
            setCurrentIntro(currentIntro + 1);
        } 
        else{
            setCurrentIntro(0);
        }
    }
    const getPreviousIntro = () => {
        if (currentIntro > 0) {
            setCurrentIntro(currentIntro - 1);
        } 
        else{
            setCurrentIntro(data.length - 1);
        }
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          } else {
            entry.target.classList.remove('show');
          }
        });
      });
    
    const hiddenElements = document.querySelectorAll(".hide");
    hiddenElements.forEach((el) => observer.observe(el));

    
  return(
    <div id="topdesc" class="grid overflow-hidden  md:grid-cols-2 grid-rows-1 gap-2 mx-auto items-center px-24 h-screen hide">
        <div>
            <img src={toplogo} alt="logo" class="w-64 h-64 md:w-96 md:h-96"/>
        </div>
        <div class="mb-7">
            <h4 class="text-black  w-full mb-3 font-mono text-4xl md:text-5xl">{data[currentIntro]?.title}</h4>
            <h4 class="text-black  w-full mb-5 font-mono text-lg">{data[currentIntro]?.text}</h4>
            <button class="btn text-primary border-dashed md:border-2 border-sky-300 text-zinc-600 focus-within:shadow-lg hover:-rotate-45 hover:border-solid duration-[2000ms] hover:bg-sky-400 mr-2" onClick={getPreviousIntro}>Previous</button>
            <button class="btn text-primary border-dashed md:border-2 border-sky-300 text-zinc-600 focus-within:shadow-lg hover:rotate-45 hover:border-solid duration-[2000ms] hover:bg-sky-400" onClick={getNextIntro}>Next</button>
        </div>
    </div>
  )
}