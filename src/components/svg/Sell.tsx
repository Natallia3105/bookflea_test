import classNames from 'classnames';

export const Sell = ({ isActive }: { isActive: boolean }) => {
  const className = classNames({
    'stroke-gray-400': !isActive,
    'stroke-black': isActive,
  });

  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12.5 7V13"
        className={className}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.5 19.5V4.5C4.5 3.83696 4.76339 3.20107 5.23223 2.73223C5.70107 2.26339 6.33696 2 7 2H19.5C19.7652 2 20.0196 2.10536 20.2071 2.29289C20.3946 2.48043 20.5 2.73478 20.5 3V21C20.5 21.2652 20.3946 21.5196 20.2071 21.7071C20.0196 21.8946 19.7652 22 19.5 22H7C6.33696 22 5.70107 21.7366 5.23223 21.2678C4.76339 20.7989 4.5 20.163 4.5 19.5ZM4.5 19.5C4.5 18.837 4.76339 18.2011 5.23223 17.7322C5.70107 17.2634 6.33696 17 7 17H20.5"
        className={className}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 10H15.5"
        className={className}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
