import React from 'react'

const AdminPage = ({unmappedCourses, courseMapAdmin}) => {
    return (
        <div>
        {courseMapAdmin}
        {unmappedCourses}
        </div>
    )
}

export default AdminPage