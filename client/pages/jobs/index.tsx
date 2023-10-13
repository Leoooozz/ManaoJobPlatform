import JobsList from "../../components/jobs/list/jobLists"
import React from 'react'
import JobCount from "@/components/jobs/numberofJobs"

const index = () => {
    return (
        <main>
            <JobCount />
            <JobsList />
        </main>)
}

export default index