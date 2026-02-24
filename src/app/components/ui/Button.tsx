type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-synaptaPurple to-synaptaBlue text-white shadow-lg hover:scale-105 transition">
      {children}
    </button>
  );
}