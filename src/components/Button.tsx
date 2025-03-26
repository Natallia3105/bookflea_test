import { Spinner } from '@/components/Spinner';

type Props = {
  label: string;
  btnType: 'button' | 'submit';
  isLoading?: boolean;
};

export const Button = ({ btnType, label, isLoading = false }: Props) => {
  return (
    <button
      className="bg-black text-white focus:outline-0 font-semibold py-3 rounded-lg flex justify-center items-center"
      type={btnType}
    >
      {isLoading ? <Spinner /> : label}
    </button>
  );
};
