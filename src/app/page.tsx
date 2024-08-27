"use client";

import { Sun, Moon, LocationPin } from '@/components/Icon';
import Image from 'next/image';

import styles from './styles.module.css';
import { useEffect, useState } from 'react';


export default function Home() {
  const [dateState, setDateState] = useState(new Date());

  const t = new Date();
  const c = t.getHours() - 12;
  useEffect(() => {
    setInterval(() => {
      setDateState(new Date());
    }, 1000);
  }, []);

  const currentHour = dateState.getHours();

  return (
    <div className='flex flex-col'>
      <div className="flex flex-row px-4 md:px-24 gap-3 pt-20 sm:pt-12">
        <div className="flex flex-row justify-center items-center gap-1 py-2">
          {currentHour >= 6 && currentHour < 18 ? <Sun /> : <Moon />}
          <span className={`text-[#F6F6F6] text-xs ${styles.time}`}>
            {dateState.toLocaleString("en-GB", {
              timeZone: "Europe/London",
              hour: "numeric",
              minute: "numeric",
              hour12: true,
              timeZoneName: "short"
            }).toUpperCase()}
          </span>
        </div>
        <div className="flex flex-row justify-center items-center gap-1 py-2">
          <LocationPin />
          <span className={`text-[#F6F6F6] text-xs ${styles.location}`}>
            London, UK
          </span>
        </div>
      </div>
      <ShapeGradient />
      <div className="z-10 relative flex flex-col items-center justify-center max-w-xl mx-auto mt-[10%] gap-2 ">
        <Image className='' src="/images/dom-bw.png" alt="photo of Dom" width={48} height={48} />
        <h1 className="text-xl text-[#F6F6F6] ">Hi, I am Dom</h1>
        <p className='text-[#B6B1B6] text-center'>
          Over the past 8+ years, I have supercharged the growth of various start-ups by fostering a more user-centred approach, focusing my expertise on UX/UI, design systems, user research, and prototyping.
        </p>
      </div>
    </div>
  )
}

function ShapeGradient() {
  return (
    <div className="absolute w-full overflow-clip h-svh">
      <LightSource />
      <svg
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%)",
          zIndex: 2
        }}
        width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_168_246)">
          <path d="M2049.08 2076.67L1810.33 963.991C1778.28 814.641 1664.95 695.944 1517.11 656.904L657.09 429.791C510.574 391.1 354.682 437.141 252.787 549.198L-512.192 1390.47C-600.282 1487.34 -636.157 1620.73 -608.53 1748.66L-368.023 2862.36C-335.923 3011 -223.276 3129.21 -76.2322 3168.57L782.666 3398.46C929.895 3437.86 1086.82 3391.58 1189 3278.6L1953.35 2433.54C2040.8 2336.86 2076.42 2204.08 2049.08 2076.67Z" stroke="url(#paint0_linear_168_246)" strokeOpacity="0.16" />
          <path d="M2049.08 2076.67L1810.33 963.991C1778.28 814.641 1664.95 695.944 1517.11 656.904L657.09 429.791C510.574 391.1 354.682 437.141 252.787 549.198L-512.192 1390.47C-600.282 1487.34 -636.157 1620.73 -608.53 1748.66L-368.023 2862.36C-335.923 3011 -223.276 3129.21 -76.2322 3168.57L782.666 3398.46C929.895 3437.86 1086.82 3391.58 1189 3278.6L1953.35 2433.54C2040.8 2336.86 2076.42 2204.08 2049.08 2076.67Z" fill="url(#paint1_linear_168_246)" fillOpacity="0.4" />
        </g>
        <defs>
          <linearGradient id="paint0_linear_168_246" x1="-1287.43" y1="1375.33" x2="2727.13" y2="2452.22" gradientUnits="userSpaceOnUse">
            <stop stopColor="white" stopOpacity="0.5" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="paint1_linear_168_246" x1="495.5" y1="444.007" x2="448.604" y2="3133.02" gradientUnits="userSpaceOnUse">
            <stop stopColor="#090A0B" />
            <stop offset="1" stopColor="#090A0B" stopOpacity="0" />
          </linearGradient>
          <clipPath id="clip0_168_246">
            <rect width="1440" height="900" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <LightSourceFront />

    </div>
  )
}

function LightSource() {
  return (
    <div
      style={{
        width: "33%",
        height: "33%",
        position: "absolute",
        top: "-10%",
        left: "-10%",
        background: "#EAE7D6aa",
        filter: "blur(300px)",
        zIndex: 1
      }}
    />
  )
}

function LightSourceFront() {
  return (
    <div
      style={{
        width: "33%",
        height: "33%",
        position: "absolute",
        bottom: "-10%",
        right: "-10%",
        background: "#EAE7D655",
        filter: "blur(300px)",
        zIndex: 3
      }}
    />
  )
}
