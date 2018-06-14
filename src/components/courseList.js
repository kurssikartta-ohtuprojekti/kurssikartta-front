import React from 'react'
import Course from './course'
const mapCss = {
    backgroundColor: '#f2f2f2',
    borderRadius: 30,
    borderWidth: 5,
    position: 'absolute'
}
// Kaikkien kurssien renderointi listaan
const CourseList = ({ perus, aine, syv, mat, stats }) => (
    <div className="mappi" style={mapCss}>
        <div className="perus" style={{ float: 'left', padding: 4 }}>
            <h2>Perusopinnot</h2>
            {perus.map(course =>
                <Course key={course.code} course={course} style={{ display: 'inline-block' }} />
            )}
        </div>
        <div className="aine" style={{ float: 'left', padding: 4 }}>
            <h2>Aineopinnot</h2>
            {aine.map(course =>
                <Course key={course.code} course={course} style={{ display: 'inline-block' }} />
            )}
        </div>
        <div className="syventavat" style={{ float: 'left', padding: 4 }}>
            <h2>Syventävät opinnot</h2>
            {syv.map(course =>
                <Course key={course.code} course={course} style={{ display: 'inline-block' }} />
            )}
        </div>
        <div className="matematiikka" style={{ float: 'left', padding: 4 }}>
            <h2>Matematiikan opinnot</h2>
            {mat.map(course =>
                <Course key={course.code} course={course} style={{ display: 'inline-block' }}/>
            )}
        </div>
        <div className="tilastotiede" style={{ float: 'left', padding: 4 }}>
            <h2>Tilastotieteen opinnot</h2>
            {stats.map(course =>
                <Course key={course.code} course={course} style={{ display: 'inline-block' }} />
            )}
        </div>
    </div>
)


export default CourseList