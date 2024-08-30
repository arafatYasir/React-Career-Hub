const getStoredJobs = () => {
    const storedJobs = localStorage.getItem('job-applications');
    if(storedJobs) {
        return JSON.parse(storedJobs);
    }
    return [];
}

const saveJobs = (id) => {
    const storedJobs = getStoredJobs();
    const exist = storedJobs.find(jobId => jobId === id);

    if(!exist) {
        storedJobs.push(id);
        localStorage.setItem('job-applications', JSON.stringify(storedJobs));
    }
}

export {getStoredJobs, saveJobs}