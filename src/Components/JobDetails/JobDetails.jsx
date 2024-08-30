import { useLoaderData, useParams } from "react-router-dom";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const job = jobs.find(job => job.id === parseInt(id));
    console.log(job, id);
    return (
        <div className="grid grid-cols-4">
            <div className="col-span-3 space-y-5">
                <p><span className="font-medium">Job Description: </span>{job.job_description}</p>
                <p><span className="font-medium">Job Responsibility: </span>{job.job_responsibility}</p>
            </div>
            <div className="col-span-1 bg-slate-200">
                <h2 className="text-2xl">Job Details</h2>
                <hr />
                <p className="font-semibold">Salary: {job.salary}</p>
                <p className="font-semibold">Job Title: {job.job_title}</p>
                <hr />
                <h2 className="text-2xl">Contact Information</h2>
                <button className="w-full mt-8 bg-[#9873FF] py-3 text-xl rounded-lg">Apply Now</button>
            </div>
        </div>
    );
};

export default JobDetails;