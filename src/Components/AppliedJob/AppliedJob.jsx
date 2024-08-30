const AppliedJob = ({ job }) => {
    return (
        <div className="border rounded-xl w-1/2 flex items-center justify-between px-7 py-7 mt-10">
            <div className="space-y-4">
                <h2 className="text-2xl font-bold">{job.job_title}</h2>
                <p className="text-xl">{job.company_name}</p>
                <p className="text-xl">{job.remote_or_onsite}</p>
                <p className="text-xl">{job.job_type}</p>
                <p className="text-xl">{job.location}</p>
                <p className="text-xl">Salary: {job.salary}</p>
            </div>
            <div>
                <button className="btn btn-ghost bg-[#9873FF]">View Details</button>
            </div>
        </div>
    );
};

export default AppliedJob;