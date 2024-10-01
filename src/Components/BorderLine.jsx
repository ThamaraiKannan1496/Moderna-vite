function BorderLine() {
  return (
    <>
      <div className="mx-auto my-4 flex w-2/6 items-center">
        <div className="flex-grow-[1] border-t border-gray-400"></div>
        <div className="h-1 w-16 bg-blue-500"></div>
        <div className="flex-grow border-t border-gray-400"></div>
      </div>
    </>
  );
}

export default BorderLine;
