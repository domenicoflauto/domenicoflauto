import Image from 'next/image';
import { SocialIcons } from '@/components/socialIcons';

import './intro.css';

export function Intro() {
    return (
        <div className="intro">
            <h1 className="title">
                <WrappedText>
                    Hi, I am&nbsp;<Image className='profile-picture' src="/images/dom-bw.png" alt="Dom's Profile picture" width={32} height={32} />
                </WrappedText>
                &nbsp;<i>Dom</i></h1>
            <p>
                <WrappedText>
                    I am a product designer made in&nbsp;
                    <Image src="/images/flag-it.svg" alt="Flag of Italy" width={18} height={14} />Italy,&nbsp;
                </WrappedText>
                <WrappedText>
                    based&nbsp;in
                    <Image src="/images/flag-gb.svg" alt="Flag of the United Kingdom" width={18} height={14} />London,&nbsp;UK.
                </WrappedText>
            </p>
            <p>
                In the last 8+ years, I have helped start-ups growing and becoming more user-centred, while putting my heart in UX/UI, design systems, user research and prototyping.
            </p>
            <p>
                Do you have an exciting project, work collaboration or idea you want to chat about?&nbsp;
                <WrappedText>I am currently
                    <Dot />
                    <strong>
                        open to new opportunities!
                    </strong>
                </WrappedText>
                <br />
                Drop me an email at <strong>hello@domenicoflauto.com</strong>
            </p>
            <SocialIcons />
            <Blob1 />
        </div>
    )
}

function Dot() {
    return (
        <span className="dot" />
    );
}

// function Blob() {
//     return (
//         <Image className="blob" src="/images/blob.svg" height={418} width={467} alt="" />
//     )
// }

function Blob1() {
    return (
        <svg className="blob" xmlns="http://www.w3.org/2000/svg" width="163" height="203" viewBox="0 0 163 203" fill="none">
            <g clipPath="url(#clip0_442_41474)">
                <g opacity="0.4">
                    <g filter="url(#filter0_f_442_41474)">
                        <path d="M123.949 132.813C118.235 139.293 111.634 139.888 103.695 141.033C91.4712 142.797 76.0604 137.93 79.4975 124.629C82.6313 112.502 99.8202 124.936 107.224 115.212C109.859 111.752 108.95 107.652 112.314 105.108C116.559 101.899 120.943 102.518 125.146 105.363C129.476 108.294 131.337 112.517 131.026 118.287C130.691 124.5 127.945 128.283 123.949 132.813Z" fill="#FFDE9E" />
                    </g>
                    <g filter="url(#filter1_f_442_41474)">
                        <path d="M73.5055 97.0523C69.5031 84.3521 80.2719 72.2161 70.1635 63.5963C68.0962 61.8335 66.7839 60.9498 64.3429 59.913C50.1194 53.8718 46.1003 77.9667 46.6414 93.5182C46.9256 101.684 48.3752 106.217 51.3855 114.013C54.0891 121.014 55.4327 126.063 60.195 131.887C64.0859 136.646 67.2287 139.853 72.9172 141.286C78.0719 142.585 82.2466 142.502 85.8232 138.885C89.6172 135.048 90.6317 131.346 90.3116 125.581C89.6528 113.719 77.1403 108.586 73.5055 97.0523Z" fill="#CCEFE9" />
                    </g>
                    <g filter="url(#filter2_f_442_41474)">
                        <ellipse cx="30.5144" cy="31.9514" rx="30.5144" ry="31.9514" transform="matrix(-0.845018 -0.534737 0.466047 -0.88476 102.352 136.027)" fill="#89CFC2" />
                    </g>
                </g>
            </g>
            <defs>
                <filter id="filter0_f_442_41474" x="50.277" y="74.2213" width="109.514" height="95.8913" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="14.3659" result="effect1_foregroundBlur_442_41474" />
                </filter>
                <filter id="filter1_f_442_41474" x="4.23074" y="16.5969" width="128.5" height="167.818" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="21.182" result="effect1_foregroundBlur_442_41474" />
                </filter>
                <filter id="filter2_f_442_41474" x="6.38683" y="3.50597" width="170.14" height="175.869" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                    <feGaussianBlur stdDeviation="27.6445" result="effect1_foregroundBlur_442_41474" />
                </filter>
                <clipPath id="clip0_442_41474">
                    <rect width="163" height="201.701" fill="white" transform="translate(0 0.962891)" />
                </clipPath>
            </defs>
        </svg>
    )
}

function WrappedText({ children }: { children: React.ReactNode }) {
    return (
        <span className="wrapped-text">
            {children}
        </span>
    )
}