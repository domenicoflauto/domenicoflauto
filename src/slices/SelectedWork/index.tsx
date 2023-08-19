import { Content, isFilled } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import { createClient } from "@/prismicio";

/**
 * Props for `SelectedWork`.
 */
export type SelectedWorkProps = SliceComponentProps<Content.SelectedWorkSlice>;

/**
 * Component for "SelectedWork" Slices.
 */
const SelectedWork = async ({ slice }: SelectedWorkProps): Promise<JSX.Element> => {

  const client = createClient();
  const projects = await Promise.all(
    slice.items.map((item) => {
      if (isFilled.contentRelationship(item.project) && item.project.uid) {
        return client.getByUID("case_study", item.project.uid)
      }
    }))
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project?.data.title}</h2>
          <PrismicRichText field={project?.data.description} />
        </div>
      ))}

      <h1>{slice.primary.title}</h1>
    </section>
  );
};

export default SelectedWork;
