import { Navbar } from "./blocks/navigation/Navbar";

function App() {
  return (
    <div
      id='page-body'
      className='mx-auto flex min-h-dvh w-full min-w-dvw flex-col items-center bg-linear-to-r from-[#F9FAFB] to-[#D2D6DB] p-4'
    >
      <Navbar />
      <div className='mt-4 flex w-full flex-col rounded-md bg-white'>
        <main className='flex flex-col'></main>
      </div>
    </div>
  );
}

export { App };
