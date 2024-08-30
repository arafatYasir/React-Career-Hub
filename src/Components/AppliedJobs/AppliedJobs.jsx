import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobs } from "../../Utility/localstorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [applied, setApplied] = useState([]);
    const [display, setDisplay] = useState([]);

    useEffect(() => {
        const storedJobIds = getStoredJobs();
        if (storedJobIds.length > 0) {
            const jobsApplied = [];
            for (const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);

                if (job) {
                    jobsApplied.push(job);
                }
            }
            // console.log(jobsApplied);
            setApplied(jobsApplied);
            setDisplay(jobsApplied);
        }
    }, []);

    const handleFilter = (filter) => {
        if(filter === 'all') {
            setDisplay(applied);
        }
        else if(filter === 'remote') {
            const remoteJobs = applied.filter(job => job.remote_or_onsite === "Remote");
            setDisplay(remoteJobs);
        }
        else if(filter === 'onsite') {
            const onsiteJobs = applied.filter(job => job.remote_or_onsite === "Onsite");
            setDisplay(onsiteJobs);
        }
    }

    return (
        <div className="my-28">
            <h2 className="text-3xl text-center mb-20">Total Jobs Applied: {applied.length}</h2>
            <div className="dropdown mb-20">
                <div tabIndex={0} role="button" className="btn m-1">Click</div>
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                    <li onClick={() => handleFilter("all")}><a>All</a></li>
                    <li onClick={() => handleFilter("remote")}><a>Remote</a></li>
                    <li onClick={() => handleFilter("onsite")}><a>Onsite</a></li>
                </ul>
            </div>
            <div>
                {
                    display.map(job => <AppliedJob key={job.id} job={job}></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;