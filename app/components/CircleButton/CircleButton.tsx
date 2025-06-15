type PaginationButtonProps = {
  active?: boolean;
  disabled?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function CircleButton(props: PaginationButtonProps) {
  const {
    active,
    disabled,
    onClick,
    children,
  } = props

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`w-9 h-9 rounded-full flex items-center justify-center border
        ${disabled
          ? 'bg-gray-300 text-gray-400 border-none'
          : active
            ? 'bg-blue-500 text-white border-blue-500'
            : 'bg-white text-blue-500 border-blue-500 hover:bg-blue-100'}`}
    >
      {children}
    </button>
  );
}
