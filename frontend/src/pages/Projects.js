import useSWR from 'swr'
import React from 'react'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Projects() {
  const { data, error } = useSWR(
    "/api/projectfield/",
    fetcher
  );

  if (error) return "An error has occurred.";
  if (!data) return "Loading...";
  
    const result = data.reduce(function (r, a) {
        r[a.type] = r[a.type] || [];
        r[a.type].push(a);
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
  

  return (
    <div id="projects" class="grid overflow-hidden md:grid-cols-1 mx-auto px-24 items-center h-full hide">
          <h2 class="w-full font-mono text-7xl mb-12">Projects</h2>
          {Object.keys(result).map((key) => (

            <div class="w-full mb-5 font-mono text-5xl text-gray-600 group">
                <h3 class="mb-3">{key}</h3>
                <div class="box-content h-full w-64 p-4 border-8  hover:border-l-stone-400 hover:border-b-stone-300 ease-linear duration-1000 
                hover:drop-shadow-xl hover:w-80 hover:bg-gradient-to-r from-blue-300 mt-3">
                {result[key].map((item) => (
                    <div class="w-64 mb-5 font-mono text-4xl text-red-600 ">
                        <h4>{item.name}</h4>
                    </div>
                ))}
                {result[key].map((item) => (
                    <div class="group-hover:drop-shadow-xl ">
                        <img src={item.image}  class="group-hover:w-96" alt={item.name}></img>
                    </div>
                ))}
                </div>
            </div>
            ))}
    </div>
  );
}
