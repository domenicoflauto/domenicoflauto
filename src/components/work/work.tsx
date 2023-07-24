import Image from 'next/image';

import { DuffelLogo, EigenLogo } from '.';

import './work.css';

export function Work() {
  return (
    <div className="work">
      <div className="projects">
        <h1 className="title">Selected <i>work</i></h1>

        <WorkItem
          title={"A new vertical to sell <i>accommodation</i>."}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sint fugiat optio
        quidem veritatis quaerat, natus distinctio corrupti sed fuga? Expedita tempora,
        quibusdam consectetur ab ex aliquam minima vero commodi!"
          image="/images/work/stays-1.png"
          logo="duffel"
        />
        <WorkItem
          title={"A streamlined flight booking experience."}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sint fugiat optio
        quidem veritatis quaerat, natus distinctio corrupti sed fuga? Expedita tempora,
        quibusdam consectetur ab ex aliquam minima vero commodi!"
          image="/images/work/multi-step-search-1.png"
          logo="duffel"
        />
        <WorkItem
          title={"Help users <i>evaluating</i> and <i>understanding</i> Machine Learning models"}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sint fugiat optio
        quidem veritatis quaerat, natus distinctio corrupti sed fuga? Expedita tempora,
        quibusdam consectetur ab ex aliquam minima vero commodi!"
          image="/images/work/model-evaluation-1.png"
          logo="eigen"
        />
        <WorkItem
          title={"Enabling analysts to find correlations between answers in complicated documents."}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sint fugiat optio
        quidem veritatis quaerat, natus distinctio corrupti sed fuga? Expedita tempora,
        quibusdam consectetur ab ex aliquam minima vero commodi!"
          image="/images/work/correlated-answers-1.png"
          logo="eigen"
        />
      </div>
      <div className="articles">
        <h1 className="title">Articles</h1>

        <WorkItem
          title={"Designing the modern <i>flight booking</i> experience"}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sint fugiat optio
        quidem veritatis quaerat, natus distinctio corrupti sed fuga? Expedita tempora,
        quibusdam consectetur ab ex aliquam minima vero commodi!"
          image="/images/articles/modern-flight-booking.png"
          logo="duffel"
        />
      </div>
      <div className="patents">
        <h1 className="title">Patents</h1>

        <WorkItem
          title={"Training and applying structured data extraction models"}
          description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sint fugiat optio
        quidem veritatis quaerat, natus distinctio corrupti sed fuga? Expedita tempora,
        quibusdam consectetur ab ex aliquam minima vero commodi!"
          image="/images/patents/training.png"
          logo="eigen"
        />
      </div>
    </div>
  )
}


function WorkItem({ title, description, image, logo }: { title: string, description: string, image: string, logo: string }) {
  const renderLogo = () => {
    if (logo == "duffel") return <DuffelLogo />
    else if (logo === "eigen") return <EigenLogo />
    else return null;
  }

  return (
    <div className="work-item">
      <Image src={image} alt="Stays" width={584} height={403} />
      <div className='work-description'>
        {renderLogo()}
        <h2 className='title' dangerouslySetInnerHTML={{ __html: title }} />
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

