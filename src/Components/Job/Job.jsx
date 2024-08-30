const Job = ({ job }) => {
    const {job_title, logo, company_name, remote_or_onsite, location, salary, job_type} = job;
    return (
        <div className="border-2 px-10 py-12 space-y-4">
            <h3 className="text-3xl">{job_title}</h3>
            <p className="font-bold">{company_name}</p>
            <span>{remote_or_onsite} -- </span>
            <span>{job_type}</span>
            <p>{location}</p>
            <p>Salary: <span className="font-bold">{salary}</span></p>
            <button className="btn btn-ghost bg-[#9873FF]">View Details</button>
        </div>
    );
};

export default Job;