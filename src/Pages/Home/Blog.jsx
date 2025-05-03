import React from 'react';
import BlogImg from "../../assets/Blog.jpeg";

const Bloglist = [
  {
    id: 1,
    title: "Timeless Elegonce",
    discription: "Lorem ipsum dolor sit amet consectetur ",
    img: BlogImg,
    date: "12 may 2025",
  },
  {
    id: 2,
    title: "Timeless Elegonce",
    discription: "Lorem ipsum dolor sit amet consectetur ",
    img: BlogImg,
    date: "12 may 2025",
  },
  {
    id: 3,
    title: "Timeless Elegonce",
    discription: "Lorem ipsum dolor sit amet consectetur ",
    img: BlogImg,
    date: "12 may 2025",
  },
  {
    id: 4,
    title: "Timeless Elegonce",
    discription: "Lorem ipsum dolor sit amet consectetur .",
    img: BlogImg,
    date: "12 may 2025",
  },
];



const Blog = () => {
  return (
    <div className=" bg-gray-200/45 py-10">
      <div className=" text-center md:w-xl mx-auto space-y-3">
        <h2 className="text-4xl font-bold ">Latest From Blog</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sequi,
          unde nobis quibusdam quidem non similique pariatur! Eveniet?
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 container mx-auto gap-7 pt-10 ">
        {Bloglist.map((blog, id) => (
          <div key={blog.id}>
            <div className="shadow-md text-center">
              <img src={blog.img} alt="" />
              <div className="p-3 space-y-3">
                <h2 className="text-xl font-semibold text-red-500">
                  {blog.title}
                </h2>
                <p className="text-2xl font-bold">{blog.discription}</p>
                <p className="font-bold">{blog.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog