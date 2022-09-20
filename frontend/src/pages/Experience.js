import useSWR from 'swr'
import React from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Experience() {
    const { data, error } = useSWR(
      "/api/experience/",
      fetcher
    );
  
    if (error) return "An error has occurred.";
    if (!data) return "Loading...";
  
    const result = data.reduce(function (r, a) {
        r[a.id] = r[a.id] || [];
        r[a.id].push(a);
        return r;
    }, Object.create(null));

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

    //test
    return (
      <div class="">
            <h2 class="w-full mb-5 font-mono text-5xl text-sky-500 mt-5 md:mt-0">Experience</h2>

            {Object.keys(result).map((key) => (

                <div>
                    {result[key].map((item) => (
                        <div class="text-black  w-full mb-1 font-mono font-bold text-2xl">
                            <h4>{item.company}</h4>
                        </div>
                    ))}
                     {result[key].map((item) => (
                        <div class ="text-gray-500 w-full font-mono  text-2xl">
                            <h4>{item.title}</h4>
                        </div>
                    ))}
                     {result[key].map((item) => (
                        <div class ="text-gray-400 w-full mb-1 font-mono  text-xl">
                            <h4>{item.starting_date} - {item.ending_date}</h4>
                        </div>
                    ))}
                    {result[key].map((item) => (
                        <div class="text-stone-700  w-full font-mono text-lg mb-12">
                            <h4>{item.description}</h4>
                        </div>
                    ))}
                </div>
            ))}
           
      </div>
    );
  }