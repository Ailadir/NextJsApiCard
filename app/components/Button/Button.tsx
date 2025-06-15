type SortingButtonProps = {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

export default function SortingButton({ active, onClick, children }: SortingButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded ${active
        ? 'bg-blue-600 text-white'
        : 'bg-gray-200 hover:bg-gray-300 text-black'
        }`}
    >
      {children}
    </button>
  );
}
