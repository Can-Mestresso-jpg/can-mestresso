type TitleProps = {
  title: string;
  subtitle?: string;
};

export default function Title({ title, subtitle }: TitleProps) {
  return (
    <div className="mb-16 text-center">
      {subtitle && (
        <p className="mb-3 uppercase tracking-[0.3em] text-sm text-gray-500">
          {subtitle}
        </p>
      )}

      <h2 className="text-5xl font-light">
        {title}
      </h2>
    </div>
  );
}