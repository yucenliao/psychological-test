'use client';

import { DatePicker } from 'antd';
import CalenderPage12 from '@/component/CalenderPage'
 
export default function CustomDateCard({year, month, day, weekDay}) {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center gap-5">
      {/* <DatePicker onChange={onChange} needConfirm /> */}

      {/* 卡片一 */}
      <div className="relative bg-white rounded-2xl flex items-center justify-center flex-col text-[#4C37AC] p-6 shadow-md">
        <div className="flex justify-between w-full mb-4">
          <div className="">2025</div>
          <div className="">乙巳年［蛇］四月初四</div>
          <div className="">五月</div>
        </div>
        <div className="text-[240px] font-extrabold leading-none">01</div>
        <div className="text-[68px] mt-2">星期一</div>
      </div>

    </div>
    );
}
