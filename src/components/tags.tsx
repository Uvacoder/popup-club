export default function PopupTags(
  { name }: { name: string },
  { key }: { key: string }
) {
  return (
    <p className='mt-1 truncate text-sm space-x-1 py-2 text-gray-500'>
      <span
        key={key}
        className='inline-block bg-gray-200 hover:bg-gray-300 hover:cursor-pointer rounded-full px-2 py-0.5 text-xs font-medium text-gray-800'
      >
        {name}
      </span>
    </p>
  );
}
