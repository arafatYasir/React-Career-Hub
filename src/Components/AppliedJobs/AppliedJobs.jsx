import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [applied, setApplied] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobs();
        if(storedJobIds.length > 0) {
            const jobsApplied = [];
            for(const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);

                if(job) {
                    jobsApplied.push(job);
                }
            }
            // console.log(jobsApplied);
            setApplied(jobsApplied);
        }
    }, []);

    return (
        <div className="my-28">
            <h2 className="text-3xl text-center mb-20">Total Jobs Applied: {applied.length}</h2>
            <div>
                {
                    applied.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;