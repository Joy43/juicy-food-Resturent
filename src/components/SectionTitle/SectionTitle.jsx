const SectionTitle = ({ heading, subHeading }) => {
  return (
    // <div className="mx-auto text-center md:w-4/12 my-8">
    //     <p className="text-yellow-600 mb-2">--- {subHeading} ---</p>
    //     <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    // </div>
    <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        {subHeading}
      </div>
      <div className="divider lg:divider-horizontal">← or →</div>
      <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
        {heading}
      </div>
    </div>
  );
};

export default SectionTitle;
