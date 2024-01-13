import HomeContent from './_components/home-content';

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <HomeContent />
      <h1 className="text-3xl font-bold">
        سلام این یک متن نمایشی جهت فهمیدن تاثیر فونت است
      </h1>
    </div>
  );
}
