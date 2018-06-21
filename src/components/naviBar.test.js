import React from 'react'
import { shallow } from 'enzyme'
import NaviBar from './naviBar'

describe.only('<NaviBar />', () => {
    it('renders Navigation bar', () => {
        const mockHandler = jest.fn()
        const user = {
            username: 'admin',
            password: 'passu',
        }
        const courseComponent = shallow(<NaviBar user={user}/>)
        const contentDiv = courseComponent.find('.navBar')
        //console.log(courseComponent)
        //console.log(contentDiv.text())
        expect(contentDiv.html()).toContain("Kurssikartta-sovellus")
    })

})