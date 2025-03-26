'use client';

import Link from 'next/link';
import { ROUTES } from '@/constants';
import classNames from 'classnames';
import { usePathname } from 'next/navigation';

const LinkItem = ({ route, text }: { route: ROUTES; text: string }) => {
  const pathname = usePathname();

  const classes = classNames('flex flex-col items-center', {
    'text-gray-400': pathname !== route,
  });

  return (
    <li>
      <Link href={route} className={classes}>
        {text}
      </Link>
    </li>
  );
};

const DesktopNavigation = () => {
  return (
    <header className="hidden md:flex top-0 w-full bg-gray-100 p-4 shadow-md items-center justify-between">
      <nav>
        <ul className="flex space-x-8">
          <LinkItem text="Головна" route={ROUTES.Home} />
          <LinkItem text="Продати" route={ROUTES.CreateBook} />
        </ul>
      </nav>
    </header>
  );
};

export default DesktopNavigation;
