interface CenterTextProps {
  children: React.ReactNode;
  description: string;
}

const CenterText = ({ children, description }: CenterTextProps) => {
  return (
    <>
      <div className="text-center space-y-2 font-orbit-max">
        <h1 className="text-6xl">{children}</h1>
        <p className="text-xl text-white-60 tracking-wide">{description}</p>
      </div>
    </>
  );
};

export default CenterText;
