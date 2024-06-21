import { signOut } from 'firebase/auth';

import NavLinks from './NavLinks';
import { auth } from '../firebase';
import { PowerIcon } from '@heroicons/react/24/outline';

export default function SideNav() {

  function handleSignOut() {
    signOut(auth);
    window.location.href = '/';
  }

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <a
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <div
            className={`flex flex-row items-center leading-none text-white`}
          >
            <p className="text-[30px]">Calendar.io</p>
          </div>
        </div>
      </a>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button
          onClick={() => handleSignOut()}
          className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Cerrar Sesión</div>
          </button>
        </form>
      </div>
    </div>
  );
}
