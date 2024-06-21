import { BookmarkIcon } from '@heroicons/react/24/outline';

export default function Logo() {
  return (
    <div
      className={`flex flex-row items-center leading-none text-white`}
    >
      <BookmarkIcon className="h-12 w-12" />
      <p className="text-[44px]">Calendar.io</p>
    </div>
  );
}
