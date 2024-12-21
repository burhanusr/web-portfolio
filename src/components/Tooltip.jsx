export default function Tooltip({ children, text }) {
  return (
    <div className="group relative">
      {children}
      <div className="absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 transform rounded bg-blue-500/60 px-2 py-1 text-xs text-white backdrop-blur-xl group-hover:block">
        {text}
      </div>
    </div>
  );
}
