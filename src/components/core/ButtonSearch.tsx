interface ButtonSearchProps {
  type: 'button' | 'submit' | 'reset'
  onClick: () => void
}

export const ButtonSearch = (props: ButtonSearchProps) => {
  const { onClick, type } = props
  return (
    <button
      type={type || 'button'}
      id="search-button"
      onClick={onClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-colors duration-300 w-full"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon icon-tabler icons-tabler-outline icon-tabler-search"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        ></path>
        <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"></path>
        <path d="M21 21l-6 -6"></path>
      </svg>
      Buscar
    </button>
  )
}
