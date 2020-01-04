import React from 'react'; 
import _ from 'lodash'
import { prop2styles } from './lib/cls'
import colorObj  from './lib/colorObj'

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
    return null;//React.cloneElement(comp, {style:{}}) 
}
let test =prop2styles; 
let setColor = (id , colorCode)=>{
    // console.log(colorObj)
    colorObj[id] = colorCode;
    return true;
}

export {
    test,
    setColor
}

export default (props)=>{
    // let ss = React.Children.map(props.children , childcomp=>{
    //     // console.log(childcomp.props.children)
    //    let rtn =  React.cloneElement(childcomp)
    //    console.log(rtn)
    //    return rtn 
    // }) 
    // console.log(ss)
    // let comp1 = <ClsComponent {...props} ></ClsComponent>
    // console.log(new ClsComponent(props))  
    // return ss 
    // return  <View></View>
    // let comp = <ClsComponent {...props} ></ClsComponent>
    // console.log(" >>: " , props.children )  
    return  <ClsComponent {...props} ></ClsComponent>;
}
