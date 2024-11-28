interface CenterTextProps {
  children: React.ReactNode;
  description: string;
}

const CenterText = ({ children, description }: CenterTextProps) => {
  return (
    <>
      <div className="text-center space-y-1 lg:space-y-2 font-orbit-max">
        <h1 className="lg:text-6xl text-4xl ">{children}</h1>
        <p className="lg:text-xl text-base text-white-60 tracking-wide">{description}</p>
      </div>
    </>
  );
};

export default CenterText;
