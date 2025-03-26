import classNames from 'classnames';

export const Home = ({ isActive }: { isActive: boolean }) => {
  const className = classNames({
    'stroke-gray-400': !isActive,
    'stroke-black': isActive,
  });

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 21V13C15 12.7348 14.8946 12.4804 14.7071 12.2929C14.5196 12.1054 14.2652 12 14 12H10C9.73478 12 9.48043 12.1054 9.29289 12.2929C9.10536 12.4804 9 12.7348 9 13V21"
        className={className}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 10C2.99993 9.7091 3.06333 9.42165 3.18579 9.15775C3.30824 8.89384 3.4868 8.65983 3.709 8.47203L10.709 2.47303C11.07 2.16794 11.5274 2.00055 12 2.00055C12.4726 2.00055 12.93 2.16794 13.291 2.47303L20.291 8.47203C20.5132 8.65983 20.6918 8.89384 20.8142 9.15775C20.9367 9.42165 21.0001 9.7091 21 10V19C21 19.5305 20.7893 20.0392 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0392 3 19.5305 3 19V10Z"
        className={className}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
