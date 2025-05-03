import React from "react";
import BannerImg from "../../assets/deals.png";
import { IoMdCar } from "react-icons/io";
import { AiFillDollarCircle } from "react-icons/ai";
import { MdOutlineSupportAgent } from "react-icons/md";

const DelivaryTimeLine = [
  {
    id: 1,
    title: "Free Delivery",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt perspiciatis suscipit consequatur",
    icon: <IoMdCar className="mx-auto text-5xl text-red-500" />,
  },
  {
    id: 2,
    title: "100% Money Back Guaranty",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt perspiciatis suscipit consequatur",
    icon: <AiFillDollarCircle className="mx-auto text-5xl text-red-500" />,
  },
  {
    id: 3,
    title: "Strong Support",
    discription:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt perspiciatis suscipit consequatur",
    icon: <MdOutlineSupportAgent className="mx-auto text-5xl text-red-500" />,
  },
];

const Offer = () => {
  return (
    <div className="py-12">
      <div className="container mx-auto bg-[#f4e5ec] flex items-center">
        <div className="w-1/2">
          <img src={BannerImg} alt="" className="pt-8 mx-auto h-150" />
        </div>
        <div className="w-1/2 space-y-5 px-12">
          <p className="text-2xl text-red-600 font-semibold">
            Get up to 20% Discount
          </p>
          <h2 className="text-5xl font-bold">Deals Of this month</h2>
          <p className="text-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt,
            perspiciatis suscipit consequatur dolore vel, explicabo temporibus
            ipsum, eum nobis exercitationem non a quos? Eos reiciendis ab ea,
            quam distinctio veritatis voluptatum, reprehenderit consectetur
            ipsum saepe, labore earum iure soluta similique!
          </p>
          <div className="flex gap-5">
            <div className="p-5 rounded-full bg-white flex-col w-[95px] text-center shadow-md text-xl font-bold">
              <h2>14</h2>
              <p>Days</p>
            </div>
            <div className="p-5 rounded-full bg-white flex-col w-fit text-center shadow-md text-xl font-bold">
              <h2>20</h2>
              <p>Hours</p>
            </div>
            <div className="p-5 rounded-full bg-white flex-col w-[95px] text-center shadow-md text-xl font-bold">
              <h2>15</h2>
              <p>mins</p>
            </div>
            <div className="p-5 rounded-full bg-white flex-col w-[95px] text-center shadow-md text-xl font-bold">
              <h2>5</h2>
              <p>sece</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex container mx-auto items-center py-15 gap-20">
        {
        DelivaryTimeLine.map((timeline, id) => (
            <div key={timeline.id} className="text-center space-y-5">
                <p>{timeline.icon}</p>
                <h2 className="text-3xl font-bold">{timeline.title}</h2>
                <p className="text-xl">{timeline.discription}</p>
            </div>
        ))
        }
        </div>
    </div>
  );
};

export default Offer;
