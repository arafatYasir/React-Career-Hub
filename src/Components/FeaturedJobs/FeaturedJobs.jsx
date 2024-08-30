import { useEffect } from "react";
import { useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [showJobs, setShowJobs] = useState(4);

    useEffect(() => {
        fetch("jobs.json")
        .then(res => res.json())
        .then(data => setJobs(data))
    }, []);

    const handleShowAll = () => {
        setShowJobs(jobs.length);
    }
    return (
        <div className="mt-28 mb-28">
            <h2 className="text-5xl text-center">Featured Jobs: {jobs.length}</h2>
            <p className="text-center text-xl font-medium mt-6 mb-5">Explore thousands of job opportunities with all the information you need. Its your future.</p>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                
                {
                    jobs.slice(0, showJobs).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={`text-center mt-16 ${showJobs === jobs.length ? "hidden" : ""}`}>
                <button onClick={handleShowAll} className="btn btn-ghost bg-[#9873FF]">Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;