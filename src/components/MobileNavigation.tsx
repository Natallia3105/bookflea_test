'use client';

import { usePathname } from 'next/navigation';
import { Sell } from '@/components/svg/Sell';
import { Home } from '@/components/svg/Home';
import classNames from 'classnames';
import Link from 'next/link';
import { ROUTES } from '@/constants';
import { ReactNode } from 'react';

const LinkItem = ({
  renderIcon,
  route,
  text,
}: {
  route: ROUTES;
  text: string;
  renderIcon(isActive: boolean): ReactNode;
}) => {
  const pathname = usePathname();

  return (
    <li className="flex flex-col items-center">
      <Link href={route} className="flex flex-col items-center">
        {renderIcon(pathname === route)}
        <span
          className={classNames('text-[10px]', {
            'text-gray-400': pathname !== route,
          })}
        >
          {text}
        </span>
      </Link>
    </li>
  );
};

const MobileNavigation = () => {
  return (
    <nav className="md:hidden fixed bottom-0 w-full bg-white p-4 border-t border-gray-200">
      <ul className="flex justify-center gap-[34px]">
        <LinkItem
          route={ROUTES.Home}
          text="Головна"
          renderIcon={(isActive) => <Home isActive={isActive} />}
        />
        <LinkItem
          route={ROUTES.CreateBook}
          text="Продати"
          renderIcon={(isActive) => <Sell isActive={isActive} />}
        />
      </ul>
      <div className="w-[134px] h-[5px] bg-black rounded-full mx-auto mt-4" />
    </nav>
  );
};

export default MobileNavigation;
