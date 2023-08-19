import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Intro`.
 */
export type IntroProps = SliceComponentProps<Content.IntroSlice>;

/**
 * Component for "Intro" Slices.
 */
const Intro = ({ slice }: IntroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <h1>{slice.primary.title}</h1>
      <PrismicRichText field={slice.primary.intro} />

    </section>
  );
};

export default Intro;
