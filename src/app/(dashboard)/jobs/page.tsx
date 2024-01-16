import FilterSection from './_components/filter-section';
import JobsListSection from './_components/jobs-list';

export default function Jobs() {
  return (
    <>
      <section className='py-12'>
        <div className="grid grid-cols-12 gap-6 relative">
          <FilterSection className='col-span-4 sticky top-[100px] left-0 h-1/2' />
          <JobsListSection className="col-span-8" />
        </div>
      </section>
    </>
  );
}
