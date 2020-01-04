import React from 'react'; 
import _ from 'lodash'


import { prop2styles } from './lib/cls'

const ClsComponent = (comp)=>{
    let child = _.get(comp , "children") || _.get(comp , "props.children");
    if(child){
        return React.Children.map(child , childcomp=>{
            if(React.isValidElement(childcomp)){
                let cls = prop2styles(childcomp.props)
                let rtn = React.cloneElement(childcomp, cls , ClsComponent(childcomp)) 
                return rtn;
            }
            return  childcomp
        })
    }
    return React.cloneElement(comp, {style:{}}) 
}

export default (props)=>{
    // let comp = <ClsComponent {...props} ></ClsComponent>
    return  <ClsComponent {...props} ></ClsComponent>;
}
