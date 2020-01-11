import React ,{ComponentType} from 'react'; 
import _ from 'lodash'
import { prop2styles } from './lib/cls'
import colorObj  from './lib/colorObj'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const ClsComponent = (comp)=>{
    let child = _.get(comp , "children") || _.get(comp , "props.children");
    
    if(child){ 
        return React.Children.map(child , childcomp=>{
            if(React.isValidElement(childcomp)){
                let cls = prop2styles(childcomp.props)
                let rtn = {};
                let child_child = _.get(childcomp , "children") || _.get(childcomp , "props.children");
                _.forEach(childcomp.props , (prop, key)=>{
                    if(key === "children"){ return;}
                    var bel  = React.isValidElement(prop) 
                    if(bel){ 
                        let clsch = prop2styles(prop.props)
                        cls[key] = React.cloneElement(prop, clsch , ClsComponent(prop)) 
                    }
                });
                if(child_child){
                    rtn = React.cloneElement(childcomp, cls , ClsComponent(childcomp)) 
                }else{
                    rtn = React.cloneElement(childcomp, cls) 
                }
                return rtn;
            }
            return  childcomp
        })
    } 
    
    if(React.isValidElement(comp)){
        var cls = prop2styles(comp.props)
        return React.cloneElement(comp, cls)  
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
    setColor,
    wp,
    hp
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
    let comp = <ClsComponent {...props} ></ClsComponent>
    // console.log(" >>>>: " , comp)   
    return  comp;
}
