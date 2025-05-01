'use client';

import { DatePicker } from 'antd';

// 日期卡片元件
function CalenderPage123({ year, month, day, weekDay }) {
  return (
    <div className="relative bg-white rounded-2xl flex items-center justify-center flex-col text-[#4C37AC] p-6 shadow-md w-[320px] h-[480px]">
      <div className="flex justify-between w-full mb-4">
        <div>{year}</div>
        <div>乙巳年［蛇］四月初四</div>
        <div>{month}</div>
      </div>
      <div className="text-[240px] font-extrabold leading-none">{day}</div>
      <div className="text-[68px] mt-2">{weekDay}</div>
    </div>
  );
}

export default function CustomDateCard() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("你選的是：" + dateString);
  };

  // 模擬的一週資料
  const days = [
    { year: '2025', month: '五月', day: '01', weekDay: '星期四' },
    { year: '2025', month: '五月', day: '02', weekDay: '星期五' },
    { year: '2025', month: '五月', day: '03', weekDay: '星期六' },
    { year: '2025', month: '五月', day: '04', weekDay: '星期日' },
    { year: '2025', month: '五月', day: '05', weekDay: '星期一' },
    { year: '2025', month: '五月', day: '06', weekDay: '星期二' },
    { year: '2025', month: '五月', day: '07', weekDay: '星期三' }
  ];

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center gap-5 overflow-auto p-4">
      {/* DatePicker 可開啟 */}
      {/* <DatePicker onChange={onChange} needConfirm /> */}

      {days.map((item, index) => (
        <CalenderPage123
          key={`cal-${index}`}
          year={item.year}
          month={item.month}
          day={item.day}
          weekDay={item.weekDay}
        />
      ))}
    </div>
  );
}



