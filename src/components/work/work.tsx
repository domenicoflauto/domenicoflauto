"use client";

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

import { DuffelLogo, EigenLogo } from '.';
import staysPreview from "public/images/work/stays-1.png"
import mssPreview from "public/images/work/multi-step-search-1.png"
import modelEvalPreview from "public/images/work/model-evaluation-1.png"
import correlatedAnswerPreview from "public/images/work/correlated-answers-1.png"
import blogPostPreview from "public/images/articles/modern-flight-booking.png"
import patentPreview from "public/images/patents/training.png"

import './work.css';



const IconArrow = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <mask id="mask0_443_41748" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_443_41748)">
        <path d="M5.0625 15.5L4 14.4375L12.4375 6H5V4.5H15V14.5H13.5V7.0625L5.0625 15.5Z" fill="#B2B5BD" />
      </g>
    </svg>
  )
}

const IconBook = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <mask id="mask0_477_41785" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_477_41785)">
        <path d="M10 17.5C9.33333 17.0556 8.62015 16.6944 7.86046 16.4167C7.10078 16.1389 6.31396 16 5.5 16C4.97222 16 4.44444 16.0521 3.91667 16.1562C3.38889 16.2604 2.88194 16.4167 2.39583 16.625C2.0625 16.7639 1.74653 16.7394 1.44792 16.5514C1.14931 16.3635 1 16.0894 1 15.7292V5.25C1 5.05556 1.05208 4.875 1.15625 4.70833C1.26042 4.54167 1.40278 4.41667 1.58333 4.33333C2.18996 4.05556 2.82296 3.84722 3.48233 3.70833C4.14169 3.56944 4.81425 3.5 5.5 3.5C6.29603 3.5 7.0749 3.59375 7.8366 3.78125C8.59831 3.96875 9.31944 4.25 10 4.625V15.75C10.7083 15.375 11.4375 15.0729 12.1875 14.8438C12.9375 14.6146 13.7083 14.5 14.5 14.5C15.019 14.5 15.5273 14.5451 16.0247 14.6354C16.5221 14.7257 17.0139 14.8472 17.5 15V4C17.6528 4.05556 17.8064 4.10746 17.961 4.15571C18.1156 4.20394 18.2674 4.26315 18.4167 4.33333C18.5972 4.43056 18.7396 4.55903 18.8438 4.71875C18.9479 4.87847 19 5.05556 19 5.25V15.7292C19 16.0764 18.8507 16.3472 18.5521 16.5417C18.2535 16.7361 17.9375 16.7639 17.6042 16.625C17.1042 16.4306 16.5938 16.2778 16.0729 16.1667C15.5521 16.0556 15.0278 16 14.5 16C13.686 16 12.8992 16.1389 12.1395 16.4167C11.3798 16.6944 10.6667 17.0556 10 17.5ZM11.5 13.5V5.5L16 1.5V9.5L11.5 13.5ZM8.5 14.9167V5.72917C8.02778 5.46528 7.53125 5.27778 7.01042 5.16667C6.48958 5.05556 5.95833 5 5.41667 5C4.91667 5 4.42125 5.05445 3.93042 5.16333C3.43958 5.27222 2.96278 5.43556 2.5 5.65333V14.9167C2.97222 14.7639 3.45486 14.6562 3.94792 14.5938C4.44097 14.5312 4.93056 14.5 5.41667 14.5C5.95 14.5 6.47222 14.5312 6.98333 14.5938C7.49444 14.6562 8 14.7639 8.5 14.9167Z" fill="#0C266E" />
      </g>
    </svg>
  )
}

const IconEnvelope = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <mask id="mask0_477_41852" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_477_41852)">
        <path d="M10 11.5L3.5 7.77083V15H11.5V16.5H3.5C3.0875 16.5 2.73438 16.353 2.44063 16.0591C2.14688 15.7652 2 15.4119 2 14.9992V5.9941C2 5.58137 2.14688 5.22917 2.44063 4.9375C2.73438 4.64583 3.0875 4.5 3.5 4.5H16.5C16.9125 4.5 17.2656 4.64688 17.5594 4.94063C17.8531 5.23438 18 5.5875 18 6V11.5H16.5V7.77083L10 11.5ZM10 9.72917L16.5 6H3.5L10 9.72917ZM16 18.75L14.9375 17.6875L16.125 16.5H13V15H16.125L14.9375 13.8125L16 12.75L19 15.75L16 18.75ZM3.5 7.77083V15.7083V6V7.77083Z" fill="#0C266E" />
      </g>
    </svg>
  )
}

const IconBook2 = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <mask id="mask0_477_41888" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_477_41888)">
        <path d="M11.75 8.45833V6.875C12.1806 6.73611 12.625 6.63542 13.0833 6.57292C13.5417 6.51042 14.0139 6.47917 14.5 6.47917C14.8194 6.47917 15.1424 6.49653 15.4688 6.53125C15.7951 6.56597 16.1389 6.61806 16.5 6.6875V8.22917C16.0833 8.13194 15.7153 8.0625 15.3958 8.02083C15.0764 7.97917 14.7778 7.95833 14.5 7.95833C14.0278 7.95833 13.5625 8 13.1042 8.08333C12.6458 8.16667 12.1944 8.29167 11.75 8.45833ZM11.75 13.375V11.7917C12.1389 11.6667 12.5556 11.566 13 11.4896C13.4444 11.4132 13.9444 11.375 14.5 11.375C14.875 11.375 15.2257 11.3958 15.5521 11.4375C15.8785 11.4792 16.1944 11.5347 16.5 11.6042V13.1458C16.0833 13.0486 15.7153 12.9792 15.3958 12.9375C15.0764 12.8958 14.7778 12.875 14.5 12.875C14.0278 12.875 13.5625 12.9167 13.1042 13C12.6458 13.0833 12.1944 13.2083 11.75 13.375ZM11.75 10.9167V9.33333C12.1944 9.19444 12.6493 9.09028 13.1146 9.02083C13.5799 8.95139 14.0417 8.91667 14.5 8.91667C14.875 8.91667 15.2257 8.9375 15.5521 8.97917C15.8785 9.02083 16.1944 9.07639 16.5 9.14583V10.6875C16.1389 10.5903 15.7951 10.5208 15.4688 10.4792C15.1424 10.4375 14.8194 10.4167 14.5 10.4167C14.0556 10.4167 13.6076 10.4583 13.1562 10.5417C12.7049 10.625 12.2361 10.75 11.75 10.9167ZM5.5 14.5C6.15278 14.5 6.79167 14.5833 7.41667 14.75C8.04167 14.9167 8.65278 15.125 9.25 15.375V5.91667C8.66667 5.61111 8.0625 5.38194 7.4375 5.22917C6.8125 5.07639 6.16667 5 5.5 5C4.98611 5 4.47569 5.04514 3.96875 5.13542C3.46181 5.22569 2.97222 5.375 2.5 5.58333V15C2.98611 14.8194 3.47917 14.691 3.97917 14.6146C4.47917 14.5382 4.98611 14.5 5.5 14.5ZM10.75 15.375C11.3472 15.0972 11.9583 14.8819 12.5833 14.7292C13.2083 14.5764 13.8472 14.5 14.5 14.5C15.0139 14.5 15.5243 14.5312 16.0312 14.5938C16.5382 14.6562 17.0278 14.7917 17.5 15V5.58333C17.0139 5.40278 16.5208 5.26042 16.0208 5.15625C15.5208 5.05208 15.0139 5 14.5 5C13.8333 5 13.1875 5.07639 12.5625 5.22917C11.9375 5.38194 11.3333 5.61111 10.75 5.91667V15.375ZM10 17.5C9.31944 17.0556 8.60417 16.6944 7.85417 16.4167C7.10417 16.1389 6.31944 16 5.5 16C4.97222 16 4.44444 16.0521 3.91667 16.1562C3.38889 16.2604 2.88194 16.4167 2.39583 16.625C2.0625 16.7639 1.74653 16.7396 1.44792 16.5521C1.14931 16.3646 1 16.0903 1 15.7292V5.25C1 5.05556 1.05208 4.875 1.15625 4.70833C1.26042 4.54167 1.40278 4.41667 1.58333 4.33333C2.20833 4.05556 2.84722 3.84722 3.5 3.70833C4.15278 3.56944 4.81944 3.5 5.5 3.5C6.29167 3.5 7.06597 3.59375 7.82292 3.78125C8.57986 3.96875 9.30556 4.25 10 4.625C10.7083 4.26389 11.4375 3.98611 12.1875 3.79167C12.9375 3.59722 13.7083 3.5 14.5 3.5C15.1806 3.5 15.8472 3.56944 16.5 3.70833C17.1528 3.84722 17.7917 4.05556 18.4167 4.33333C18.5972 4.41667 18.7431 4.54167 18.8542 4.70833C18.9653 4.875 19.0208 5.05556 19.0208 5.25V15.7292C19.0208 16.0764 18.9132 16.3542 18.6979 16.5625C18.4826 16.7708 18.2569 16.8194 18.0208 16.7083C17.4653 16.4583 16.8924 16.2778 16.3021 16.1667C15.7118 16.0556 15.1111 16 14.5 16C13.6806 16 12.8958 16.1389 12.1458 16.4167C11.3958 16.6944 10.6806 17.0556 10 17.5Z" fill="#0C266E" />
      </g>
    </svg>
  )
}

const IconBrain = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
      <mask id="mask0_477_41828" style={{ maskType: "alpha" }} maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="21">
        <rect y="0.5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_477_41828)">
        <path d="M10.25 13.4792C11.2083 13.4792 12.0312 13.1667 12.7188 12.5417C13.4062 11.9167 13.75 11.1671 13.75 10.2929C13.75 9.51429 13.4965 8.85069 12.9896 8.30208C12.4826 7.75347 11.8747 7.47917 11.1656 7.47917C10.5248 7.47917 9.98283 7.6875 9.53969 8.10417C9.09656 8.52083 8.875 9.02083 8.875 9.60417C8.875 9.88194 8.92528 10.1385 9.02585 10.3738C9.12644 10.6091 9.2706 10.8248 9.45833 11.0208L10.5208 9.95833C10.4722 9.91667 10.4358 9.86458 10.4115 9.80208C10.3872 9.73958 10.375 9.67685 10.375 9.6139C10.375 9.44074 10.4514 9.29167 10.6042 9.16667C10.7569 9.04167 10.9444 8.97917 11.1667 8.97917C11.4583 8.97917 11.7118 9.10807 11.9271 9.36588C12.1424 9.62369 12.25 9.93229 12.25 10.2917C12.25 10.75 12.0521 11.1458 11.6562 11.4792C11.2604 11.8125 10.7933 11.9792 10.255 11.9792C9.5711 11.9792 8.98264 11.691 8.48958 11.1146C7.99653 10.5382 7.75 9.85417 7.75 9.0625C7.75 8.63517 7.82986 8.22625 7.98958 7.83575C8.14931 7.44525 8.38194 7.09722 8.6875 6.79167L7.625 5.75C7.18056 6.19444 6.84028 6.70139 6.60417 7.27083C6.36806 7.84028 6.25 8.4375 6.25 9.0625C6.25 10.2847 6.63889 11.3264 7.41667 12.1875C8.19444 13.0486 9.13889 13.4792 10.25 13.4792ZM5.5 18.5V14.8542C4.70833 14.1875 4.09375 13.3849 3.65625 12.4465C3.21875 11.508 3 10.5189 3 9.47917C3 7.54051 3.68258 5.89265 5.04775 4.53558C6.4129 3.17853 8.0706 2.5 10.0208 2.5C11.5347 2.5 12.8958 2.90625 14.1042 3.71875C15.3125 4.53125 16.1111 5.59028 16.5 6.89583L17.875 11.5417C17.9444 11.7844 17.9063 12.0049 17.7604 12.2029C17.6146 12.401 17.4167 12.5 17.1667 12.5H16V15C16 15.4125 15.8531 15.7656 15.5594 16.0594C15.2656 16.3531 14.9125 16.5 14.5 16.5H12.5V18.5H11V15H14.5V11H16.1667L15.0833 7.39583C14.7778 6.39583 14.1562 5.57986 13.2188 4.94792C12.2812 4.31597 11.2153 4 10.0208 4C8.47917 4 7.17361 4.53215 6.10417 5.59646C5.03472 6.66075 4.5 7.95499 4.5 9.47917C4.5 10.2976 4.67361 11.0752 5.02083 11.8118C5.36806 12.5484 5.85417 13.1806 6.47917 13.7083L7 14.1667V18.5H5.5Z" fill="#0C266E" />
      </g>
    </svg>
  )
}



const ItemLink = ({ url, teaser }: { url?: string, teaser?: number }) => {
  const Teasers = [
    <span key="teaser1" className='item-link'><IconBook />Curious about the project details? Feel free to request a project walkthrough!</span>,
    <span key="teaser2" className='item-link'><IconEnvelope />Intrigued? You&apos;re just one message away from the complete story!</span>,
    <span key="teaser3" className='item-link'><IconBook2 />Hungry for more details? I&apos;ve got a full menu ready!</span>,
    <span key="teaser4" className='item-link'><IconBrain />Know what I am talking about? Let&apos;s talk about it over coffee!</span>,
  ]

  if (url) {
    return (
      <a className='item-link' target="e" href={url}>Read the article <IconArrow /></a>
    )
  } else if (teaser) {
    return (
      Teasers[teaser - 1]
    )
  } else return null;
}


const WORK = [
  {
    title: "Stays: Exploring Uncharted Territory in the <i>Accommodation</i> Industry.",
    description: `
      I designed and launched the first version of Stays, a fresh vertical 
      for selling accommodations on Duffel. This project provided me with 
      a great opportunity to build a new product from scratch - from initial 
      research to final delivery.
    `,
    callToAction: <ItemLink teaser={1} />,
    image: staysPreview,
    logo: "duffel",
    id: "stays",
  },
  {
    title: "Streamlining <i>Flight Booking</i> Experience.",
    description: `
      Reducing clicks and steps doesn't always mean providing a better user experience. 
      In this project, I enhanced Duffel's prime booking flow by introducing 
      a new multi-step search, facilitating users to more easily find 
      the flight and fare they are seeking.
      `,
    callToAction: <ItemLink teaser={2} />,
    image: mssPreview,
    logo: "duffel",
    id: "mss",
  },
  {
    title: "Assisting Users in <i>Evaluating</i> and <i>Understanding</i> Machine Learning Models.",
    description: `
      Explaining machine learning performance can be challenging. With 
      this project, I supported users in understanding model evaluation 
      techniques, thereby fostering trust in the results and reducing 
      the time and effort required to build high-quality ML models for their use cases.
      `,
    callToAction: <ItemLink teaser={3} />,
    image: modelEvalPreview,
    logo: "eigen",
    id: "model-evaluation",
  },
  {
    title: "Enabling Analysts to Discover <i>Correlations</i> in Complex Documents.",
    description: `
    This internal feature aids our R&D team in gathering more in-depth annotations 
    for labeling, enabling them to test custom models and enhance the quality 
    of the results. The feature also allows delivery teams to add and modify 
    correlation tags in the manual review process.
    `,
    callToAction: <ItemLink teaser={4} />,
    image: correlatedAnswerPreview,
    logo: "eigen",
    id: "correlated-answers",
  }
]

const ARTICLES = [
  {
    title: "Designing the Modern <i>Flight Booking</i> Experience",
    description: `
      "When presenting flight options (offers) back to your customers for a 
      simple return flight, there are at least 32 important pieces of 
      information to communicate.”<br />
      In this blog post, I reflect upon the challenges and pitfalls that 
      surface when designing a modern and intuitive booking flow.
    `,
    image: blogPostPreview,
    logo: "duffel",
    id: "blog-post",
    callToAction: "https://duffel.com/blog/designing-the-modern-flight-booking-experience",
  }
]

const PATENTS = [
  {
    title: "Training and Applying Structured Data Extraction Models",
    description: `
      I was part of the founding team that designed and developed the 
      core technology of the Eigen platform.
      <br />
      <br />
      Patent US20220327284A1
      <br />
      United States
    `, image: patentPreview,
    logo: "eigen",
    id: "patent",
  }
]

export function Work() {

  return (
    <motion.div
      className='work-wrapper'
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 25 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <section>
        <h1 className="title">Selected <i>work</i></h1>
        <div className="projects">

          {
            WORK.map((work, index) => {
              return (
                <WorkItem
                  key={index}
                  id={work.id}
                  title={work.title}
                  description={work.description}
                  image={work.image}
                  logo={work.logo}
                  callToAction={work.callToAction}
                />
              )
            }
            )
          }
        </div>
      </section>
      <section>

        <h1 className="title">Articles</h1>
        <div className="articles">
          {
            ARTICLES.map((article, index) => {
              return (
                <WorkItem
                  key={index}
                  id={article.id}
                  title={article.title}
                  description={article.description}
                  image={article.image}
                  logo={article.logo}
                  callToAction={<ItemLink url={article.callToAction} />}
                />
              )
            }
            )
          }
        </div>
      </section>
      <section>
        <h1 className="title">Patents</h1>
        <div className="patents">
          {
            PATENTS.map((patent, index) => {
              return (
                <WorkItem
                  key={index}
                  id={patent.id}
                  title={patent.title}
                  description={patent.description}
                  image={patent.image}
                  logo={patent.logo}
                />
              )
            }
            )
          }
        </div>
      </section>
    </motion.div>
  )
}


function WorkItem({ title, description, image, logo, callToAction, id }:
  {
    id?: string,
    title: string,
    description: string,
    image: StaticImport,
    logo: string,
    callToAction?: string | JSX.Element
  }) {
  const renderLogo = () => {
    if (logo == "duffel") return <DuffelLogo />
    else if (logo === "eigen") return <EigenLogo />
    else return null;
  }

  const workItemVariant: Variants = {
    offscreen: {
      y: 20,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.div
      className="work-item"
      initial={`${id === "stays" ? "onscreen" : "offscreen"}`}
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
      variants={workItemVariant}
    >
      <Image
        className='work-image'
        src={image}
        alt=""

        style={{ width: '100%', height: 'auto' }}
      />
      <div className='work-description'>
        {renderLogo()}
        <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />
        <p dangerouslySetInnerHTML={{ __html: description }} />

        {callToAction}
      </div>
    </motion.div>
  )
}
