import React from 'react'; 
import _ from 'lodash'


import { prop2styles } from './lib/cls'

const ClsComponent = (comp)=>{
    let child = _.get(comp , "children") || _.get(comp , "props.children");
    if(child){
        return React.Children.map(child , childcomp=>{
            if(React.isValidElement(childcomp)){
                prop2styles(childcomp.props)
                // {style:{fontSize: Number((childcomp.props.cls || "") + "0") } }
                return React.cloneElement(childcomp, {}, ClsComponent(childcomp)) 
            }
            return  childcomp
        })
    }
    return React.cloneElement(comp) 
}

export default (props)=>{
    return  <ClsComponent {...props} ></ClsComponent>
}
