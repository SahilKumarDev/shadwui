interface CenterTextProps {
  children: React.ReactNode;
  description: string;
  className?: string;
}

const CenterText = ({ children, description, className }: CenterTextProps) => {
  return (
    <>
      <div className="text-center space-y-1 lg:space-y-2 font-orbit-max">
        <h1 className={`${className} lg:text-6xl text-4xl`}>{children}</h1>
        <p className="lg:text-xl text-base dark:text-white-60 tracking-wide text-black/70">
          {description}
        </p>
      </div>
    </>
  );
};

export default CenterText;
