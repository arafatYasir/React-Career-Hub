const JobCategory = () => {
    return (
        <div>
            <h2 className="text-5xl text-center">Job Category List</h2>
            <p className="text-center text-xl font-medium mt-4">Explore thousands of job opportunities with all the information you need. Its your future.</p>

            <div className="flex justify-between">
                <div className="bg-slate-300 px-10 py-12">
                    <h3 className="text-xl">Account & Finance</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-slate-300 px-10 py-12">
                    <h3 className="text-xl">Creative Design</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-slate-300 px-10 py-12">
                    <h3 className="text-xl">Marketing & Sales</h3>
                    <p>300 Jobs Available</p>
                </div>
                <div className="bg-slate-300 px-10 py-12">
                    <h3 className="text-xl">Engineer Job</h3>
                    <p>300 Jobs Available</p>
                </div>
            </div>
        </div>
    );
};

export default JobCategory;