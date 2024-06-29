import staysPreview from "../../../public/images/work/stays-1.png"
import mssPreview from "../../../public/images/work/multi-step-search-1.png"
import modelEvalPreview from "../../../public/images/work/model-evaluation-1.png"
import correlatedAnswerPreview from "../../../public/images/work/correlated-answers-1.png"
import blogPostPreview from "../../../public/images/articles/modern-flight-booking.png"
import patentPreview from "../../../public/images/patents/training.png"

export const WORK = [
  {
    title: "Stays: Exploring Uncharted Territory in the <i>Accommodation</i> Industry.",
    description: `
      I designed and launched the first version of Stays, a fresh vertical 
      for selling accommodations on Duffel. This project provided me with 
      a great opportunity to build a new product from scratch - from initial 
      research to final delivery.
    `,
    teaser: 1,
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
    teaser: 2,
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
    teaser: 3,
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
    teaser: 4,
    image: correlatedAnswerPreview,
    logo: "eigen",
    id: "correlated-answers",
  }
]

export const ARTICLES = [
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
    url: "https://duffel.com/blog/designing-the-modern-flight-booking-experience",
  }
]

export const PATENTS = [
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