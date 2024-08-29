const Banner = () => {
    return (
        <div className="flex items-center gap-20 mb-32">
            {/* Text */}
            <div>
                <h1 className="text-7xl">One Step Closer  <br /> To Your <br /> <span className="text-[#9873FF]">Dream Job</span></h1>
                <p className="text-xl font-medium mt-6 mb-8">Explore thousands of job opportunities with all the information you need. <br /> Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="btn btn-ghost bg-[#9873FF]">Get Started</button>
            </div>
            {/* Image */}
            <div>
                <img src="https://i.postimg.cc/tC0HRnp8/user.png" alt="User" />
            </div>
        </div>
    );
};

export default Banner;